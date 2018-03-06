import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const finishScenario = ({ party = 1, scenario, characters = { 1: true }, level = 1, failed = false, rewards = {} }) =>
  mockGithub(
    ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({ party, scenario, characters, level, failed, rewards }),
  );

describe('PQ:Vengeance', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce(finishScenario({ scenario: SCENARIO.BLACK_BARROW }));
    expect(result.retirement).toEqual({
      complete: false,
      progress: 0,
      scenarios: {},
    });
  });

  it('should progress', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.BLACK_BARROW }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_WAREHOUSE }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 1 / 5,
      scenarios: { [SCENARIO.GLOOMHAVEN_WAREHOUSE]: true },
    });
  });

  it('should not count quests completed if the character was not involved', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_SQUARE_A, characters: { 1: {} } }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_WAREHOUSE, characters: { 2: {} } }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_SQUARE_B, characters: { 1: {}, 2: {} } }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 2 / 5,
      scenarios: {
        [SCENARIO.GLOOMHAVEN_SQUARE_A]: true,
        [SCENARIO.GLOOMHAVEN_SQUARE_B]: true,
      },
    });
  });

  it('should not count duplicates or count more than 3 target scenarios', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_WAREHOUSE }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_SQUARE_A }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_SQUARE_B }),
      finishScenario({ scenario: SCENARIO.ABANDONED_SEWERS }),
      finishScenario({ scenario: SCENARIO.ABANDONED_SEWERS }),
      finishScenario({ scenario: SCENARIO.DEEP_RUINS }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 4 / 5,
      scenarios: {
        [SCENARIO.GLOOMHAVEN_WAREHOUSE]: true,
        [SCENARIO.GLOOMHAVEN_SQUARE_A]: true,
        [SCENARIO.GLOOMHAVEN_SQUARE_B]: true,
        [SCENARIO.ABANDONED_SEWERS]: true,
        [SCENARIO.DEEP_RUINS]: true,
      },
    });
  });

  it('should complete', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_WAREHOUSE }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_SQUARE_A }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_SQUARE_B }),
      finishScenario({ scenario: SCENARIO.ABANDONED_SEWERS }),
      finishScenario({ scenario: SCENARIO.DEEP_RUINS }),
      finishScenario({ scenario: SCENARIO.INVESTIGATION }),
    );
    expect(result.retirement).toEqual({ complete: true, progress: 1 });
  });
});

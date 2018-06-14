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
      finishScenario({ scenario: SCENARIO.DECREPIT_WOOD }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 1 / 3,
      scenarios: { [SCENARIO.DECREPIT_WOOD]: true },
    });
  });

  it('should not count quests completed if the character was not involved', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.DECREPIT_WOOD, characters: { 1: {} } }),
      finishScenario({ scenario: SCENARIO.REBEL_SWAMP, characters: { 2: {} } }),
      finishScenario({ scenario: SCENARIO.FORGOTTEN_CRYPT, characters: { 1: {}, 2: {} } }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 2 / 3,
      scenarios: {
        [SCENARIO.DECREPIT_WOOD]: true,
        [SCENARIO.FORGOTTEN_CRYPT]: true,
      },
    });
  });

  it('should not count duplicates or count more than 2 target scenarios', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.DECREPIT_WOOD }),
      finishScenario({ scenario: SCENARIO.REBEL_SWAMP }),
      finishScenario({ scenario: SCENARIO.REBEL_SWAMP }),
      finishScenario({ scenario: SCENARIO.FADING_LIGHTHOUSE }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 2 / 3,
      scenarios: {
        [SCENARIO.DECREPIT_WOOD]: true,
        [SCENARIO.REBEL_SWAMP]: true,
        [SCENARIO.FADING_LIGHTHOUSE]: true,
      },
    });
  });

  it('should complete', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.DECREPIT_WOOD }),
      finishScenario({ scenario: SCENARIO.REBEL_SWAMP }),
      finishScenario({ scenario: SCENARIO.PIT_OF_SOULS }),
    );
    expect(result.retirement).toEqual({ complete: true, progress: 1 });
  });
});

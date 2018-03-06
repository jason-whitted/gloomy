import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const finishScenario = ({ party = 1, scenario, characters = { 1: true }, level = 1, failed = false, rewards = {} }) =>
  mockGithub(
    ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({ party, scenario, characters, level, failed, rewards }),
  );

describe('PQ:GoliathToppler', () => {
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
      finishScenario({ scenario: SCENARIO.LOST_TEMPLE }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 1 / 4,
      scenarios: { [SCENARIO.LOST_TEMPLE]: true },
    });
  });

  it('should not count quests completed if the character was not involved', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.BARROW_LAIR, characters: { 1: {} } }),
      finishScenario({ scenario: SCENARIO.LOST_TEMPLE, characters: { 2: {} } }),
      finishScenario({ scenario: SCENARIO.TEMPLE_OF_THE_ECLIPSE, characters: { 1: {}, 2: {} } }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 2 / 4,
      scenarios: {
        [SCENARIO.BARROW_LAIR]: true,
        [SCENARIO.TEMPLE_OF_THE_ECLIPSE]: true,
      },
    });
  });

  it('should not count duplicates or count more than 3 target scenarios', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.BARROW_LAIR }),
      finishScenario({ scenario: SCENARIO.LOST_TEMPLE }),
      finishScenario({ scenario: SCENARIO.LOST_TEMPLE }),
      finishScenario({ scenario: SCENARIO.TEMPLE_OF_THE_ECLIPSE }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 3 / 4,
      scenarios: {
        [SCENARIO.BARROW_LAIR]: true,
        [SCENARIO.LOST_TEMPLE]: true,
        [SCENARIO.TEMPLE_OF_THE_ECLIPSE]: true,
      },
    });
  });

  it('should complete', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.BARROW_LAIR }),
      finishScenario({ scenario: SCENARIO.LOST_TEMPLE }),
      finishScenario({ scenario: SCENARIO.TEMPLE_OF_THE_ECLIPSE }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_WAREHOUSE }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const finishScenario = ({ party = 1, scenario, characters = { 1: true }, level = 1, failed = false, rewards = {} }) =>
  mockGithub(
    ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({ party, scenario, characters, level, failed, rewards }),
  );

describe('PQ:SeekerOfXorn', () => {
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
      finishScenario({ scenario: SCENARIO.CRYPT_OF_THE_DAMNED }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 1 / 4,
      scenarios: { [SCENARIO.CRYPT_OF_THE_DAMNED]: true },
    });
  });

  it('should not count quests completed if the character was not involved', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.CRYPT_OF_THE_DAMNED, characters: { 1: {} } }),
      finishScenario({ scenario: SCENARIO.RUINOUS_CRYPT, characters: { 2: {} } }),
      finishScenario({ scenario: SCENARIO.DECAYING_CRYPT, characters: { 1: {}, 2: {} } }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 2 / 4,
      scenarios: {
        [SCENARIO.CRYPT_OF_THE_DAMNED]: true,
        [SCENARIO.DECAYING_CRYPT]: true,
      },
    });
  });

  it('should not count duplicates or count more than 3 crypts', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.BLACK_BARROW }),
      finishScenario({ scenario: SCENARIO.CRYPT_OF_THE_DAMNED }),
      finishScenario({ scenario: SCENARIO.CRYPT_OF_THE_DAMNED }),
      finishScenario({ scenario: SCENARIO.RUINOUS_CRYPT }),
      finishScenario({ scenario: SCENARIO.DECAYING_CRYPT }),
      finishScenario({ scenario: SCENARIO.FORGOTTEN_CRYPT }),
      finishScenario({ scenario: SCENARIO.CRYPT_BASEMENT }),
      finishScenario({ scenario: SCENARIO.CRYPT_BASEMENT }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 3 / 4,
      scenarios: {
        [SCENARIO.CRYPT_OF_THE_DAMNED]: true,
        [SCENARIO.RUINOUS_CRYPT]: true,
        [SCENARIO.DECAYING_CRYPT]: true,
        [SCENARIO.FORGOTTEN_CRYPT]: true,
        [SCENARIO.CRYPT_BASEMENT]: true,
      },
    });
  });

  it('should complete', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.CRYPT_OF_THE_DAMNED }),
      finishScenario({ scenario: SCENARIO.RUINOUS_CRYPT }),
      finishScenario({ scenario: SCENARIO.DECAYING_CRYPT }),
      finishScenario({ scenario: SCENARIO.FORGOTTEN_CRYPT }),
      finishScenario({ scenario: SCENARIO.CRYPT_BASEMENT }),
      finishScenario({ scenario: SCENARIO.NOXIOUS_CELLAR }),
    );
    expect(result.retirement).toEqual({ complete: true, progress: 1 });
  });
});

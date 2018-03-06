import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const finishScenario = ({ party = 1, scenario, characters = { 1: true }, level = 1, failed = false, rewards = {} }) =>
  mockGithub(
    ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({ party, scenario, characters, level, failed, rewards }),
  );

describe('PQ:TakeBackTheTrees', () => {
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
      finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 1 / 4,
      scenarios: { [SCENARIO.INOX_ENCAPMENT]: true },
    });
  });

  it('should not count quests completed if the character was not involved', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT, characters: { 1: {} } }),
      finishScenario({ scenario: SCENARIO.OUTER_RITUAL_CHAMBER, characters: { 2: {} } }),
      finishScenario({ scenario: SCENARIO.SANCTUARY_OF_GLOOM, characters: { 1: {}, 2: {} } }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 2 / 4,
      scenarios: {
        [SCENARIO.INOX_ENCAPMENT]: true,
        [SCENARIO.SANCTUARY_OF_GLOOM]: true,
      },
    });
  });

  it('should not count duplicates or count more than 3 target scenarios', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT }),
      finishScenario({ scenario: SCENARIO.OUTER_RITUAL_CHAMBER }),
      finishScenario({ scenario: SCENARIO.OUTER_RITUAL_CHAMBER }),
      finishScenario({ scenario: SCENARIO.SANCTUARY_OF_GLOOM }),
      finishScenario({ scenario: SCENARIO.SLAVE_PENS }),
    );
    expect(result.retirement).toEqual({
      complete: false,
      progress: 3 / 4,
      scenarios: {
        [SCENARIO.INOX_ENCAPMENT]: true,
        [SCENARIO.OUTER_RITUAL_CHAMBER]: true,
        [SCENARIO.SANCTUARY_OF_GLOOM]: true,
        [SCENARIO.SLAVE_PENS]: true,
      },
    });
  });

  it('should complete', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT }),
      finishScenario({ scenario: SCENARIO.OUTER_RITUAL_CHAMBER }),
      finishScenario({ scenario: SCENARIO.SANCTUARY_OF_GLOOM }),
      finishScenario({ scenario: SCENARIO.SLAVE_PENS }),
      finishScenario({ scenario: SCENARIO.FOGGY_THICKET }),
    );
    expect(result.retirement).toEqual({ complete: true, progress: 1 });
  });
});

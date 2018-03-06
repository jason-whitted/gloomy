import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const finishScenario = ({ party = 1, scenario, characters = { 1: true }, level = 1, failed = false, rewards = {} }) =>
  mockGithub(
    ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({ party, scenario, characters, level, failed, rewards }),
  );

describe('PQ:ElementalSamples', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toBe(config.initialState);
  });

  it('should progress', () => {
    const result = reduce(finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 6 });
  });

  it('should not count scenarios completed without the character', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_WAREHOUSE, characters: { 2: {} } }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 6 });
  });

  it('should not count duplicates', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT }),
      finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT }),
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_WAREHOUSE }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 2 / 6 });
  });

  it('should complete', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.GLOOMHAVEN_WAREHOUSE }),
      finishScenario({ scenario: SCENARIO.INOX_ENCAPMENT }),
      finishScenario({ scenario: SCENARIO.DECREPIT_WOOD }),
      finishScenario({ scenario: SCENARIO.MAGMA_PIT }),
      finishScenario({ scenario: SCENARIO.CLOCKWORK_COVE }),
      finishScenario({ scenario: SCENARIO.CHAINED_ISLE }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

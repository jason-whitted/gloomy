import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const finishScenario = ({ party = 1, scenario, characters = { 1: true }, level = 1, failed = false, rewards = {} }) =>
  mockGithub(
    ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({ party, scenario, characters, level, failed, rewards }),
  );

describe('PQ:EternalWanderer', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toMatchObject({ complete: false, progress: 0 });
  });

  it('should progress', () => {
    const result = reduce(finishScenario({ scenario: SCENARIO.NOXIOUS_CELLAR }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 15 });
  });

  it('should not count scenarios completed without the character', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.NOXIOUS_CELLAR }),
      finishScenario({ scenario: SCENARIO.CRYPT_BASEMENT, characters: { 2: {} } }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 15 });
  });

  it('should not count duplicates', () => {
    const result = reduce(
      finishScenario({ scenario: SCENARIO.NOXIOUS_CELLAR }),
      finishScenario({ scenario: SCENARIO.NOXIOUS_CELLAR }),
      finishScenario({ scenario: SCENARIO.CRYPT_BASEMENT }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 2 / 15 });
  });

  it('should complete', () => {
    const result = reduce(
      ...Array(16)
        .fill(0)
        .map((_, i) => finishScenario({ scenario: i + 1 })),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

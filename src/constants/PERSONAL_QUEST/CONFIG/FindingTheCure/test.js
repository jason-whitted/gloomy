import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const killEnemy = ({ character = 1, enemy, count = 1, elite }) =>
  mockGithub(ACTION_CONFIG[ACTION.CHARACTER_KILL_ENEMY].create({ character, enemy, count, elite }));
const finishScenario = ({ party = 1, scenario, characters = { 1: true }, level = 1, failed = false, rewards = {} }) =>
  mockGithub(
    ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({ party, scenario, characters, level, failed, rewards }),
  );

describe('PQ:FindingTheCure', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toMatchObject({ complete: false, progress: 0 });
  });

  it('should progress', () => {
    const result = reduce(killEnemy({ enemy: ENEMY.FOREST_IMP }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 9 });
  });

  it('should not count scenarios completed without the character', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.FOREST_IMP, count: 8 }),
      finishScenario({ scenario: SCENARIO.ALCHEMY_LAB, characters: { 2: {} } }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 8 / 9 });
  });

  it('should complete', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.FOREST_IMP, count: 8 }),
      finishScenario({ scenario: SCENARIO.ALCHEMY_LAB }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

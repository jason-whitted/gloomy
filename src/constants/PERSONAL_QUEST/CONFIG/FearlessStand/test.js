import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const killEnemy = ({ character = 1, enemy, count = 1, elite }) =>
  mockGithub(ACTION_CONFIG[ACTION.CHARACTER_KILL_ENEMY].create({ character, enemy, count, elite }));

describe('PQ:FearlessStand', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toBe(config.initialState);
  });

  it('should progress', () => {
    const result = reduce(killEnemy({ enemy: ENEMY.BANDIT_ARCHER, elite: true }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 20 });
  });

  it('should not count normal enemies', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.BANDIT_ARCHER, count: 3 }),
      killEnemy({ enemy: ENEMY.BANDIT_ARCHER, count: 8, elite: true }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 8 / 20 });
  });

  it('should complete', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.BANDIT_ARCHER, count: 6, elite: true }),
      killEnemy({ enemy: ENEMY.BANDIT_GUARD, count: 6, elite: true }),
      killEnemy({ enemy: ENEMY.BANDIT_COMMANDER, count: 6, elite: true }),
      killEnemy({ enemy: ENEMY.CULTIST, count: 6, elite: true }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

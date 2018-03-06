import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const killEnemy = ({ character = 1, enemy, count = 1, elite }) =>
  mockGithub(ACTION_CONFIG[ACTION.CHARACTER_KILL_ENEMY].create({ character, enemy, count, elite }));

describe('PQ:AberrantSlayer', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toBe(config.initialState);
  });

  it('should progress', () => {
    const result = reduce(killEnemy({ enemy: ENEMY.LURKER }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 9 });
  });

  it('should not count wrong type enemies', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.OOZE }),
      killEnemy({ enemy: ENEMY.LIVING_SPIRIT, count: 8, elite: true }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 9 });
  });

  it('should complete', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.OOZE, count: 3 }),
      killEnemy({ enemy: ENEMY.LURKER, count: 3 }),
      killEnemy({ enemy: ENEMY.RENDING_DRAKE, count: 1 }),
      killEnemy({ enemy: ENEMY.SPITTING_DRAKE, count: 1 }),
      killEnemy({ enemy: ENEMY.ELDER_DRAKE, count: 1 }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

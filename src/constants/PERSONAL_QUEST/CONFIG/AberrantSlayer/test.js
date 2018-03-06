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
    const result = reduce(killEnemy({ enemy: ENEMY.EARTH_DEMON }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 6 });
  });

  it('should not count duplicate or wrong type enemies', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.EARTH_DEMON, count: 5, elite: true }),
      killEnemy({ enemy: ENEMY.EARTH_DEMON, count: 3, elite: false }),
      killEnemy({ enemy: ENEMY.LIVING_SPIRIT, count: 8, elite: true }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 6 });
  });

  it('should complete', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.EARTH_DEMON }),
      killEnemy({ enemy: ENEMY.FLAME_DEMON }),
      killEnemy({ enemy: ENEMY.FROST_DEMON }),
      killEnemy({ enemy: ENEMY.NIGHT_DEMON }),
      killEnemy({ enemy: ENEMY.SUN_DEMON }),
      killEnemy({ enemy: ENEMY.WIND_DEMON }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

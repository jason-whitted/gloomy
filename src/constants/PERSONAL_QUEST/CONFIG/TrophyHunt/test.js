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
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 20 });
  });

  it('should not count duplicate enemies', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.EARTH_DEMON, count: 5, elite: true }),
      killEnemy({ enemy: ENEMY.EARTH_DEMON, count: 3, elite: false }),
      killEnemy({ enemy: ENEMY.LIVING_SPIRIT, count: 8, elite: true }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 2 / 20 });
  });

  it('should complete', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.ANCIENT_ARTILLERY }),
      killEnemy({ enemy: ENEMY.BANDIT_ARCHER }),
      killEnemy({ enemy: ENEMY.BANDIT_GUARD }),
      killEnemy({ enemy: ENEMY.BLACK_IMP }),
      killEnemy({ enemy: ENEMY.CAVE_BEAR }),
      killEnemy({ enemy: ENEMY.CITY_ARCHER }),
      killEnemy({ enemy: ENEMY.CITY_GUARD }),
      killEnemy({ enemy: ENEMY.CULTIST }),
      killEnemy({ enemy: ENEMY.DEEP_TERROR }),
      killEnemy({ enemy: ENEMY.EARTH_DEMON }),
      killEnemy({ enemy: ENEMY.FLAME_DEMON }),
      killEnemy({ enemy: ENEMY.FROST_DEMON }),
      killEnemy({ enemy: ENEMY.FOREST_IMP }),
      killEnemy({ enemy: ENEMY.GIANT_VIPER }),
      killEnemy({ enemy: ENEMY.HARROWER_INFESTER }),
      killEnemy({ enemy: ENEMY.HOUND }),
      killEnemy({ enemy: ENEMY.INOX_ARCHER }),
      killEnemy({ enemy: ENEMY.INOX_GUARD }),
      killEnemy({ enemy: ENEMY.INOX_SHAMAN }),
      killEnemy({ enemy: ENEMY.LIVING_BONES }),
      killEnemy({ enemy: ENEMY.LIVING_CORPSE }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

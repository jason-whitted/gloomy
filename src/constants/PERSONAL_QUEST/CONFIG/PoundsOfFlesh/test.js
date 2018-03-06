import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const killEnemy = ({ character = 1, enemy, count = 1, elite }) =>
  mockGithub(ACTION_CONFIG[ACTION.CHARACTER_KILL_ENEMY].create({ character, enemy, count, elite }));

describe('PQ:PoundsOfFlesh', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toBe(config.initialState);
  });

  it('should progress', () => {
    const result = reduce(killEnemy({ enemy: ENEMY.VERMLING_SCOUT }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 15 });
  });

  it('should not count wrong type enemies', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.VERMLING_SCOUT }),
      killEnemy({ enemy: ENEMY.LIVING_SPIRIT, count: 8, elite: true }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 15 });
  });

  it('should complete', () => {
    const result = reduce(
      killEnemy({ enemy: ENEMY.VERMLING_SCOUT, count: 8 }),
      killEnemy({ enemy: ENEMY.VERMLING_SHAMAN, count: 8 }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

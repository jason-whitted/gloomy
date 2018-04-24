import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';
import { ITEM } from '../../../ITEM';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const killEnemy = ({ character = 1, enemy, count = 1, elite }) =>
  mockGithub(ACTION_CONFIG[ACTION.CHARACTER_KILL_ENEMY].create({ character, enemy, count, elite }));
const finishScenario = ({ party = 1, scenario, characters = { 1: true }, level = 1, failed = false, rewards = {} }) =>
  mockGithub(
    ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({ party, scenario, characters, level, failed, rewards }),
  );

describe('PQ:ImplementOfLight', () => {
  const character = { id: 1, items: {}, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce(finishScenario({ scenario: SCENARIO.BLACK_BARROW }));
    expect(result.retirement).toBe(config.initialState);
  });

  it('should progress', () => {
    character.items[ITEM.SKULLBANE_AXE] = 1;
    const result = reduce(finishScenario({ scenario: SCENARIO.BLACK_BARROW }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 8 });
  });

  it('should only count enemies if you have the weapon', () => {
    character.items[ITEM.SKULLBANE_AXE] = 0;
    const result = reduce(
      finishScenario({ scenario: SCENARIO.NECROMANCERS_SANCTUM }),
      killEnemy({ enemy: ENEMY.LIVING_BONES, count: 3 }),
      killEnemy({ enemy: ENEMY.LIVING_CORPSE, count: 3 }),
      killEnemy({ enemy: ENEMY.LIVING_SPIRIT, count: 3 }),
    );
    expect(result.retirement).toMatchObject({ complete: false, progress: 0 });
  });

  it('should complete', () => {
    character.items[ITEM.SKULLBANE_AXE] = 1;
    const result = reduce(
      finishScenario({ scenario: SCENARIO.NECROMANCERS_SANCTUM }),
      killEnemy({ enemy: ENEMY.LIVING_BONES, count: 3 }),
      killEnemy({ enemy: ENEMY.LIVING_CORPSE, count: 3 }),
      killEnemy({ enemy: ENEMY.LIVING_SPIRIT, count: 3 }),
    );
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

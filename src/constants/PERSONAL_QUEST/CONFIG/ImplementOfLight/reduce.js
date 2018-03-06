import { ACTION } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';
import { ITEM } from '../../../ITEM';
import { SCENARIO } from '../../../SCENARIO';

const targetEnemies = [ENEMY.LIVING_BONES, ENEMY.LIVING_CORPSE, ENEMY.LIVING_SPIRIT];

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;
      if (action.payload.scenario !== SCENARIO.NECROMANCERS_SANCTUM) return character;

      return character.retirement.scenario
        ? character
        : {
            ...character,
            retirement: {
              ...character.retirement,
              complete: false,
              progress: 1 / 8, // scenario + 7 enemies
              scenario: true,
            },
          };
    }
    case ACTION.CHARACTER_KILL_ENEMY: {
      if (action.payload.character !== character.id) return character;
      if (!character.items[ITEM.SKULLBANE_AXE]) return character;
      if (!character.retirement.scenario) return character;

      const { enemy, count } = action.payload;
      if (!targetEnemies.includes(enemy)) return character;

      const enemies = {
        ...character.retirement.enemies,
        [enemy]: (character.retirement.enemies[enemy] || 0) + count,
      };
      const current = 1 + Math.min(targetEnemies.reduce((t, k) => t + (enemies[k] || 0), 0), 7);
      const progress = current / 8; // scenario + 7 enemies
      return {
        ...character,
        retirement: {
          ...character.retirement,
          complete: current === 8,
          progress,
          enemies,
        },
      };
    }
    default:
      return character;
  }
};

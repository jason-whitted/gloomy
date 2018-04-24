import { ACTION } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';
import { ITEM } from '../../../ITEM';
import { SCENARIO } from '../../../SCENARIO';
import manualQuestProgress from '../manualQuestProgress';

const targetEnemies = [ENEMY.LIVING_BONES, ENEMY.LIVING_CORPSE, ENEMY.LIVING_SPIRIT];

export default campaign => (character, action) => {
  if (character.imported) return manualQuestProgress(campaign)(character, action);

  switch (action.action) {
    case ACTION.CHARACTER_KILL_ENEMY: {
      if (action.payload.character !== character.id) return character;
      if (!character.items[ITEM.SKULLBANE_AXE]) return character;

      const { enemy, count } = action.payload;
      if (!targetEnemies.includes(enemy)) return character;

      const enemies = {
        ...character.retirement.enemies,
        [enemy]: (character.retirement.enemies[enemy] || 0) + count,
      };
      const current = 1 + Math.min(targetEnemies.reduce((t, k) => t + (enemies[k] || 0), 0), 7);
      const progress = current / 8; // item + 7 enemies
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
      // NOTE: Can't really look for necromancer's sanctum completion, because it could have been finished by another
      // party and already unlocked the skullbane axe.  Start tracking progress as soon as they receive the axe.
      if (!character.retirement.progress && character.items[ITEM.SKULLBANE_AXE]) {
        return {
          ...character,
          retirement: {
            ...character.retirement,
            complete: false,
            progress: 1 / 8, // item + 7 enemies
          },
        };
      }
      return character;
  }
};

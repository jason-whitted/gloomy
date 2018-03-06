import { ACTION } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';

const targetEnemies = [ENEMY.VERMLING_SCOUT, ENEMY.VERMLING_SHAMAN];

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_KILL_ENEMY: {
      if (action.payload.character !== character.id) return character;

      const { enemy, count } = action.payload;
      if (!targetEnemies.includes(enemy)) return character;

      const enemies = {
        ...character.retirement.enemies,
        [enemy]: character.retirement.enemies[enemy] + count,
      };
      const current = Math.min(targetEnemies.reduce((t, k) => t + (enemies[k] || 0), 0), 15);
      const progress = current / 15;
      return {
        ...character,
        retirement: {
          complete: current === 15,
          progress,
          enemies,
        },
      };
    }
    default:
      return character;
  }
};

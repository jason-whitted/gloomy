import { ACTION } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';

const targetEnemies = [ENEMY.BANDIT_ARCHER, ENEMY.BANDIT_GUARD, ENEMY.BANDIT_COMMANDER, ENEMY.CULTIST];

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
      const current = Math.min(targetEnemies.reduce((t, k) => t + (enemies[k] || 0), 0), 20);
      const progress = current / 20;
      return {
        ...character,
        retirement: {
          complete: current === 20,
          progress,
          enemies,
        },
      };
    }
    default:
      return character;
  }
};

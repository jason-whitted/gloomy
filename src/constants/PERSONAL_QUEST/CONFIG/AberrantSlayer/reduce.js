import { ACTION } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';

const targetEnemies = [
  ENEMY.EARTH_DEMON,
  ENEMY.FLAME_DEMON,
  ENEMY.FROST_DEMON,
  ENEMY.NIGHT_DEMON,
  ENEMY.SUN_DEMON,
  ENEMY.WIND_DEMON,
];

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_KILL_ENEMY: {
      if (action.payload.character !== character.id) return character;

      const { enemy } = action.payload;
      if (!targetEnemies.includes(enemy)) return character;

      const enemies = {
        ...character.retirement.enemies,
        [enemy]: true,
      };
      const current = Math.min(Object.keys(enemies).length, 6);
      const progress = current / 6;
      return {
        ...character,
        retirement: {
          complete: current === 6,
          progress,
          enemies,
        },
      };
    }
    default:
      return character;
  }
};

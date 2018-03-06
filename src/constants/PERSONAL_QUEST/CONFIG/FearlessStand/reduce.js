import { ACTION } from '../../../ACTION';

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_KILL_ENEMY: {
      if (action.payload.character !== character.id || !action.payload.elite) return character;

      const { enemy, count } = action.payload;
      const enemies = {
        ...character.retirement.enemies,
        [enemy]: (character.retirement.enemies[enemy] || 0) + count,
      };
      const current = Math.min(Object.values(enemies).reduce((t, k) => t + k, 0), 20);
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

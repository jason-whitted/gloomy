import { ACTION } from '../../../ACTION';

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_KILL_ENEMY: {
      if (action.payload.character !== character.id) return character;

      const enemies = {
        ...character.retirement.enemies,
        [action.payload.enemy]: 1,
      };
      const current = Math.min(Object.values(enemies).reduce((t, n) => t + n, 0), 20);
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

import { ACTION } from '../../../ACTION';

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_EXHAUSTION: {
      if (action.payload.character !== character.id) return character;
      if (!action.payload.self) return character;

      const exhaustions = Math.min(character.retirement.exhaustions + action.payload.count, 12);
      const progress = exhaustions / 12;
      return {
        ...character,
        retirement: {
          complete: exhaustions === 12,
          progress,
          exhaustions,
        },
      };
    }
    default:
      return character;
  }
};

import { ACTION } from '../../../ACTION';

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_ADD_AUGMENT: {
      if (action.payload.character !== character.id) return character;

      const augments = Math.min(character.retirement.augments + 1, 4);
      const progress = augments / 4;
      return {
        ...character,
        retirement: {
          complete: augments === 4,
          progress,
          augments,
        },
      };
    }
    default:
      return character;
  }
};

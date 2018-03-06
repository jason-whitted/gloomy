import { ACTION } from '../../../ACTION';

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_SANCTUARY_DONATION: {
      if (action.payload.character !== character.id) return character;

      const donations = Math.min(character.retirement.donations + 1, 12);
      const progress = donations / 12;
      return {
        ...character,
        retirement: {
          complete: donations === 12,
          progress,
          donations,
        },
      };
    }
    default:
      return character;
  }
};

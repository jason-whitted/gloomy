import { ACTION } from '../../ACTION';

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_MANUAL_QUEST_PROGRESS: {
      if (action.payload.character !== character.id) return character;

      const { value, max } = action.payload;
      const current = Math.min(value, max);
      const progress = current / max;
      return {
        ...character,
        retirement: {
          complete: current === max,
          progress,
          value,
          max,
        },
      };
    }
    default:
      return character;
  }
};

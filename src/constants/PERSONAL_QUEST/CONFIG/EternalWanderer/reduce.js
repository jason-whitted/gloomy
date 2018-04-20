import { ACTION } from '../../../ACTION';
import manualQuestProgress from '../manualQuestProgress';

export default campaign => (character, action) => {
  if (character.imported) return manualQuestProgress(campaign)(character, action);

  switch (action.action) {
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;

      const scenarios = {
        ...character.retirement.scenarios,
        [action.payload.scenario]: true,
      };

      const current = Math.min(Object.keys(scenarios).length, 15);
      const progress = current / 15;
      return {
        ...character,
        retirement: {
          complete: current === 15,
          progress,
          scenarios,
        },
      };
    }
    default:
      return character;
  }
};

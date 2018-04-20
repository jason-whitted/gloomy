import { ACTION } from '../../../ACTION';
import { SCENARIO_CONFIG } from '../../../SCENARIO';
import manualQuestProgress from '../manualQuestProgress';

export default campaign => (character, action) => {
  if (character.imported) return manualQuestProgress(campaign)(character, action);

  switch (action.action) {
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;

      const { scenario } = action.payload;
      if (scenario <= 51) return character;
      if (SCENARIO_CONFIG[scenario].solo) return character;

      const scenarios = {
        ...character.retirement.scenarios,
        [scenario]: true,
      };
      const current = Math.min(Object.keys(scenarios).length, 6);
      const progress = current / 6;
      return {
        ...character,
        retirement: {
          complete: current === 6,
          progress,
          scenarios,
        },
      };
    }
    default:
      return character;
  }
};

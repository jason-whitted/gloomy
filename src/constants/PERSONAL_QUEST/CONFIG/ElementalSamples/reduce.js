import { ACTION } from '../../../ACTION';
import { SCENARIO_CONFIG } from '../../../SCENARIO';
import { REGION } from '../../../REGION';

import manualQuestProgress from '../manualQuestProgress';

export default campaign => (character, action) => {
  if (character.imported) return manualQuestProgress(campaign)(character, action);

  switch (action.action) {
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;

      const scenario = SCENARIO_CONFIG[action.payload.scenario];
      const scenarios = {
        ...character.retirement.scenarios,
        [scenario.region]: 1,
      };

      const current =
        scenarios[REGION.GLOOMHAVEN] +
        scenarios[REGION.DAGGER_FOREST] +
        scenarios[REGION.LINGERING_SWAMP] +
        scenarios[REGION.WATCHER_MOUNTAINS] +
        scenarios[REGION.COPPERNECK_MOUNTAINS] +
        scenarios[REGION.MISTY_SEA];
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

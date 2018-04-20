import { ACTION } from '../../../ACTION';
import { REGION } from '../../../REGION';
import { SCENARIO, SCENARIO_CONFIG } from '../../../SCENARIO';
import manualQuestProgress from '../manualQuestProgress';

const targetScenarios = Object.values(SCENARIO_CONFIG)
  .filter(s => s.region === REGION.LINGERING_SWAMP && s.id !== SCENARIO.FADING_LIGHTHOUSE)
  .map(s => s.id);

export default campaign => (character, action) => {
  if (character.imported) return manualQuestProgress(campaign)(character, action);

  switch (action.action) {
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;

      const { scenario } = action.payload;

      if (targetScenarios.includes(scenario)) {
        const scenarios = {
          ...character.retirement.scenarios,
          [scenario]: true,
        };
        // 2 scenarios plus final quest
        const progress = Math.min(Object.keys(scenarios).length, 2) / 3;
        return {
          ...character,
          retirement: {
            ...character.retirement,
            scenarios,
            progress,
          },
        };
      }

      if (scenario === SCENARIO.FADING_LIGHTHOUSE && character.retirement.progress === 2 / 3) {
        return {
          ...character,
          retirement: {
            complete: true,
            progress: 1,
          },
        };
      }

      return character;
    }
    default:
      return character;
  }
};

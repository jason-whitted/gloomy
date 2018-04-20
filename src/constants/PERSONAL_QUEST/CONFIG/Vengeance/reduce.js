import { ACTION } from '../../../ACTION';
import { REGION } from '../../../REGION';
import { SCENARIO, SCENARIO_CONFIG } from '../../../SCENARIO';
import manualQuestProgress from '../manualQuestProgress';

const targetScenarios = Object.values(SCENARIO_CONFIG)
  .filter(s => s.region === REGION.GLOOMHAVEN && s.id !== SCENARIO.INVESTIGATION)
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
        // 4 scenarios plus final quest
        const progress = Math.min(Object.keys(scenarios).length, 4) / 5;
        return {
          ...character,
          retirement: {
            ...character.retirement,
            scenarios,
            progress,
          },
        };
      }

      if (scenario === SCENARIO.INVESTIGATION && character.retirement.progress === 4 / 5) {
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

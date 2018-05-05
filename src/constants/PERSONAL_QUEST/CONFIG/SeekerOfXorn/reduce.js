import { ACTION } from '../../../ACTION';
import { SCENARIO, SCENARIO_CONFIG } from '../../../SCENARIO';
import manualQuestProgress from '../manualQuestProgress';

const cryptScenarios = Object.values(SCENARIO_CONFIG)
  .filter(s => s.crypt)
  .map(s => s.id);

export default campaign => (character, action) => {
  if (character.imported) return manualQuestProgress(campaign)(character, action);

  switch (action.action) {
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;

      const { scenario } = action.payload;

      if (cryptScenarios.includes(scenario)) {
        const scenarios = {
          ...character.retirement.scenarios,
          [scenario]: true,
        };
        // 3 scenarios plus final quest
        const progress = Math.min(Object.keys(scenarios).length, 3) / 4;
        return {
          ...character,
          retirement: {
            ...character.retirement,
            scenarios,
            progress,
          },
        };
      }

      if (scenario === SCENARIO.NOXIOUS_CELLAR && character.retirement.progress === 3 / 4) {
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

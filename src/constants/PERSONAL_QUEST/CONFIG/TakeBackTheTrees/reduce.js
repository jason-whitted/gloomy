import { ACTION } from '../../../ACTION';
import { REGION } from '../../../REGION';
import { SCENARIO, SCENARIO_CONFIG } from '../../../SCENARIO';

const targetScenarios = Object.values(SCENARIO_CONFIG)
  .filter(s => s.region === REGION.DAGGER_FOREST && s.id !== SCENARIO.FOGGY_THICKET)
  .map(s => s.id);

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;

      const { scenario } = action.payload;

      if (targetScenarios.includes(scenario)) {
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

      if (scenario === SCENARIO.FOGGY_THICKET && character.retirement.progress === 3 / 4) {
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

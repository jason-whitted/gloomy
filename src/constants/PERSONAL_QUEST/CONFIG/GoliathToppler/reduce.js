import { ACTION } from '../../../ACTION';
import { SCENARIO_CONFIG } from '../../../SCENARIO';

const targetScenarios = Object.values(SCENARIO_CONFIG)
  .filter(s => s.boss)
  .map(s => s.id);

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;

      const { scenario } = action.payload;
      if (!targetScenarios.includes(scenario)) return character;

      const scenarios = {
        ...character.retirement.scenarios,
        [scenario]: true,
      };
      const current = Math.min(Object.keys(scenarios).length, 4);
      const progress = current / 4;
      return {
        ...character,
        retirement: {
          complete: current === 4,
          progress,
          scenarios,
        },
      };
    }
    default:
      return character;
  }
};

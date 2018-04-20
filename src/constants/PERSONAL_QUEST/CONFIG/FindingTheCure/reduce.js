import { ACTION } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';
import { SCENARIO } from '../../../SCENARIO';
import manualQuestProgress from '../manualQuestProgress';

export default campaign => (character, action) => {
  if (character.imported) return manualQuestProgress(campaign)(character, action);

  switch (action.action) {
    case ACTION.CHARACTER_KILL_ENEMY: {
      if (action.payload.character !== character.id) return character;

      const { enemy } = action.payload;
      if (enemy !== ENEMY.FOREST_IMP) return character;

      const enemies = Math.min(character.retirement.enemies + action.payload.count, 8);
      if (enemies !== character.retirement.enemies) {
        const progress = enemies / 9; // 8 imps + finish scenario
        return {
          ...character,
          retirement: {
            complete: false,
            progress,
            enemies,
          },
        };
      }

      return character;
    }
    case ACTION.PARTY_FINISH_SCENARIO: {
      if (!action.payload.characters[character.id] || action.payload.failed) return character;

      if (action.payload.scenario === SCENARIO.FORGOTTEN_GROVE && character.retirement.enemies === 8) {
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

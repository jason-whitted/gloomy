import { ACTION } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';

export default campaign => (character, action) => {
  switch (action.action) {
    case ACTION.CHARACTER_KILL_ENEMY: {
      if (action.payload.character !== character.id) return character;

      const { enemy, count } = action.payload;

      let { oozes, lurkers, drakes } = character.retirement;
      if (enemy === ENEMY.OOZE) {
        oozes = Math.min(oozes + count, 3);
      } else if (enemy === ENEMY.LURKER) {
        lurkers = Math.min(lurkers + count, 3);
      } else if ([ENEMY.RENDING_DRAKE, ENEMY.SPITTING_DRAKE, ENEMY.ELDER_DRAKE].includes(enemy)) {
        drakes = Math.min(drakes + count, 3);
      } else return character;

      const current = oozes + lurkers + drakes;
      const progress = current / 9;
      return {
        ...character,
        retirement: {
          complete: current === 9,
          progress,
          oozes,
          lurkers,
          drakes,
        },
      };
    }
    default:
      return character;
  }
};

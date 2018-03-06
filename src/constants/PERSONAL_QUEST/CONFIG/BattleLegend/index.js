import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.BATTLE_LEGEND,
  name: 'Battle Legend',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.SOOTHSINGER },
  initialState,
  reduce,
};

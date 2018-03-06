import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.A_HELPING_HAND,
  name: 'A Helping Hand',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.SOOTHSINGER },
  initialState,
  reduce,
};

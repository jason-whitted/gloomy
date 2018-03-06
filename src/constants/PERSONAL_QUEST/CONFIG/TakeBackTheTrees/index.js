import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.TAKE_BACK_THE_TREES,
  name: 'Take Back the Trees',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.DOOMSTALKER },
  initialState,
  reduce,
};

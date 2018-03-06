import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.GREED_IS_GOOD,
  name: 'Greed is Good',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.QUARTERMASTER },
  initialState,
  reduce,
};

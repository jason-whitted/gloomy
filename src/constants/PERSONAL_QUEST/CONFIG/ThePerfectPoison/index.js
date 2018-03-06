import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.THE_PERFECT_POISON,
  name: 'The Perfect Poison',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.PLAGUEHERALD },
  initialState,
  reduce,
};

import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.FEARLESS_STAND,
  name: 'Fearless Stand',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.BEAST_TYRANT },
  initialState,
  reduce,
};

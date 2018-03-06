import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.THE_THIN_PLACES,
  name: 'The Thin Places',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.NIGHTSHROUD },
  initialState,
  reduce,
};

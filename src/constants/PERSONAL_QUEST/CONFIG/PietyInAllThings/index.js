import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.PIETY_IN_ALL_THINGS,
  name: 'Piety In All Things',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.SAWBONE },
  initialState,
  reduce,
};

import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.ELEMENTAL_SAMPLES,
  name: 'Elemental Samples',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.ELEMENTALIST },
  initialState,
  reduce,
};

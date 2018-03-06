import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.ZEALOT_OF_THE_BLOOD_GOD,
  name: 'Zealot of the Blood God',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.BERSERKER },
  initialState,
  reduce,
};

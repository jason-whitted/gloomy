import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.SEEKER_OF_XORN,
  name: 'Seeker of Xorn',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.PLAGUEHERALD },
  initialState,
  reduce,
};

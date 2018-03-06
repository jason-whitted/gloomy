import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.A_STUDY_OF_ANATOMY,
  name: 'A Study of Anatomy',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.SAWBONE },
  initialState,
  reduce,
};

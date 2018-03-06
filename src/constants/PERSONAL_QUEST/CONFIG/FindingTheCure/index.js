import { ENVELOPE } from '../../../ENVELOPE';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.FINDING_THE_CURE,
  name: 'Finding the Cure',
  reward: { type: REWARD_TYPE.ENVELOPE, envelope: ENVELOPE.X },
  initialState,
  reduce,
};

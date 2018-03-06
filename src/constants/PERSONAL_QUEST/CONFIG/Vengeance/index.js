import { ENVELOPE } from '../../../ENVELOPE';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.VENGEANCE,
  name: 'Vengeance',
  reward: { type: REWARD_TYPE.ENVELOPE, envelope: ENVELOPE.X },
  initialState,
  reduce,
};

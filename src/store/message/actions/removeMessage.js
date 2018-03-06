import * as CONST from '../constants';

export default ({ id }) => ({
  type: CONST.MESSAGE_REMOVE,
  payload: id,
});

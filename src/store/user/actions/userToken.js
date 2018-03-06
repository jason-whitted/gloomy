import * as CONST from '../constants';

export default token => ({
  type: CONST.USER_TOKEN,
  payload: token,
});

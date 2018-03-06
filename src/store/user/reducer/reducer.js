import * as CONST from '../constants';

import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.USER_EXPIRE:
      return {
        ...state,
        expires: 0,
      };
    case CONST.USER_GET:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case CONST.USER_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONST.USER_GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
        expires: Date.now() + 24 * 60 * 60 * 1000, // 24-hours
      };
    case CONST.USER_RESET:
      return initialState;
    case CONST.USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

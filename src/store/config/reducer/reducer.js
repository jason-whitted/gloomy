import * as CONST from '../constants';

import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.CONFIG_ADD:
    case CONST.CONFIG_CREATE:
    case CONST.CONFIG_GET:
    case CONST.CONFIG_REMOVE:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case CONST.CONFIG_ADD_FAILURE:
    case CONST.CONFIG_CREATE_FAILURE:
    case CONST.CONFIG_GET_FAILURE:
    case CONST.CONFIG_REMOVE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONST.CONFIG_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CONST.CONFIG_CREATE_SUCCESS:
    case CONST.CONFIG_GET_SUCCESS:
      const { id, config } = action.payload;
      return {
        ...state,
        id: id || state.id,
        data: config,
        loading: false,
        error: '',
        expires: Date.now() + 20 * 60 * 1000, // 20-minutes
      };
    case CONST.CONFIG_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CONST.CONFIG_EXPIRE:
      return { ...state, expires: 0 };
    case CONST.CONFIG_RESET:
      return initialState;
    default:
      return state;
  }
};

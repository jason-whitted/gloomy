import * as CONST from '../constants';

import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.CAMPAIGN_APPEND_ACTION:
    case CONST.CAMPAIGN_CREATE:
    case CONST.CAMPAIGN_DELETE:
    case CONST.CAMPAIGN_GET:
    case CONST.CAMPAIGN_RENAME:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case CONST.CAMPAIGN_APPEND_ACTION_FAILURE:
    case CONST.CAMPAIGN_CREATE_FAILURE:
    case CONST.CAMPAIGN_DELETE_FAILURE:
    case CONST.CAMPAIGN_GET_FAILURE:
    case CONST.CAMPAIGN_RENAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONST.CAMPAIGN_GET_SUCCESS:
      const { id, campaign } = action.payload;
      return {
        ...state,
        id: id || state.id,
        data: campaign,
        loading: false,
        error: '',
        expires: Date.now() + 20 * 60 * 1000, // 20-minutes
      };
    case CONST.CAMPAIGN_CREATE_SUCCESS:
    case CONST.CAMPAIGN_APPEND_ACTION_SUCCESS:
    case CONST.CAMPAIGN_DELETE_SUCCESS:
    case CONST.CAMPAIGN_RENAME_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CONST.CAMPAIGN_EXPIRE:
      return { ...state, expires: 0 };
    case CONST.CAMPAIGN_RESET:
      return initialState;
    default:
      return state;
  }
};

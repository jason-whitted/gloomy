import * as CONST from '../constants';

import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.MESSAGE_ADD:
      return [...state, action.payload];
    case CONST.MESSAGE_REMOVE:
      return state.filter(m => m.id !== action.payload);
    case CONST.MESSAGE_RESET:
      return initialState;
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import { campaignReducer as campaign } from './campaign';
import { configReducer as config } from './config';
import { messageReducer as message } from './message';
import { userReducer as user } from './user';

export default combineReducers({
  campaign,
  config,
  form,
  message,
  routing,
  user,
});

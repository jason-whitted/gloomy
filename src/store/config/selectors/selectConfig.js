import { createSelector } from 'reselect';

import selectRawConfig from './selectRawConfig';

export default createSelector(selectRawConfig, config => config.data);

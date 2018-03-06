import { createSelector } from 'reselect';

import selectRawUser from './selectRawUser';

export default createSelector(selectRawUser, user => user.loading);

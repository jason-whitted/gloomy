import * as CONST from '../constants';

import { createTaskWithCache, githubApi } from '../../../common';

const createTask = createTaskWithCache({ errorTitle: 'Unable to get user!' });

export default ({ force = false } = {}) => (dispatch, getState) => {
  const { data, expires, loading, token } = getState().user;
  const task = createTask({
    loading,
    skip: !force && data && expires > Date.now(),
  });

  return task(async () => {
    if (!token) {
      throw new Error('User does not have an access token');
    }

    await dispatch({ type: CONST.USER_GET });

    const response = await githubApi({ url: '/user', method: 'GET' });
    const { avatar_url, id, login, name } = response;

    await dispatch({
      type: CONST.USER_GET_SUCCESS,
      payload: { avatar_url, id, login, name },
    });
  }).catch(error => dispatch({ type: CONST.USER_GET_FAILURE, payload: error.message }));
};

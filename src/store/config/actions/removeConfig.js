import * as CONST from '../constants';
import { GIST_CONFIG } from '../../../constants';
import { createTaskWithCache, githubApi } from '../../../common';
import { selectRawConfig } from '../selectors';
import getConfig from './getConfig';

const createTask = createTaskWithCache({ errorTitle: 'Unable to unlink campaign!' });

export default ({ id }) => (dispatch, getState) => {
  const { id: configID, data } = selectRawConfig(getState());
  const task = createTask({
    skip: !data.campaigns.some(c => c.id === id),
  });

  return task(async () => {
    await dispatch({ type: CONST.CONFIG_REMOVE });

    const newData = {
      ...data,
      campaigns: data.campaigns.filter(c => c.id !== id),
    };

    await githubApi({
      url: `/gists/${configID}`,
      method: 'PATCH',
      data: {
        files: {
          [GIST_CONFIG.FILENAME]: {
            content: JSON.stringify(newData, null, 2),
          },
        },
      },
    });

    await dispatch({ type: CONST.CONFIG_REMOVE_SUCCESS });
    await dispatch(getConfig({ force: true }));
  }).catch(error => dispatch({ type: CONST.CONFIG_REMOVE_FAILURE, payload: error.message }));
};

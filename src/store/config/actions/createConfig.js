import * as CONST from '../constants';
import { GIST_CONFIG } from '../../../constants';
import { githubApi, createTask } from '../../../common';

const defaultConfig = { campaigns: [] };

const task = createTask({ errorTitle: 'Failed to create configuration!' });

export default () => (dispatch, getState) =>
  task(async () => {
    await dispatch({ type: CONST.CONFIG_CREATE });

    const { id } = await githubApi({
      url: '/gists',
      method: 'POST',
      data: {
        description: GIST_CONFIG.DESCRIPTION,
        public: false,
        files: {
          'ABOUT.md': {
            content: GIST_CONFIG.ABOUT,
          },
          [GIST_CONFIG.FILENAME]: {
            content: JSON.stringify(defaultConfig, null, 2),
          },
        },
      },
    });

    await dispatch({
      type: CONST.CONFIG_CREATE_SUCCESS,
      payload: {
        id,
        config: defaultConfig,
      },
    });
  }).catch(error => dispatch({ type: CONST.CONFIG_CREATE_FAILURE, payload: error.message }));

import * as CONST from '../constants';

import { GIST_CAMPAIGN, GIST_CONFIG } from '../../../constants';
import { createTaskWithCache, githubApi } from '../../../common';
import createConfig from './createConfig';

const createTask = createTaskWithCache({ errorTitle: 'Unable to get configuration.' });

export default ({ force = false } = {}) => (dispatch, getState) => {
  const { loading, data, expires } = getState().config;
  const task = createTask({
    loading,
    skip: !force && data && expires > Date.now(),
  });

  return task(async () => {
    await dispatch({ type: CONST.CONFIG_GET });

    const gists = await githubApi({ url: '/users/{login}/gists', method: 'GET' });
    const gist = gists.find(g => g.description === GIST_CONFIG.DESCRIPTION);
    if (!gist) {
      return await dispatch(createConfig());
    }

    const { id, files } = gist;
    const file = files[GIST_CONFIG.FILENAME];
    if (!file) throw new Error(`${GIST_CONFIG.FILENAME} not found in ${GIST_CONFIG.DESCRIPTION}`);
    const configUrl = file.raw_url;

    const config = await fetch(configUrl).then(r => r.json());

    // NOTE: Read in the config and default the name / owner properties
    const campaigns = config.campaigns.reduce((o, c) => {
      o[c.id] = {
        ...c,
        name: c.name || c.id,
        owner: false,
      };
      return o;
    }, {});

    // NOTE: Update/Add any owned campaigns
    gists.forEach(g => {
      if (g.files[GIST_CAMPAIGN.FILENAME]) {
        campaigns[g.id] = {
          ...campaigns[g.id],
          id: g.id,
          name: g.description,
          owner: true,
        };
      }
    });

    await dispatch({
      type: CONST.CONFIG_GET_SUCCESS,
      payload: {
        id,
        config: {
          ...config,
          campaigns: Object.values(campaigns),
        },
      },
    });
  }).catch(error => dispatch({ type: CONST.CONFIG_GET_FAILURE, payload: error.message }));
};

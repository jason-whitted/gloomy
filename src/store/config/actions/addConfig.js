import * as CONST from '../constants';
import { GIST_CAMPAIGN, GIST_CONFIG } from '../../../constants';
import { createTask, githubApi } from '../../../common';
import { selectRawConfig } from '../selectors';
import { selectUser } from '../../user/selectors';
import getConfig from './getConfig';

const task = createTask({ errorTitle: 'Failed to link campaign!' });

export default ({ id }) => (dispatch, getState) =>
  task(async () => {
    const { id: configID, data } = selectRawConfig(getState());

    await dispatch({ type: CONST.CONFIG_ADD });

    const gist = await githubApi({ url: `/gists/${id}`, method: 'GET' });
    if (!gist.files[GIST_CAMPAIGN.FILENAME]) throw new Error('Invalid Campaign ID');

    const campaign = {
      id,
      name: gist.description,
      owner: (selectUser(getState()) || {}).id === gist.owner.id,
    };

    const newData = {
      ...data,
      campaigns: data.campaigns.some(c => c.id === id)
        ? data.campaigns.map(c => (c.id === id ? campaign : c))
        : [...data.campaigns, campaign],
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

    await dispatch({ type: CONST.CONFIG_ADD_SUCCESS });
    await dispatch(getConfig({ force: true }));
  }).catch(error => dispatch({ type: CONST.CONFIG_ADD_FAILURE, payload: error.message }));

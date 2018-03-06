import * as CONST from '../constants';
import { GIST_CAMPAIGN } from '../../../constants';
import { createTask, githubApi } from '../../../common';
import { getCampaign } from '../actions';
import getConfig from '../../config/actions/getConfig';

const task = createTask({ errorTitle: 'Unable to create campaign!' });

export default ({ name }) => (dispatch, getState) =>
  task(async () => {
    const campaign = { history: [] };

    await dispatch({ type: CONST.CAMPAIGN_CREATE });

    const { id } = await githubApi({
      url: '/gists',
      method: 'POST',
      data: {
        description: name,
        public: false,
        files: {
          'ABOUT.md': {
            content: GIST_CAMPAIGN.ABOUT,
          },
          [GIST_CAMPAIGN.FILENAME]: {
            content: JSON.stringify(campaign),
          },
        },
      },
    });

    await dispatch({ type: CONST.CAMPAIGN_CREATE_SUCCESS });
    await dispatch(getConfig({ force: true }));
    await dispatch(getCampaign({ id }));
  }).catch(error => dispatch({ type: CONST.CAMPAIGN_CREATE_FAILURE, payload: error.message }));

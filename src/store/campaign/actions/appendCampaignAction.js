import * as CONST from '../constants';
import { createTask, githubApi } from '../../../common';
import { selectCampaign } from '../selectors';
import { getCampaign } from './getCampaign';

const task = createTask({ errorTitle: 'Unable to update campaign!' });

export default ({ id: campaignID, action }) => (dispatch, getState) =>
  task(async () => {
    const id = campaignID || selectCampaign(getState()).id;

    await dispatch({ type: CONST.CAMPAIGN_APPEND_ACTION });

    await githubApi({
      url: `/gists/${id}/comments`,
      method: 'POST',
      data: {
        body: JSON.stringify(action),
      },
    });

    await dispatch({ type: CONST.CAMPAIGN_APPEND_ACTION_SUCCESS });
    await dispatch(getCampaign({ id, force: true }));

    const { campaign: { data: campaign } } = getState();
    return {
      campaign,
      action: campaign.history[campaign.history.length - 1],
    };
  }).catch(error => dispatch({ type: CONST.CAMPAIGN_APPEND_ACTION_FAILURE, payload: error.message }));

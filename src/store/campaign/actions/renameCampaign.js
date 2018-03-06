import * as CONST from '../constants';
import { createTask, githubApi } from '../../../common';
import { getCampaign } from '../actions/getCampaign';
import getConfig from '../../config/actions/getConfig';

const task = createTask({ errorTitle: 'Unable to rename campaign!' });

export default ({ id, name }) => (dispatch, getState) =>
  task(async () => {
    await dispatch({ type: CONST.CAMPAIGN_RENAME });

    await githubApi({
      url: `/gists/${id}`,
      method: 'PATCH',
      data: { description: name },
    });

    await dispatch({ type: CONST.CAMPAIGN_RENAME_SUCCESS });
    await dispatch(getConfig({ force: true }));
    await dispatch(getCampaign({ force: true }));
  }).catch(error => dispatch({ type: CONST.CAMPAIGN_RENAME_FAILURE, payload: error.message }));

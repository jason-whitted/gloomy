import * as CONST from '../constants';
import { createTask, githubApi } from '../../../common';
import removeConfig from '../../config/actions/removeConfig';

const task = createTask({ errorTitle: 'Unable to delete campaign!' });

export default ({ id }) => (dispatch, getState) =>
  task(async () => {
    await dispatch({ type: CONST.CAMPAIGN_DELETE });

    await githubApi({ url: `/gists/${id}`, method: 'DELETE' });

    await dispatch({ type: CONST.CAMPAIGN_DELETE_SUCCESS });
    await dispatch(removeConfig({ id }));
  }).catch(error => dispatch({ type: CONST.CAMPAIGN_DELETE_FAILURE, payload: error.message }));

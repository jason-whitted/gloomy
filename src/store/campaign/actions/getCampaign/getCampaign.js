import * as CONST from '../../constants';
import { ACTION, ACTION_CONFIG, GIST_CAMPAIGN } from '../../../../constants';
import { createTaskWithCache, githubApi } from '../../../../common';
import { addConfig, removeConfig, selectConfig } from '../../../config';
import { selectUser } from '../../../user';

const createTask = createTaskWithCache({ errorTitle: 'Unable to get campaign!' });

export default ({ id, force = false }) => (dispatch, getState) => {
  const { id: campaignID, data, expires, loading } = getState().campaign;
  const task = createTask({
    loading,
    skip: id === campaignID && !force && data && expires > Date.now(),
  });

  return task(async () => {
    id = id || campaignID;
    await dispatch({ type: CONST.CAMPAIGN_GET });

    const gist = await githubApi({ url: `/gists/${id}`, method: 'GET' }).catch(error => {
      if (error.message === '404 - Not Found') return error;
      throw error;
    });

    if (gist instanceof Error) {
      await dispatch(removeConfig({ id }));
      throw new Error('Campaign not found.  The link has been removed.');
    }

    const file = gist.files[GIST_CAMPAIGN.FILENAME];
    if (!file) throw new Error('Invalid Campaign ID');

    // Campaign name changed?
    const { name } = selectConfig(getState()).campaigns.find(c => c.id === id) || {};
    if (name !== gist.description) {
      // Update the campaign in the config if the name has changed
      await dispatch(addConfig({ id }));
    }

    let { history } = JSON.parse(file.content);
    const user = selectUser(getState());
    const owner = user.id === gist.owner.id;

    // Comments?
    if (gist.comments) {
      const comments = await githubApi({ url: `/gists/${id}/comments`, method: 'GET' });

      // Create a dictionary of history so we don't add duplicates
      const addEntry = (dict, { id, by }) => {
        dict[id] = by;
        return dict;
      };
      const dictionary = history.reduce(addEntry, {});

      // Merge the comments into history
      const mergeComment = (history, comment) => {
        const entry = {
          ...JSON.parse(comment.body),
          dt: comment.created_at,
          id: comment.id,
          by: comment.user.login,
        };
        if (!dictionary[comment.id]) {
          if (owner && comment.user.id === user.id) {
            addEntry(dictionary, entry);
          }
          history.push(entry);
        }
        return history;
      };
      const sortByDate = (a, b) => a.dt.localeCompare(b.dt);
      history = comments.reduce(mergeComment, history).sort(sortByDate);

      // Owner?
      if (owner) {
        await githubApi({
          url: `/gists/${id}`,
          method: 'PATCH',
          data: {
            files: {
              [GIST_CAMPAIGN.FILENAME]: {
                content: JSON.stringify({ history }).replace(/\{"action"/g, '\n  {"action"'),
              },
            },
          },
        });
      }

      for (let c of comments) {
        if (dictionary[c.id] && c.user.id === user.id) {
          // Delete all of their comments that have already been merged to history.
          await githubApi({
            url: `/gists/${id}/comments/${c.id}`,
            method: 'DELETE',
          });
        }
      }
    }

    let action = ACTION_CONFIG[ACTION.CAMPAIGN_CREATE].create({ gist, history });
    let campaign = ACTION_CONFIG.reduce({}, action);

    // Mark deleted history
    for (let i = history.length - 1; i >= 0; i--) {
      const entry = history[i];
      if (entry.action === ACTION.DELETE_ACTION && !entry.deleted) {
        campaign = ACTION_CONFIG.reduce(campaign, entry);
      }
    }

    campaign = history.reduce(ACTION_CONFIG.reduce, campaign);

    await dispatch({
      type: CONST.CAMPAIGN_GET_SUCCESS,
      payload: { id, campaign },
    });
  }).catch(error => dispatch({ type: CONST.CAMPAIGN_GET_FAILURE, payload: error.message }));
};

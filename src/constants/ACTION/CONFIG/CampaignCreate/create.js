import ID from '../../ID';

export default ({ gist, history }) => ({
  action: ID.CAMPAIGN_CREATE,
  payload: { gist, history },
});

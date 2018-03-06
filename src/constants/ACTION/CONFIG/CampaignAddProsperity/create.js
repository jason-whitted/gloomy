import ID from '../../ID';

export default ({ count }) => ({
  action: ID.CAMPAIGN_ADD_PROSPERITY,
  payload: {
    count: parseInt(count, 10) || 0,
  },
});

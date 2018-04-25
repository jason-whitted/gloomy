import ID from '../../ID';

export default ({ permissions }) => ({
  action: ID.CAMPAIGN_PERMISSIONS,
  payload: {
    permissions,
  },
});

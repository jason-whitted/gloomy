import ID from '../../ID';

export default ({ updates }) => ({
  action: ID.CAMPAIGN_PATCH,
  payload: { updates },
});

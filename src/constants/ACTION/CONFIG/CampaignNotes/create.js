import ID from '../../ID';

export default ({ notes }) => ({
  action: ID.CAMPAIGN_NOTES,
  payload: {
    notes,
  },
});

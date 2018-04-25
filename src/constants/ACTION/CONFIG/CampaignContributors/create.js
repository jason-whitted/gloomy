import ID from '../../ID';

export default ({ contributors }) => ({
  action: ID.CAMPAIGN_CONTRIBUTORS,
  payload: {
    contributors,
  },
});

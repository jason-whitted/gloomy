import ID from '../../ID';

export default ({ event }) => ({
  action: ID.CAMPAIGN_UNLOCK_ROAD_EVENT,
  payload: {
    event: parseInt(event, 10) || 0,
  },
});

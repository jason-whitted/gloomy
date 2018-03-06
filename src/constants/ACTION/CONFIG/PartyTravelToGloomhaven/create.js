import ID from '../../ID';

export default ({ party, event, remove }) => ({
  action: ID.PARTY_TRAVEL_TO_GLOOMHAVEN,
  payload: {
    party: parseInt(party, 10) || 0,
    event: parseInt(event, 10) || 0,
    remove: remove || undefined,
  },
});

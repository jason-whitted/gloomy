import ID from '../../ID';

export default ({ party, count }) => ({
  action: ID.PARTY_ADD_REPUTATION,
  payload: {
    party: parseInt(party, 10) || 0,
    count: parseInt(count, 10) || 0,
  },
});

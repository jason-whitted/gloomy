import ID from '../../ID';

export default ({ party, notes }) => ({
  action: ID.PARTY_NOTES,
  payload: {
    party: parseInt(party, 10) || 0,
    notes,
  },
});

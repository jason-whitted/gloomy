import ID from '../../ID';

export default ({ party, from, to }) => ({
  action: ID.PARTY_RENAME,
  payload: {
    party: parseInt(party, 10) || 0,
    from,
    to,
  },
});

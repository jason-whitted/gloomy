import ID from '../../ID';

export default ({ name }) => ({
  action: ID.PARTY_CREATE,
  payload: { name },
});

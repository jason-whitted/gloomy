import ID from '../../ID';

export default ({ name }) => ({
  action: ID.PLAYER_CREATE,
  payload: { name },
});

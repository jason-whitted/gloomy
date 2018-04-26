import ID from '../../ID';

export default ({ player, notes }) => ({
  action: ID.PLAYER_NOTES,
  payload: {
    player: parseInt(player, 10) || 0,
    notes,
  },
});

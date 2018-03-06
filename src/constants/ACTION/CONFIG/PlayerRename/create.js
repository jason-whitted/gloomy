import ID from '../../ID';

export default ({ player, from, to }) => ({
  action: ID.PLAYER_RENAME,
  payload: {
    player: parseInt(player, 10) || 0,
    from,
    to,
  },
});

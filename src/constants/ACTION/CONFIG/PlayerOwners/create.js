import ID from '../../ID';

export default ({ player, owners }) => ({
  action: ID.PLAYER_OWNERS,
  payload: {
    player: parseInt(player, 10) || 0,
    owners,
  },
});

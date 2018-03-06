export default (campaign, { payload: { player, from, to } }) => ({
  ...campaign,
  players: {
    ...campaign.players,
    [player]: {
      ...campaign.players[player],
      name: to,
    },
  },
});

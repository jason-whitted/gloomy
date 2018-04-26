export default (campaign, { payload: { player, notes } }) => ({
  ...campaign,
  players: {
    ...campaign.players,
    [player]: {
      ...campaign.players[player],
      notes,
    },
  },
});

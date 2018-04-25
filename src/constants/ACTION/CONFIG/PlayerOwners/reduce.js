export default (campaign, { payload: { player, owners }, by }) =>
  campaign.owner !== by
    ? campaign
    : {
        ...campaign,
        players: {
          ...campaign.players,
          [player]: {
            ...campaign.players[player],
            owners,
          },
        },
      };

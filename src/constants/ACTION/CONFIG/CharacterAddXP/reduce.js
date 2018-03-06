export default (campaign, { payload: { character, count } }) => ({
  ...campaign,
  characters: {
    ...campaign.characters,
    [character]: {
      ...campaign.characters[character],
      xp: campaign.characters[character].xp + count,
    },
  },
});

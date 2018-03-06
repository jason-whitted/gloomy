export default (campaign, { payload: { character, count } }) => ({
  ...campaign,
  characters: {
    ...campaign.characters,
    [character]: {
      ...campaign.characters[character],
      gold: campaign.characters[character].gold + count,
    },
  },
});

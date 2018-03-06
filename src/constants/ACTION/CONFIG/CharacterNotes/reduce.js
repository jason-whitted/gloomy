export default (campaign, { payload: { character, notes } }) => ({
  ...campaign,
  characters: {
    ...campaign.characters,
    [character]: {
      ...campaign.characters[character],
      notes,
    },
  },
});

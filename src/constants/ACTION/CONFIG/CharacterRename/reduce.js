export default (campaign, { payload: { character, from, to } }) => ({
  ...campaign,
  characters: {
    ...campaign.characters,
    [character]: {
      ...campaign.characters[character],
      name: to,
    },
  },
});

export default (campaign, { payload: { character, hiatus } }) => ({
  ...campaign,
  characters: {
    ...campaign.characters,
    [character]: {
      ...campaign.characters[character],
      hiatus: !!hiatus,
    },
  },
});

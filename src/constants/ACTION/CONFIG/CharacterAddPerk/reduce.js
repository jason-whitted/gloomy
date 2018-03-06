export default (campaign, { payload: { character, perk } }) => ({
  ...campaign,
  characters: {
    ...campaign.characters,
    [character]: {
      ...campaign.characters[character],
      perks: [...campaign.characters[character].perks, perk],
    },
  },
});

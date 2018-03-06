export default (campaign, { payload: { character, ability } }) => ({
  ...campaign,
  characters: {
    ...campaign.characters,
    [character]: {
      ...campaign.characters[character],
      abilityDeck: {
        ...campaign.characters[character].abilityDeck,
        [ability]: {
          id: ability,
          augments: {},
        },
      },
    },
  },
});

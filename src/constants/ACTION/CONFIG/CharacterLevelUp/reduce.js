export default (campaign, { payload: { character } }) => {
  const curChar = campaign.characters[character];
  return {
    ...campaign,
    characters: {
      ...campaign.characters,
      [character]: {
        ...curChar,
        level: curChar.level + 1,
        maxAbilities: curChar.maxAbilities + 1,
        maxPerks: curChar.maxPerks + 1,
      },
    },
  };
};

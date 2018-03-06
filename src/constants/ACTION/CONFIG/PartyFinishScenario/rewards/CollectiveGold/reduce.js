export default (campaign, { characters }) => ({
  ...campaign,
  characters: Object.entries(campaign.characters).reduce(
    (obj, [key, val]) => ({
      ...obj,
      [key]: !characters[key]
        ? val
        : {
            ...val,
            gold: val.gold + characters[key],
          },
    }),
    {},
  ),
});

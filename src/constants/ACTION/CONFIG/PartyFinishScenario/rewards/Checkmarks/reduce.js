import { Convert } from '../../../../../../common/Convert';

export default (campaign, { characters, count }) => ({
  ...campaign,
  characters: Object.entries(campaign.characters).reduce(
    (obj, [key, val]) => ({
      ...obj,
      // Skip characters that did not attend the scenario
      [key]: !characters[key]
        ? val
        : {
            ...val,
            ...Convert.offsetChecks(val, count),
          },
    }),
    {},
  ),
});

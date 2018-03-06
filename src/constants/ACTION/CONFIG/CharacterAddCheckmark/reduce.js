import { Convert } from '../../../../common/Convert';

export default (campaign, { payload: { character, count } }) => ({
  ...campaign,
  characters: {
    ...campaign.characters,
    [character]: {
      ...campaign.characters[character],
      ...Convert.offsetChecks(campaign.characters[character], count),
    },
  },
});

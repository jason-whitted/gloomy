import { ITEM_CONFIG } from '../../../../constants';

export default (campaign, { payload: { character, item } }) => {
  const curChar = campaign.characters[character];
  const { count } = ITEM_CONFIG[item];

  return {
    ...campaign,
    characters: {
      ...campaign.characters,
      [character]: {
        ...curChar,
        items: {
          ...curChar.items,
          // Put the item in their inventory
          [item]: 1,
        },
      },
    },
    items: {
      ...campaign.items,
      // Make the item available to other parties
      [item]: count,
    },
    // Make the item available to all parties (n-1 for current party)
    parties: Object.entries(campaign.parties).reduce(
      (obj, [key, val]) => ({
        ...obj,
        [key]: {
          ...val,
          items: {
            ...val.items,
            // eslint-disable-next-line eqeqeq
            [item]: key == curChar.party ? count - 1 : count,
          },
        },
      }),
      {},
    ),
  };
};

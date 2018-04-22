import { ITEM_CONFIG } from '../../../../constants';
import { Convert } from '../../../../common/Convert';

export default (campaign, { payload: { character, item } }) => {
  const curChar = campaign.characters[character];
  const { count } = ITEM_CONFIG[item];

  const alreadyOwned = !!curChar.items[item];

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
        // If they already have the item, then sell it
        gold: curChar.gold + (alreadyOwned ? Convert.itemToSellPrice(item) : 0),
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
            [item]: (campaign.parties[key].items[item] || count) + (key == curChar.party && !alreadyOwned ? -1 : 0),
          },
        },
      }),
      {},
    ),
  };
};

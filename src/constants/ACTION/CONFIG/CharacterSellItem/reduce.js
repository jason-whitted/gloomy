import { Convert } from '../../../../common/Convert';

export default (campaign, { payload: { character, item } }) => {
  const curChar = campaign.characters[character];
  const curParty = campaign.parties[curChar.party];

  return {
    ...campaign,
    characters: {
      ...campaign.characters,
      [character]: {
        ...curChar,
        // Take the item out of their inventory
        items: Object.entries(curChar.items).reduce(
          (obj, [key, val]) => (key == item ? obj : { ...obj, [key]: val }), // eslint-disable-line eqeqeq
          {},
        ),
        // Increase their gold
        gold: curChar.gold + Convert.itemToSellPrice(item),
      },
    },
    parties: {
      ...campaign.parties,
      [curParty.id]: {
        ...curParty,
        items: {
          ...curParty.items,
          // Increase the partie's inventory
          [item]: curParty.items[item] + 1,
        },
      },
    },
  };
};

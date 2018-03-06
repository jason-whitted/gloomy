import { Convert } from '../../../../common/Convert';

export default (campaign, { payload: { character } }) => {
  const curChar = campaign.characters[character];
  const curParty = campaign.parties[curChar.party];

  const items = Object.keys(curChar.items);
  const sellPrice = items.reduce((t, i) => t + Convert.itemToSellPrice(i), 0);

  return {
    ...campaign,
    characters: {
      ...campaign.characters,
      [character]: {
        ...curChar,
        items: {},
        gold: curChar.gold + sellPrice,
      },
    },
    parties: {
      ...campaign.parties,
      [curParty.id]: {
        ...curParty,
        items: Object.entries(curParty.items).reduce(
          (obj, [key, val]) => ({
            ...obj,
            [key]: val + (items.find(i => i == key) ? 1 : 0), // eslint-disable-line eqeqeq
          }),
          {},
        ),
      },
    },
  };
};

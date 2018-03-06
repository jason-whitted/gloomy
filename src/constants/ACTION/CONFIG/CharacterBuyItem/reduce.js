import { ITEM_CONFIG } from '../../../../constants';
import { Convert } from '../../../../common/Convert';

export default (campaign, { payload: { character, item } }) => {
  const curChar = campaign.characters[character];
  const curParty = campaign.parties[curChar.party];
  const { reputation } = curParty;
  const discount = Convert.reputationToShopPriceModifier(reputation);
  const cost = ITEM_CONFIG[item].gold + discount;

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
        // Reduce their gold
        gold: curChar.gold - cost,
      },
    },
    parties: {
      ...campaign.parties,
      [curParty.id]: {
        ...curParty,
        items: {
          ...curParty.items,
          // Reduce the partie's inventory
          [item]: curParty.items[item] - 1,
        },
      },
    },
  };
};

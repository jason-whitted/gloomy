import { ITEM_CONFIG } from '../../../../constants';

export default (campaign, { payload: { item } }) => {
  const { count } = ITEM_CONFIG[item];

  return {
    ...campaign,
    items: {
      ...campaign.items,
      // Make the item available to the campaign
      [item]: count,
    },
    // Make the item available to all parties
    parties: Object.entries(campaign.parties).reduce(
      (obj, [key, val]) => ({
        ...obj,
        [key]: {
          ...val,
          items: {
            ...val.items,
            [item]: count,
          },
        },
      }),
      {},
    ),
  };
};

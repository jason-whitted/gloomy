import { Convert } from '../../../../common/Convert';
import { ITEM_CONFIG } from '../../../ITEM';

export default (state, { payload: { count } }) => {
  let campaign = state;

  const before = Convert.prosperityToProsperityLevel(campaign.prosperity);

  campaign = {
    ...campaign,
    prosperity: Convert.offsetProsperity(campaign, count),
  };

  const after = Convert.prosperityToProsperityLevel(campaign.prosperity);

  if (after > before) {
    // Unlock new scenario items
    const newItems = Object.values(ITEM_CONFIG)
      .filter(i => i.prosperity > before && i.prosperity <= after)
      .reduce((o, { id, count }) => ({ ...o, [id]: count }), {});

    campaign = {
      ...campaign,
      items: {
        ...campaign.items,
        ...newItems,
      },
      parties: Object.entries(campaign.parties).reduce(
        (obj, [key, val]) => ({
          ...obj,
          [key]: {
            ...val,
            items: {
              ...val.items,
              ...newItems,
            },
          },
        }),
        {},
      ),
    };
  }

  return campaign;
};

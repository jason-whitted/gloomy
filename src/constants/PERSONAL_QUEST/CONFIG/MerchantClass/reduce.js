import { ITEM_CONFIG } from '../../../ITEM';
import { SLOT } from '../../../SLOT';

export default campaign => (character, action) => {
  const items = Object.keys(character.items)
    .map(id => ITEM_CONFIG[id])
    .reduce(
      (obj, item) => ({
        ...obj,
        [item.slot]: (obj[item.slot] || 0) + 1,
      }),
      {},
    );

  const unchanged = [SLOT.HEAD, SLOT.BODY, SLOT.LEGS, SLOT.ONE_HAND, SLOT.SMALL_ITEM].every(
    slot => items[slot] === character.retirement.items[slot],
  );
  if (unchanged) return character;

  const current =
    Math.min(items[SLOT.HEAD] || 0, 2) +
    Math.min(items[SLOT.BODY] || 0, 2) +
    Math.min(items[SLOT.LEGS] || 0, 2) +
    Math.min((items[SLOT.ONE_HAND] || 0) + (items[SLOT.TWO_HANDS] || 0), 3) +
    Math.min(items[SLOT.SMALL_ITEM] || 0, 4);

  const progress = current / 13;
  return {
    ...character,
    retirement: {
      complete: current === 13,
      progress,
      items,
    },
  };
};

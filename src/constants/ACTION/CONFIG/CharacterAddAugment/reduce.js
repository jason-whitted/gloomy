import { ABILITY_CARD_CONFIG } from '../../../../constants';
import { Convert } from '../../../../common/Convert';

export default (campaign, { payload: { character, ability, slot, augment } }) => {
  const curChar = campaign.characters[character];
  const cost = Convert.abilityAugmentCost({
    ability: ABILITY_CARD_CONFIG[ability],
    augments: campaign.augments[ability],
    slotID: slot,
    augmentID: augment,
  });

  return {
    ...campaign,
    characters: {
      ...campaign.characters,
      [character]: {
        ...curChar,
        gold: curChar.gold - cost.cost,
      },
    },
    augments: {
      ...campaign.augments,
      [ability]: {
        ...campaign.augments[ability],
        [slot]: augment,
      },
    },
  };
};

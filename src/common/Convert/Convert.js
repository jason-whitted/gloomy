import {
  ABILITY_CARD_ACTION,
  AUGMENT,
  AUGMENT_CONFIG,
  AUGMENT_COST,
  ITEM_CONFIG,
  SUMMON_CONFIG,
} from '../../constants';
import scenarioRewardToText from './scenarioRewardToText';

const XP = [0, 0, 45, 95, 150, 210, 275, 345, 420, 500];
const PROSPERITY = [0, 0, 4, 9, 15, 22, 30, 39, 49, 64];

const abilityAugmentCost = ({ ability, augments = {}, slotID, augmentID }) => {
  const findActionWithAugmentSlot = actions => {
    if (actions) {
      for (let a of actions) {
        let match;
        match = a.augments && a.augments.includes(slotID);
        if (match) return a;
        match = a.bonuses && findActionWithAugmentSlot(a.bonuses);
        if (match) return match;
        const summon = a.action === ABILITY_CARD_ACTION.SUMMON && SUMMON_CONFIG[a.summon];
        match = summon && summon.hp.augments && summon.hp.augments.includes(slotID);
        if (match) return { ...summon.hp, summonAction: 'hp' };
        match = summon && summon.move.augments && summon.move.augments.includes(slotID);
        if (match) return { ...summon.move, summonAction: 'move' };
        match = summon && summon.attack.augments && summon.attack.augments.includes(slotID);
        if (match) return { ...summon.attack, summonAction: 'attack' };
        match = summon && summon.range.augments && summon.range.augments.includes(slotID);
        if (match) return { ...summon.range, summonAction: 'range' };
      }
    }
  };
  const action = findActionWithAugmentSlot(ability.top.actions) || findActionWithAugmentSlot(ability.bottom.actions);
  if (!action) console.log({ ability, slotID, augmentID });
  const slot = ability.augmentSlots[slotID];
  const augment = AUGMENT_CONFIG[augmentID];

  const base = augment.cost || AUGMENT_COST.PLUS1[action.action] || 0;
  const double = slot.multiple ? base : 0;
  const summon = AUGMENT_COST.SUMMON[action.summonAction] || 0;
  const level = AUGMENT_COST.LEVEL[ability.level] || 0;
  const prevCount = Object.values(ability.augmentSlots).filter(
    a => !a.readonly && !!a.top === !!slot.top && (augments[a.id] || a.type) !== AUGMENT.AVAILABLE,
  ).length;
  const previous = AUGMENT_COST.PREVIOUS_ENHANCE[prevCount] || 0;
  const hex = slot.hex ? AUGMENT_COST.HEX[action.value.replace(/[^R]/g, '').length] || 0 : 0;
  const cost = base + double + level + summon + previous + hex;
  return { base, double, level, summon, previous, hex, cost };
};
const offsetChecks = ({ checks, maxPerks }, value) => {
  const offset = value || 0;
  if (offset >= 0) {
    const newChecks = Math.min(18, checks + offset);
    const newPerks = maxPerks + checksToPerks(newChecks) - checksToPerks(checks);
    return {
      checks: Math.min(18, newChecks),
      maxPerks: Math.min(15, newPerks),
    };
  }
  const maxOffset = Math.min(checks % 3, Math.abs(offset));
  return {
    checks: checks - maxOffset,
    maxPerks,
  };
};
const checksToPerks = checks => Math.floor(checks / 3);
const itemToSellPrice = item => Math.floor(ITEM_CONFIG[item].gold / 2);
const levelToGold = level => (level + 1) * 15;
const levelToXP = level => XP[level];
const offsetProsperity = ({ prosperity }, value) => {
  const offset = value || 0;
  const newProsperity = prosperity + offset;
  const minProsperity = PROSPERITY[prosperityToProsperityLevel(prosperity)];
  return offset >= 0 ? Math.min(68, newProsperity) : Math.max(minProsperity, newProsperity);
};
const prosperityToProsperityLevel = prosperity =>
  PROSPERITY.reduce((cur, next, index) => (prosperity >= next ? index : cur), 1);
const reputationToShopPriceModifier = reputation =>
  Math.ceil((Math.abs(reputation) - 2) / 4) * (reputation > 0 ? -1 : 1);
// prettier-ignore
const scenarioLevelToGold = level =>
  level >= 7 ? 6
  : level >= 6 ? 5
  : level >= 4 ? 4
  : level >= 2 ? 3
  : 2;
// prettier-ignore
const scenarioLevelToXP = level => 2 * level + 4;
const xpToLevel = xp => XP.reduce((cur, next, index) => (xp >= next ? index : cur), 1);

export default {
  abilityAugmentCost,
  checksToPerks,
  itemToSellPrice,
  levelToGold,
  levelToXP,
  offsetChecks,
  offsetProsperity,
  prosperityToProsperityLevel,
  reputationToShopPriceModifier,
  scenarioLevelToGold,
  scenarioLevelToXP,
  xpToLevel,
  scenarioRewardToText,
};

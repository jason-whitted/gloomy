/* eslint-disable eqeqeq */
import { createSelector } from 'reselect';
import clone from 'clone';

import { Convert } from '../../../common/Convert';
import * as CONST from '../../../constants';
import selectRawCampaign from './selectRawCampaign';

export default createSelector(selectRawCampaign, raw => {
  const campaign = clone(raw.data);
  campaign.prosperityLevel = Convert.prosperityToProsperityLevel(campaign.prosperity);

  if (campaign.prosperityLevel >= 3) {
    // Determine what solo scenarios are available
    const retireeCount = Object.values(campaign.players).reduce((t, p) => t + Object.keys(p.retired).length, 0);
    if (retireeCount >= 2) {
      Object.values(campaign.characters)
        .filter(c => !c.retired && c.level >= 5)
        .forEach(c => {
          const soloScenario = Object.values(CONST.SCENARIO_CONFIG).find(s => s.solo && s.class === c.class);
          campaign.scenarios[soloScenario.id] = campaign.scenarios[soloScenario.id] || CONST.SCENARIO_STATUS.AVAILABLE;
        });
    }
  }

  campaign.achievements = Object.entries(campaign.achievements).map(([key, value]) => {
    const a = clone(CONST.GLOBAL_ACHIEVEMENT_CONFIG[key]);
    if (a.id === CONST.GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY) {
      a.name += ` (x${value})`;
    }
    return a;
  });
  campaign.classes = Object.keys(campaign.classes).map(id => {
    const c = clone(CONST.CLASS_CONFIG[id]);
    return {
      ...c,
      perks: c.perks.map(id => clone(CONST.PERK_CONFIG[id])),
      race: clone(CONST.RACE_CONFIG[c.race]),
      hp: clone(CONST.HEALTH_POOL_CONFIG[c.hp]),
    };
  });
  campaign.envelopes = Object.keys(campaign.envelopes).map(id => clone(CONST.ENVELOPE_CONFIG[id]));
  campaign.items = Object.entries(campaign.items).map(([id, count]) => {
    const i = clone(CONST.ITEM_CONFIG[id]);
    return {
      ...i,
      count,
      slot: clone(CONST.SLOT_CONFIG[i.slot]),
    };
  });

  campaign.scenarios = Object.entries(campaign.scenarios).map(([id, status]) => {
    const s = clone(CONST.SCENARIO_CONFIG[id]);
    return {
      ...s,
      status,
      region: clone(CONST.REGION_CONFIG[s.region]),
      available: status === CONST.SCENARIO_STATUS.AVAILABLE,
      complete: status === CONST.SCENARIO_STATUS.COMPLETE,
    };
  });

  // First, turn the circular maps into arrays
  campaign.players = Object.values(campaign.players);
  campaign.parties = Object.values(campaign.parties);
  campaign.characters = Object.values(campaign.characters);

  // Next, get the circular references working
  campaign.players.forEach(p => {
    p.url = `/campaign/${campaign.id}/player/${p.id}`;
    p.characters = Object.keys(p.characters).map(k => campaign.characters.find(c => c.id == k));
    p.retired = Object.keys(p.retired).map(k => campaign.characters.find(c => c.id == k));
    p.parties = Object.keys(p.parties).map(k => campaign.parties.find(cp => cp.id == k));
  });
  campaign.parties.forEach(p => {
    p.url = `/campaign/${campaign.id}/party/${p.id}`;
    p.achievements = Object.keys(p.achievements).map(id => clone(CONST.PARTY_ACHIEVEMENT_CONFIG[id]));
    p.characters = Object.keys(p.characters).map(k => campaign.characters.find(c => c.id == k));
    p.items = Object.entries(p.items).map(([k, available]) => {
      const i = campaign.items.find(i => i.id == k);
      return {
        ...i,
        available,
        cost: i.gold + Convert.reputationToShopPriceModifier(p.reputation),
      };
    });
    p.shopPriceModifier = Convert.reputationToShopPriceModifier(p.reputation);
    p.location.scenario = campaign.scenarios.find(s => s.id === p.location.scenario) || {};
    p.location.region = p.location.scenario.region || clone(CONST.REGION_CONFIG[CONST.REGION.UNKNOWN]);
    p.location.campaign = !p.location.casual;
    p.location.gloomhaven = !p.location.scenario.id;
  });
  campaign.characters.forEach(c => {
    c.url = `/campaign/${campaign.id}/character/${c.id}`;
    c.class = campaign.classes.find(cc => cc.id === c.class);
    c.race = c.class.race;
    c.party = campaign.parties.find(p => p.id === c.party);
    c.player = campaign.players.find(p => p.id === c.player);
    c.items = Object.keys(c.items).map(k => campaign.items.find(i => i.id == k));
    c.perks = c.perks.map(p => clone(CONST.PERK_CONFIG[p]));
    c.attackDeck = c.attackDeck.map(k => clone(CONST.ATTACK_MODIFIER_CARD_CONFIG[k]));
    c.abilityDeck = c.abilityDeck.map(id => {
      const ability = clone(CONST.ABILITY_CARD_CONFIG[id]);
      const augments = campaign.augments[id] || {};
      if (ability.augmentSlots) {
        ability.augmentSlots = Object.entries(ability.augmentSlots).reduce(
          (obj, [key, val]) => ({
            ...obj,
            [key]: {
              ...val,
              type: augments[val.id] || val.type,
            },
          }),
          {},
        );
      }
      return ability;
    });
    c.quest = clone(CONST.PERSONAL_QUEST_CONFIG[c.quest]);
    c.levelUp = Convert.xpToLevel(c.xp) > c.level;
    c.perkUp = c.maxPerks > c.perks.length;
    c.abilityUp = c.maxAbilities > c.abilityDeck.length;
  });
  return campaign;
});

import { ATTACK_MODIFIER_CARD as CARD } from '../ATTACK_MODIFIER_CARD';
import ID from './ID';

const remove = deck => (...cards) =>
  cards.reduce(
    (arr, card) => {
      const index = arr.indexOf(card);
      if (index < 0) return arr;
      arr.splice(index, 1);
      return arr;
    },
    [...deck],
  );

export default {
  [ID.ADD1_NEG1_DARK]: {
    id: ID.ADD1_NEG1_DARK,
    name: 'Add one (Attack:-1) (Element:Dark)',
    apply: deck => [...deck, CARD.NEG1_DARK],
  },
  [ID.ADD1_NEG2_AND2_POS2]: {
    id: ID.ADD1_NEG2_AND2_POS2,
    name: 'Add one (Attack:-2) and add two (Attack:+2)',
    apply: deck => [...deck, CARD.NEG2, CARD.POS2, CARD.POS2],
  },
  [ID.ADD1_POS0_REFRESH_ITEM]: {
    id: ID.ADD1_POS0_REFRESH_ITEM,
    name: 'Add one (Attack:+0) (Symbol:ItemRefresh) an item',
    apply: deck => [...deck, CARD.POS0_REFRESH_ITEM],
  },
  [ID.ADD1_POS0_STUN]: {
    id: ID.ADD1_POS0_STUN,
    name: 'Add one (Attack:+0) (Effect:Stun)',
    apply: deck => [...deck, CARD.POS0_STUN],
  },
  [ID.ADD1_POS0_TARGET]: {
    id: ID.ADD1_POS0_TARGET,
    name: 'Add one (Attack:+0) (Effect:Target)',
    apply: deck => [...deck, CARD.POS0_TARGET],
  },
  [ID.ADD1_POS1_AIR]: {
    id: ID.ADD1_POS1_AIR,
    name: 'Add one (Attack:+1) (Element:Air)',
    apply: deck => [...deck, CARD.POS1_AIR],
  },
  [ID.ADD1_POS1_CURSE]: {
    id: ID.ADD1_POS1_CURSE,
    name: 'Add one (Attack:+1) (Effect:Curse)',
    apply: deck => [...deck, CARD.POS1_CURSE],
  },
  [ID.ADD1_POS1_HEAL2]: {
    id: ID.ADD1_POS1_HEAL2,
    name: 'Add one (Attack:+1) (Symbol:Heal) 2',
    apply: deck => [...deck, CARD.POS1_HEAL2],
  },
  [ID.ADD1_POS1_IMMOBILIZE]: {
    id: ID.ADD1_POS1_IMMOBILIZE,
    name: 'Add one (Attack:+1) (Effect:Immobilize)',
    apply: deck => [...deck, CARD.POS1_IMMOBILIZE],
  },
  [ID.ADD1_POS1_INVISIBLE]: {
    id: ID.ADD1_POS1_INVISIBLE,
    name: 'Add one (Attack:+1) (Effect:Invisible)',
    apply: deck => [...deck, CARD.POS1_INVISIBLE],
  },
  [ID.ADD1_POS1_POISON]: {
    id: ID.ADD1_POS1_POISON,
    name: 'Add one (Attack:+1) (Effect:Poison)',
    apply: deck => [...deck, CARD.POS1_POISON],
  },
  [ID.ADD1_POS1_SHIELD1]: {
    id: ID.ADD1_POS1_SHIELD1,
    name: 'Add one (Attack:+1) (Symbol:Shield) 1',
    apply: deck => [...deck, CARD.POS1_SHIELD1],
  },
  [ID.ADD1_POS1_STUN]: {
    id: ID.ADD1_POS1_STUN,
    name: 'Add one (Attack:+1) (Effect:Stun)',
    apply: deck => [...deck, CARD.POS1_STUN],
  },
  [ID.ADD1_POS1_WOUND]: {
    id: ID.ADD1_POS1_WOUND,
    name: 'Add one (Attack:+1) (Effect:Wound)',
    apply: deck => [...deck, CARD.POS1_WOUND],
  },
  [ID.ADD1_POS2]: {
    id: ID.ADD1_POS2,
    name: 'Add one (Attack:+2)',
    apply: deck => [...deck, CARD.POS2],
  },
  [ID.ADD1_POS2_FIRE]: {
    id: ID.ADD1_POS2_FIRE,
    name: 'Add one (Attack:+2) (Element:Fire)',
    apply: deck => [...deck, CARD.POS2_FIRE],
  },
  [ID.ADD1_POS2_ICE]: {
    id: ID.ADD1_POS2_ICE,
    name: 'Add one (Attack:+2) (Element:Ice)',
    apply: deck => [...deck, CARD.POS2_ICE],
  },
  [ID.ADD1_POS2_MUDDLE]: {
    id: ID.ADD1_POS2_MUDDLE,
    name: 'Add one (Attack:+2) (Effect:Muddle)',
    apply: deck => [...deck, CARD.POS2_MUDDLE],
  },
  [ID.ADD1_POS3]: {
    id: ID.ADD1_POS3,
    name: 'Add one (Attack:+3)',
    apply: deck => [...deck, CARD.POS3],
  },
  [ID.ADD1_ROLLING_DARK_AND_ADD1_ROLLING_EARTH]: {
    id: ID.ADD1_ROLLING_DARK_AND_ADD1_ROLLING_EARTH,
    name: 'Add one (Effect:Rolling) (Element:Dark) and one (Effect:Rolling) (Element:Earth)',
    apply: deck => [...deck, CARD.ROLLING_DARK, CARD.ROLLING_EARTH],
  },
  [ID.ADD1_ROLLING_DISARM_AND_ADD1_ROLLING_MUDDLE]: {
    id: ID.ADD1_ROLLING_DISARM_AND_ADD1_ROLLING_MUDDLE,
    name: 'Add one (Effect:Rolling) (Effect:Disarm) and add one (Effect:Rolling) (Effect:Muddle)',
    apply: deck => [...deck, CARD.ROLLING_DISARM, CARD.ROLLING_MUDDLE],
  },
  [ID.ADD1_ROLLING_EARTH_AND_ADD1_ROLLING_AIR]: {
    id: ID.ADD1_ROLLING_EARTH_AND_ADD1_ROLLING_AIR,
    name: 'Add one (Effect:Rolling) (Element:Earth) and add one (Effect:Rolling) (Element:Air)',
    apply: deck => [...deck, CARD.ROLLING_EARTH, CARD.ROLLING_AIR],
  },
  [ID.ADD1_ROLLING_FIRE_AND_ADD1_ROLLING_AIR]: {
    id: ID.ADD1_ROLLING_FIRE_AND_ADD1_ROLLING_AIR,
    name: 'Add one (Effect:Rolling) (Element:Fire) and one (Effect:Rolling) (Element:Air)',
    apply: deck => [...deck, CARD.ROLLING_FIRE, CARD.ROLLING_AIR],
  },
  [ID.ADD1_ROLLING_HEAL3]: {
    id: ID.ADD1_ROLLING_HEAL3,
    name: 'Add one (Effect:Rolling) (Symbol:Heal) 3',
    apply: deck => [...deck, CARD.ROLLING_HEAL3],
  },
  [ID.ADD1_ROLLING_INVISIBLE]: {
    id: ID.ADD1_ROLLING_INVISIBLE,
    name: 'Add one (Effect:Rolling) (Effect:Invisible)',
    apply: deck => [...deck, CARD.ROLLING_INVISIBLE],
  },
  [ID.ADD1_ROLLING_LIGHT_AND_ADD1_ROLLING_DARK]: {
    id: ID.ADD1_ROLLING_LIGHT_AND_ADD1_ROLLING_DARK,
    name: 'Add one (Effect:Rolling) (Element:Light) and add one (Effect:Rolling) (Element:Dark)',
    apply: deck => [...deck, CARD.ROLLING_LIGHT, CARD.ROLLING_DARK],
  },
  [ID.ADD1_ROLLING_POS1_DISARM]: {
    id: ID.ADD1_ROLLING_POS1_DISARM,
    name: 'Add one (Effect:Rolling) (Attack:+1) (Effect:Disarm)',
    apply: deck => [...deck, CARD.ROLLING_POS1_DISARM],
  },
  [ID.ADD1_ROLLING_POS2]: {
    id: ID.ADD1_ROLLING_POS2,
    name: 'Add one (Effect:Rolling) (Attack:+2)',
    apply: deck => [...deck, CARD.ROLLING_POS2],
  },
  [ID.ADD1_ROLLING_STUN]: {
    id: ID.ADD1_ROLLING_STUN,
    name: 'Add one (Effect:Rolling) (Effect:Stun)',
    apply: deck => [...deck, CARD.ROLLING_STUN],
  },
  [ID.ADD1_ROLLING_TARGET]: {
    id: ID.ADD1_ROLLING_TARGET,
    name: 'Add one (Effect:Rolling) (Effect:Target)',
    apply: deck => [...deck, CARD.ROLLING_TARGET],
  },
  [ID.ADD2_POS1]: {
    id: ID.ADD2_POS1,
    name: 'Add two (Attack:+1)',
    apply: deck => [...deck, CARD.POS1, CARD.POS1],
  },
  [ID.ADD2_POS1_PUSH1]: {
    id: ID.ADD2_POS1_PUSH1,
    name: 'Add two (Attack:+1) (Effect:Push) 1',
    apply: deck => [...deck, CARD.POS1_PUSH1, CARD.POS1_PUSH1],
  },
  [ID.ADD2_ROLLING_AIR]: {
    id: ID.ADD2_ROLLING_AIR,
    name: 'Add two (Effect:Rolling) (Element:Air)',
    apply: deck => [...deck, CARD.ROLLING_AIR, CARD.ROLLING_AIR],
  },
  [ID.ADD2_ROLLING_CURSE]: {
    id: ID.ADD2_ROLLING_CURSE,
    name: 'Add two (Effect:Rolling) (Effect:Curse)',
    apply: deck => [...deck, CARD.ROLLING_CURSE, CARD.ROLLING_CURSE],
  },
  [ID.ADD2_ROLLING_EARTH]: {
    id: ID.ADD2_ROLLING_EARTH,
    name: 'Add two (Effect:Rolling) (Element:Earth)',
    apply: deck => [...deck, CARD.ROLLING_EARTH, CARD.ROLLING_EARTH],
  },
  [ID.ADD2_ROLLING_FIRE]: {
    id: ID.ADD2_ROLLING_FIRE,
    name: 'Add two (Effect:Rolling) (Element:Fire)',
    apply: deck => [...deck, CARD.ROLLING_FIRE, CARD.ROLLING_FIRE],
  },
  [ID.ADD2_ROLLING_HEAL1]: {
    id: ID.ADD2_ROLLING_HEAL1,
    name: 'Add two (Effect:Rolling) (Symbol:Heal) 1',
    apply: deck => [...deck, CARD.ROLLING_HEAL1, CARD.ROLLING_HEAL1],
  },
  [ID.ADD2_ROLLING_IMMOBILIZE]: {
    id: ID.ADD2_ROLLING_IMMOBILIZE,
    name: 'Add two (Effect:Rolling) (Effect:Immobilize)',
    apply: deck => [...deck, CARD.ROLLING_IMMOBILIZE, CARD.ROLLING.IMMOBILIZE],
  },
  [ID.ADD2_ROLLING_LIGHT]: {
    id: ID.ADD2_ROLLING_LIGHT,
    name: 'Add two (Effect:Rolling) (Element:Light)',
    apply: deck => [...deck, CARD.ROLLING_LIGHT, CARD.ROLLING_LIGHT],
  },
  [ID.ADD2_ROLLING_MUDDLE]: {
    id: ID.ADD2_ROLLING_MUDDLE,
    name: 'Add two (Effect:Rolling) (Effect:Muddle)',
    apply: deck => [...deck, CARD.ROLLING_MUDDLE, CARD.ROLLING_MUDDLE],
  },
  [ID.ADD2_ROLLING_PIERCE3]: {
    id: ID.ADD2_ROLLING_PIERCE3,
    name: 'Add two (Effect:Rolling) (Effect:Pierce) 3',
    apply: deck => [...deck, CARD.ROLLING_PIERCE3, CARD.ROLLING_PIERCE3],
  },
  [ID.ADD2_ROLLING_POISON]: {
    id: ID.ADD2_ROLLING_POISON,
    name: 'Add two (Effect:Rolling) (Effect:Poison)',
    apply: deck => [...deck, CARD.ROLLING_POISON, CARD.ROLLING_POISON],
  },
  [ID.ADD2_ROLLING_POS1]: {
    id: ID.ADD2_ROLLING_POS1,
    name: 'Add two (Effect:Rolling) (Attack:+1)',
    apply: deck => [...deck, CARD.ROLLING_POS1, CARD.ROLLING_POS1],
  },
  [ID.ADD2_ROLLING_PUSH2]: {
    id: ID.ADD2_ROLLING_PUSH2,
    name: 'Add two (Effect:Rolling) (Effect:Push) 2',
    apply: deck => [...deck, CARD.ROLLING_PUSH2, CARD.ROLLING_PUSH2],
  },
  [ID.ADD2_ROLLING_SHIELD1]: {
    id: ID.ADD2_ROLLING_SHIELD1,
    name: 'Add two (Effect:Rolling) (Symbol:Shield) 1',
    apply: deck => [...deck, CARD.ROLLING_SHIELD1, CARD.ROLLING_SHIELD1],
  },
  [ID.ADD2_ROLLING_WOUND]: {
    id: ID.ADD2_ROLLING_WOUND,
    name: 'Add two (Effect:Rolling) (Effect:Wound)',
    apply: deck => [...deck, CARD.ROLLING_WOUND, CARD.ROLLING_WOUND],
  },
  [ID.ADD3_POS0_AIR]: {
    id: ID.ADD3_POS0_AIR,
    name: 'Add three (Attack:+0) (Element:Air)',
    apply: deck => [...deck, CARD.POS0_AIR, CARD.POS0_AIR, CARD.POS0_AIR],
  },
  [ID.ADD3_POS0_EARTH]: {
    id: ID.ADD3_POS0_EARTH,
    name: 'Add three (Attack:+0) (Element:Earth)',
    apply: deck => [...deck, CARD.POS0_EARTH, CARD.POS0_EARTH, CARD.POS0_EARTH],
  },
  [ID.ADD3_POS0_FIRE]: {
    id: ID.ADD3_POS0_FIRE,
    name: 'Add three (Attack:+0) (Element:Fire)',
    apply: deck => [...deck, CARD.POS0_FIRE, CARD.POS0_FIRE, CARD.POS0_FIRE],
  },
  [ID.ADD3_POS0_ICE]: {
    id: ID.ADD3_POS0_ICE,
    name: 'Add three (Attack:+0) (Element:Ice)',
    apply: deck => [...deck, CARD.POS0_ICE, CARD.POS0_ICE, CARD.POS0_ICE],
  },
  [ID.ADD3_ROLLING_MUDDLE]: {
    id: ID.ADD3_ROLLING_MUDDLE,
    name: 'Add three (Effect:Rolling) (Effect:Muddle)',
    apply: deck => [...deck, CARD.ROLLING_MUDDLE, CARD.ROLLING_MUDDLE, CARD.ROLLING_MUDDLE],
  },
  [ID.ADD3_ROLLING_POISON]: {
    id: ID.ADD3_ROLLING_POISON,
    name: 'Add three (Effect:Rolling) (Effect:Poison)',
    apply: deck => [...deck, CARD.ROLLING_POISON, CARD.ROLLING_POISON, CARD.ROLLING_POISON],
  },
  [ID.ADD3_ROLLING_POS1]: {
    id: ID.ADD3_ROLLING_POS1,
    name: 'Add three (Effect:Rolling) (Attack:+1)',
    apply: deck => [...deck, CARD.ROLLING_POS1, CARD.ROLLING_POS1, CARD.ROLLING_POS1],
  },
  [ID.ADD3_ROLLING_PULL1]: {
    id: ID.ADD3_ROLLING_PULL1,
    name: 'Add three (Effect:Rolling) (Effect:Pull) 1',
    apply: deck => [...deck, CARD.ROLLING_PULL1, CARD.ROLLING_PULL1, CARD.ROLLING_PULL1],
  },
  [ID.ADD3_ROLLING_PUSH1]: {
    id: ID.ADD3_ROLLING_PUSH1,
    name: 'Add three (Effect:Rolling) (Effect:Push) 1',
    apply: deck => [...deck, CARD.ROLLING_PUSH1, CARD.ROLLING_PUSH1, CARD.ROLLING_PUSH1],
  },
  [ID.IGNORE_NEGATIVE_ITEM_EFFECTS]: {
    id: ID.IGNORE_NEGATIVE_ITEM_EFFECTS,
    name: 'Ignore negative item effects',
    apply: deck => deck,
  },
  [ID.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD1_POS1]: {
    id: ID.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD1_POS1,
    name: 'Ignore negative item effects and add one (Attack:+1)',
    apply: deck => [...deck, CARD.POS1],
  },
  [ID.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD2_POS1]: {
    id: ID.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD2_POS1,
    name: 'Ignore negative item effects and add two (Attack:+1)',
    apply: deck => [...deck, CARD.POS1, CARD.POS1],
  },
  [ID.IGNORE_NEGATIVE_SCENARIO_EFFECTS]: {
    id: ID.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
    name: 'Ignore negative scenario effects',
    apply: deck => deck,
  },
  [ID.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD1_POS1]: {
    id: ID.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD1_POS1,
    name: 'Ignore negative scenario effects and add one (Attack:+1)',
    apply: deck => [...deck, CARD.POS1],
  },
  [ID.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD2_POS1]: {
    id: ID.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD2_POS1,
    name: 'Ignore negative scenario effects and add two (Attack:+1)',
    apply: deck => [...deck, CARD.POS1, CARD.POS1],
  },
  [ID.REMOVE1_NEG2]: {
    id: ID.REMOVE1_NEG2,
    name: 'Remove one (Attack:-2)',
    apply: deck => remove(deck)(CARD.NEG2),
  },
  [ID.REMOVE2_NEG1]: {
    id: ID.REMOVE2_NEG1,
    name: 'Remove two (Attack:-1)',
    apply: deck => remove(deck)(CARD.NEG1, CARD.NEG1),
  },
  [ID.REMOVE4_POS0]: {
    id: ID.REMOVE4_POS0,
    name: 'Remove four (Attack:+0)',
    apply: deck => remove(deck)(CARD.POS0, CARD.POS0, CARD.POS0, CARD.POS0),
  },
  [ID.REPLACE1_NEG1_DARK_WITH1_POS1_DARK]: {
    id: ID.REPLACE1_NEG1_DARK_WITH1_POS1_DARK,
    name: 'Replace one (Attack:-1) (Element:Dark) with one (Attack:+1) (Element:Dark)',
    apply: deck => [...remove(deck)(CARD.NEG1_DARK), CARD.POS1_DARK],
  },
  [ID.REPLACE1_NEG1_WITH1_POS0_STUN]: {
    id: ID.REPLACE1_NEG1_WITH1_POS0_STUN,
    name: 'Replace one (Attack:-1) with one (Attack:+0) (Effect:Stun)',
    apply: deck => [...remove(deck)(CARD.NEG1), CARD.POS0_STUN],
  },
  [ID.REPLACE1_NEG1_WITH1_POS1]: {
    id: ID.REPLACE1_NEG1_WITH1_POS1,
    name: 'Replace one (Attack:-1) with one (Attack:+1)',
    apply: deck => [...remove(deck)(CARD.NEG1), CARD.POS1],
  },
  [ID.REPLACE1_NEG2_WITH1_POS0]: {
    id: ID.REPLACE1_NEG2_WITH1_POS0,
    name: 'Replace one (Attack:-2) with one (Attack:+0)',
    apply: deck => [...remove(deck)(CARD.NEG2), CARD.POS0],
  },
  [ID.REPLACE1_POS0_WITH1_POS1_DISARM]: {
    id: ID.REPLACE1_POS0_WITH1_POS1_DISARM,
    name: 'Replace one (Attack:+0) with one (Attack:+1) (Effect:Disarm)',
    apply: deck => [...remove(deck)(CARD.POS0), CARD.POS1_DISARM],
  },
  [ID.REPLACE1_POS0_WITH1_POS1_IMMOBILIZE]: {
    id: ID.REPLACE1_POS0_WITH1_POS1_IMMOBILIZE,
    name: 'Replace one (Attack:+0) with one (Attack:+1) (Effect:Immobilize)',
    apply: deck => [...remove(deck)(CARD.POS0), CARD.POS1_IMMOBILIZE],
  },
  [ID.REPLACE1_POS0_WITH1_POS2]: {
    id: ID.REPLACE1_POS0_WITH1_POS2,
    name: 'Replace one (Attack:+0) with one (Attack:+2)',
    apply: deck => [...remove(deck)(CARD.POS0), CARD.POS2],
  },
  [ID.REPLACE1_POS0_WITH1_POS2_CURSE]: {
    id: ID.REPLACE1_POS0_WITH1_POS2_CURSE,
    name: 'Replace one (Attack:+0) with one (Attack:+2) (Effect:Curse)',
    apply: deck => [...remove(deck)(CARD.POS0), CARD.POS2_CURSE],
  },
  [ID.REPLACE1_POS0_WITH1_POS2_POISON]: {
    id: ID.REPLACE1_POS0_WITH1_POS2_POISON,
    name: 'Replace one (Attack:+0) with one (Attack:+2) (Effect:Poison)',
    apply: deck => [...remove(deck)(CARD.POS0), CARD.POS2_POISON],
  },
  [ID.REPLACE1_POS0_WITH1_POS2_WOUND]: {
    id: ID.REPLACE1_POS0_WITH1_POS2_WOUND,
    name: 'Replace one (Attack:+0) with one (Attack:+2) (Effect:Wound)',
    apply: deck => [...remove(deck)(CARD.POS0), CARD.POS2_WOUND],
  },
  [ID.REPLACE1_POS0_WITH1_POS3_MUDDLE]: {
    id: ID.REPLACE1_POS0_WITH1_POS3_MUDDLE,
    name: 'Replace one (Attack:+0) with one (Attack:+3) (Effect:Muddle)',
    apply: deck => [...remove(deck)(CARD.POS0), CARD.POS3_MUDDLE],
  },
  [ID.REPLACE1_POS0_WITH1_ROLLING_POS2]: {
    id: ID.REPLACE1_POS0_WITH1_ROLLING_POS2,
    name: 'Replace one (Attack:+0) with one (Effect:Rolling) (Attack:+2)',
    apply: deck => [...remove(deck)(CARD.POS0), CARD.ROLLING_POS2],
  },
  [ID.REPLACE2_POS0_WITH1_POS0_FIRE_AND1_POS0_EARTH]: {
    id: ID.REPLACE2_POS0_WITH1_POS0_FIRE_AND1_POS0_EARTH,
    name: 'Replace two (Attack:+0) with one (Attack:+0) (Element:Fire) and one (Attack:+0) (Element:Earth)',
    apply: deck => [...remove(deck)(CARD.POS0, CARD.POS0), CARD.POS0_FIRE, CARD.POS0_EARTH],
  },
  [ID.REPLACE2_POS0_WITH1_POS0_ICE_AND1_POS0_AIR]: {
    id: ID.REPLACE2_POS0_WITH1_POS0_ICE_AND1_POS0_AIR,
    name: 'Replace two (Attack:+0) with one (Attack:+0) (Element:Ice) and one (Attack:+0) (Element:Air)',
    apply: deck => [...remove(deck)(CARD.POS0, CARD.POS0), CARD.POS0_ICE, CARD.POS_AIR],
  },
  [ID.REPLACE2_POS0_WITH2_POS2]: {
    id: ID.REPLACE2_POS0_WITH2_POS2,
    name: 'Replace two (Attack:+0) with two (Attack:+2)',
    apply: deck => [...remove(deck)(CARD.POS0, CARD.POS0), CARD.POS2, CARD.POS2],
  },
  [ID.REPLACE2_POS1_WITH1_POS4]: {
    id: ID.REPLACE2_POS1_WITH1_POS4,
    name: 'Replace two (Attack:+1) with one (Attack:+4)',
    apply: deck => [...remove(deck)(CARD.POS1, CARD.POS1), CARD.POS4, CARD.POS4],
  },
  [ID.REPLACE2_POS1_WITH2_POS2]: {
    id: ID.REPLACE2_POS1_WITH2_POS2,
    name: 'Replace two (Attack:+1) with two (Attack:+2)',
    apply: deck => [...remove(deck)(CARD.POS1, CARD.POS1), CARD.POS2, CARD.POS2],
  },
};

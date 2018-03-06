import { default as Attack } from './Attack';
import { default as Augment } from './Augment';
import { default as Bless } from './Bless';
import { default as Command } from './Command';
import { default as ConsumeElements } from './ConsumeElements';
import { default as Curse } from './Curse';
import { default as Disarm } from './Disarm';
import { default as ElementAir } from './ElementAir';
import { default as ElementAirConsume } from './ElementAirConsume';
import { default as ElementAny } from './ElementAny';
import { default as ElementAnyConsume } from './ElementAnyConsume';
import { default as ElementDark } from './ElementDark';
import { default as ElementDarkConsume } from './ElementDarkConsume';
import { default as ElementEarth } from './ElementEarth';
import { default as ElementEarthConsume } from './ElementEarthConsume';
import { default as ElementFire } from './ElementFire';
import { default as ElementFireConsume } from './ElementFireConsume';
import { default as ElementIce } from './ElementIce';
import { default as ElementIceConsume } from './ElementIceConsume';
import { default as ElementLight } from './ElementLight';
import { default as ElementLightConsume } from './ElementLightConsume';
import { default as Flying } from './Flying';
import { default as Fragment } from './Fragment';
import { default as Heal } from './Heal';
import { default as HexPattern } from './HexPattern';
import { default as Immobilize } from './Immobilize';
import { default as Invisible } from './Invisible';
import { default as Jump } from './Jump';
import { default as Loot } from './Loot';
import { default as ModifyAttack } from './ModifyAttack';
import { default as ModifyHeal } from './ModifyHeal';
import { default as ModifyMove } from './ModifyMove';
import { default as ModifyRange } from './ModifyRange';
import { default as ModifyRetaliate } from './ModifyRetaliate';
import { default as ModifyShield } from './ModifyShield';
import { default as Move } from './Move';
import { default as Muddle } from './Muddle';
import { default as Note } from './Note';
import { default as Persistent } from './Persistent';
import { default as Pierce } from './Pierce';
import { default as Poison } from './Poison';
import { default as Pull } from './Pull';
import { default as Push } from './Push';
import { default as Range } from './Range';
import { default as Retaliate } from './Retaliate';
import { default as Round } from './Round';
import { default as Shield } from './Shield';
import { default as Song } from './Song';
import { default as Strengthen } from './Strengthen';
import { default as Stun } from './Stun';
import { default as Summon } from './Summon';
import { default as Symbols } from './Symbols';
import { default as Target } from './Target';
import { default as Wound } from './Wound';
import { default as XP } from './XP';

import { ABILITY_CARD_ACTION as ACTION } from '../../../constants';

export default {
  [ACTION.ATTACK]: Attack,
  [ACTION.AUGMENT]: Augment,
  [ACTION.BLESS]: Bless,
  [ACTION.COMMAND]: Command,
  [ACTION.CONSUME_ELEMENTS]: ConsumeElements,
  [ACTION.CURSE]: Curse,
  [ACTION.DISARM]: Disarm,
  [ACTION.ELEMENT_AIR]: ElementAir,
  [ACTION.ELEMENT_AIR_CONSUME]: ElementAirConsume,
  [ACTION.ELEMENT_ANY]: ElementAny,
  [ACTION.ELEMENT_ANY_CONSUME]: ElementAnyConsume,
  [ACTION.ELEMENT_DARK]: ElementDark,
  [ACTION.ELEMENT_DARK_CONSUME]: ElementDarkConsume,
  [ACTION.ELEMENT_EARTH]: ElementEarth,
  [ACTION.ELEMENT_EARTH_CONSUME]: ElementEarthConsume,
  [ACTION.ELEMENT_FIRE]: ElementFire,
  [ACTION.ELEMENT_FIRE_CONSUME]: ElementFireConsume,
  [ACTION.ELEMENT_ICE]: ElementIce,
  [ACTION.ELEMENT_ICE_CONSUME]: ElementIceConsume,
  [ACTION.ELEMENT_LIGHT]: ElementLight,
  [ACTION.ELEMENT_LIGHT_CONSUME]: ElementLightConsume,
  [ACTION.FLYING]: Flying,
  [ACTION.FRAGMENT]: Fragment,
  [ACTION.HEAL]: Heal,
  [ACTION.HEX_PATTERN]: HexPattern,
  [ACTION.IMMOBILIZE]: Immobilize,
  [ACTION.INVISIBLE]: Invisible,
  [ACTION.JUMP]: Jump,
  [ACTION.LOOT]: Loot,
  [ACTION.MODIFY_ATTACK]: ModifyAttack,
  [ACTION.MODIFY_HEAL]: ModifyHeal,
  [ACTION.MODIFY_MOVE]: ModifyMove,
  [ACTION.MODIFY_RANGE]: ModifyRange,
  [ACTION.MODIFY_RETALIATE]: ModifyRetaliate,
  [ACTION.MODIFY_SHIELD]: ModifyShield,
  [ACTION.MOVE]: Move,
  [ACTION.MUDDLE]: Muddle,
  [ACTION.NOTE]: Note,
  [ACTION.PERSISTENT]: Persistent,
  [ACTION.PIERCE]: Pierce,
  [ACTION.POISON]: Poison,
  [ACTION.PULL]: Pull,
  [ACTION.PUSH]: Push,
  [ACTION.RANGE]: Range,
  [ACTION.RETALIATE]: Retaliate,
  [ACTION.ROUND]: Round,
  [ACTION.SHIELD]: Shield,
  [ACTION.SONG]: Song,
  [ACTION.STRENGTHEN]: Strengthen,
  [ACTION.STUN]: Stun,
  [ACTION.SUMMON]: Summon,
  [ACTION.SYMBOLS]: Symbols,
  [ACTION.TARGET]: Target,
  [ACTION.WOUND]: Wound,
  [ACTION.XP]: XP,
};

import { default as Available } from './Available';
import { default as Plus1 } from './Plus1';
import { default as EffectPoison } from './EffectPoison';
import { default as EffectWound } from './EffectWound';
import { default as EffectMuddle } from './EffectMuddle';
import { default as EffectImmobilize } from './EffectImmobilize';
import { default as EffectDisarm } from './EffectDisarm';
import { default as EffectCurse } from './EffectCurse';
import { default as EffectStrengthen } from './EffectStrengthen';
import { default as EffectBless } from './EffectBless';
import { default as Jump } from './Jump';
import { default as ElementAir } from './ElementAir';
import { default as ElementIce } from './ElementIce';
import { default as ElementFire } from './ElementFire';
import { default as ElementLight } from './ElementLight';
import { default as ElementDark } from './ElementDark';
import { default as ElementEarth } from './ElementEarth';
import { default as ElementAny } from './ElementAny';
import { default as Hex } from './Hex';

import { AUGMENT } from '../../../constants';

export default {
  [AUGMENT.AVAILABLE]: Available,
  [AUGMENT.PLUS1]: Plus1,
  [AUGMENT.EFFECT_POISON]: EffectPoison,
  [AUGMENT.EFFECT_WOUND]: EffectWound,
  [AUGMENT.EFFECT_MUDDLE]: EffectMuddle,
  [AUGMENT.EFFECT_IMMOBILIZE]: EffectImmobilize,
  [AUGMENT.EFFECT_DISARM]: EffectDisarm,
  [AUGMENT.EFFECT_CURSE]: EffectCurse,
  [AUGMENT.EFFECT_STRENGTHEN]: EffectStrengthen,
  [AUGMENT.EFFECT_BLESS]: EffectBless,
  [AUGMENT.JUMP]: Jump,
  [AUGMENT.ELEMENT_AIR]: ElementAir,
  [AUGMENT.ELEMENT_ICE]: ElementIce,
  [AUGMENT.ELEMENT_FIRE]: ElementFire,
  [AUGMENT.ELEMENT_LIGHT]: ElementLight,
  [AUGMENT.ELEMENT_DARK]: ElementDark,
  [AUGMENT.ELEMENT_EARTH]: ElementEarth,
  [AUGMENT.ELEMENT_ANY]: ElementAny,
  [AUGMENT.HEX]: Hex,
};

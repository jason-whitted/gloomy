import { AUGMENT, AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SUMMON } from '../../../SUMMON';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  233: {
    id: 233,
    class: CLASS.SUMMONER,
    name: 'Summon Iron Beast',
    level: 1,
    initiative: 96,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.IRON_BEAST },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect self and all summoned allies' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  234: {
    id: 234,
    class: CLASS.SUMMONER,
    name: 'Wild Animation',
    level: 1,
    initiative: 92,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC, top: true },
      5: { id: 5, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.THORN_SHOOTER },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [5] }, { action: ACTION.ELEMENT_AIR }],
    },
  },
  235: {
    id: 235,
    class: CLASS.SUMMONER,
    name: 'Living Night',
    level: 1,
    initiative: 82,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.SHADOW_WOLVES },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All attacks targeting you\nand your summoned allies this\nround gain disadvantage.',
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  236: {
    id: 236,
    class: CLASS.SUMMONER,
    name: 'Unending Dominance',
    level: 1,
    initiative: 98,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, type: AUGMENT.ELEMENT_FIRE, readonly: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.LAVA_GOLEM },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 4, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
      noRecover: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Recover (Symbol:Recover) up to four of your lost cards.', className: 'small' },
      ],
      consumed: true,
      noRecover: true,
    },
  },
  237: {
    id: 237,
    class: CLASS.SUMMONER,
    name: 'Unwavering Hand',
    level: 1,
    initiative: 31,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Force one enemy with Range (Symbol:Range)4 to perform', className: 'small' },
        {
          action: ACTION.MOVE,
          value: 1,
          bonuses: [{ action: ACTION.NOTE, value: 'with you controlling the action.' }],
        },
      ],
    },
  },
  238: {
    id: 238,
    class: CLASS.SUMMONER,
    name: 'Mighty Bond',
    level: 1,
    initiative: 51,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent summoned ally performs', className: 'small' },
        { action: ACTION.MOVE, value: '+ 0' },
        { action: ACTION.ATTACK, value: '+ 0' },
        { action: ACTION.NOTE, value: 'with you controlling the action.', className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.JUMP }],
        },
      ],
    },
  },
  239: {
    id: 239,
    class: CLASS.SUMMONER,
    name: 'Bonded Might',
    level: 1,
    initiative: 61,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent summoned ally performs', className: 'small' },
        { action: ACTION.MOVE, value: '+ 0' },
        { action: ACTION.ATTACK, value: '+ 0' },
        { action: ACTION.NOTE, value: 'with you controlling the action.', className: 'small' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
  },
  240: {
    id: 240,
    class: CLASS.SUMMONER,
    name: 'Biting Wind',
    level: 1,
    initiative: 25,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }],
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), PUSH (Effect:Push)2, (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
      ],
    },
  },
  241: {
    id: 241,
    class: CLASS.SUMMONER,
    name: 'Black Fire',
    level: 1,
    initiative: 24,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 5 }, { action: ACTION.TARGET, value: 2, augments: [2] }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'WOUND (Effect:Wound), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.MUDDLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
  242: {
    id: 242,
    class: CLASS.SUMMONER,
    name: 'Leathery Wings',
    level: 0,
    initiative: 90,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, type: AUGMENT.ELEMENT_AIR, readonly: true },
      4: { id: 4, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.BAT_SWARM },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.STRENGTHEN,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }],
        },
      ],
    },
  },
  243: {
    id: 243,
    class: CLASS.SUMMONER,
    name: 'Volatile Flame',
    level: 0,
    initiative: 94,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.LIVING_BOMB },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        { action: ACTION.ELEMENT_FIRE },
      ],
    },
  },
  244: {
    id: 244,
    class: CLASS.SUMMONER,
    name: 'Ethereal Vines',
    level: 0,
    initiative: 30,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.IMMOBILIZE }],
          className: 'w-50 ml-3',
        },
        { action: ACTION.HEX_PATTERN, value: 'R2R6R', className: 'w-100', pos: { x: '60%', y: '10%', w: 70, h: 70 } },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
        {
          action: ACTION.HEAL,
          value: 1,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent summoned allies' }],
        },
      ],
    },
  },
  245: {
    id: 245,
    class: CLASS.SUMMONER,
    name: 'Earthen Steed',
    level: 2,
    initiative: 13,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `On any of your or your summoned
                  allies' Move actions, you may (Element:Earth:Consume)
                  to add +2 Move (Symbol:Move) and gain (XP:1).`,
          className: 'small',
        },
        { action: ACTION.PERSISTENT, className: 'mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 5,
          augments: [1],
          bonuses: [{ action: ACTION.JUMP }],
        },
      ],
    },
  },
  246: {
    id: 246,
    class: CLASS.SUMMONER,
    name: 'Grasping the Void',
    level: 2,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.CURSE }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'STUN (Effect:Stun), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  247: {
    id: 247,
    class: CLASS.SUMMONER,
    name: 'Tear the Fabric',
    level: 3,
    initiative: 41,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Kill all normal adjacent enemies
                  whose current hit point value is
                  equal to or less than 5.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [1, 2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_HEAL, value: 2 }],
          className: 'mt-0',
        },
      ],
    },
  },
  248: {
    id: 248,
    class: CLASS.SUMMONER,
    name: 'Oozing Manifestation',
    level: 3,
    initiative: 86,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.SLIME_SPIRIT },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [4],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.IMMOBILIZE }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'CURSE (Effect:Curse), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
  },
  249: {
    id: 249,
    class: CLASS.SUMMONER,
    name: 'Living Mountain',
    level: 4,
    initiative: 88,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, type: AUGMENT.ELEMENT_EARTH, readonly: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.ROCK_COLOSSUS },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [4] }, { action: ACTION.LOOT, value: 1 }],
    },
  },
  250: {
    id: 250,
    class: CLASS.SUMMONER,
    name: 'Divided Mind',
    level: 4,
    initiative: 55,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Two summoned allies\nwithin Range (Symbol:Range)2 perform', className: 'small' },
        { action: ACTION.MOVE, value: '+ 0' },
        { action: ACTION.NOTE, value: 'with you controlling the actions.', className: 'small' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Two summoned allies\nwithin Range (Symbol:Range)2 perform', className: 'small' },
        { action: ACTION.ATTACK, value: '+ 0' },
        { action: ACTION.NOTE, value: 'with you controlling the actions.', className: 'small' },
      ],
    },
  },
  251: {
    id: 251,
    class: CLASS.SUMMONER,
    name: 'Strength in Numbers',
    level: 5,
    initiative: 45,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent summoned ally performs', className: 'small' },
        { action: ACTION.MOVE, value: '+ 1' },
        { action: ACTION.ATTACK, value: '+ 1' },
        { action: ACTION.NOTE, value: 'with you controlling the actions.', className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 'X',
          bonuses: [
            { action: ACTION.RANGE, value: 'X' },
            { action: ACTION.NOTE, value: 'where X is the number of\nactive summoned allies.' },
          ],
        },
      ],
    },
  },
  252: {
    id: 252,
    class: CLASS.SUMMONER,
    name: 'Conjured Aid',
    level: 5,
    initiative: 81,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.HEALING_SPRITE },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [4] }],
    },
  },
  253: {
    id: 253,
    class: CLASS.SUMMONER,
    name: 'Endless Spikes',
    level: 6,
    initiative: 97,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.NAIL_SPHERES },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 2,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all summoned allies' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  254: {
    id: 254,
    class: CLASS.SUMMONER,
    name: 'Inexorable Momentum',
    level: 6,
    initiative: 32,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.PIERCE, value: 3, augments: [2] }],
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_ATTACK, value: 2 }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        { action: ACTION.NOTE, value: 'One adjacent summoned ally performs', className: 'small' },
        { action: ACTION.MOVE, value: 3, augments: [4] },
      ],
    },
  },
  255: {
    id: 255,
    class: CLASS.SUMMONER,
    name: 'Negative Energy',
    level: 7,
    initiative: 95,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.VOID_EATER },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.CURSE,
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies adjacent\nto any summoned ally' },

            { action: ACTION.ELEMENT_DARK },
          ],
        },
      ],
    },
  },
  256: {
    id: 256,
    class: CLASS.SUMMONER,
    name: 'Staff of Visions',
    level: 7,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1, 2],
          bonuses: [{ action: ACTION.MUDDLE }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), WOUND (Symbol:Wound), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.STRENGTHEN,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }],
        },
      ],
    },
  },
  257: {
    id: 257,
    class: CLASS.SUMMONER,
    name: 'Intervening Apparitions',
    level: 8,
    initiative: 68,
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'The next three times summoned allies\nsuffer damage, negate the damage.',
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.CONSUMED,
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Remove all CURSE (Effect:Curse) cards from your
                  attack modifier deck, and then shuffle
                  the discard pile back into the deck.`,
          className: 'small',
        },
        { action: ACTION.ELEMENT_LIGHT },
      ],
    },
  },
  258: {
    id: 258,
    class: CLASS.SUMMONER,
    name: 'Otherworldly Rage',
    level: 8,
    initiative: 35,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One summoned ally within\nRange (Symbol:Range)3 performs', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: '+ 2',
          bonuses: [{ action: ACTION.WOUND }, { action: ACTION.POISON }],
        },
        { action: ACTION.NOTE, value: 'with you controlling the action.', className: 'small' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Swap your position with\nany one summoned ally.', className: 'small' },
        { action: ACTION.MOVE, value: 3, augments: [1] },
      ],
    },
  },
  259: {
    id: 259,
    class: CLASS.SUMMONER,
    name: 'Interplanar Mastery',
    level: 9,
    initiative: 22,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Recover (Symbol:Recover) up to two of your lost cards.', className: 'small' },
      ],
      consumed: true,
      noRecover: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 6,
          augments: [1],
          bonuses: [{ action: ACTION.JUMP }],
        },
      ],
    },
  },
  260: {
    id: 260,
    class: CLASS.SUMMONER,
    name: 'Horned Majesty',
    level: 9,
    initiative: 80,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.BLACK_UNICORN },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All summoned allies within Range (Symbol:Range)3 perform', className: 'small' },
        { action: ACTION.MOVE, value: '+ 0' },
        { action: ACTION.NOTE, value: 'with you controlling the actions.', className: 'small' },
      ],
    },
  },
};

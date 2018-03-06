import { AUGMENT, AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SUMMON } from '../../../SUMMON';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  61: {
    id: 61,
    class: CLASS.SPELLWEAVER,
    name: 'Fire Orbs',
    level: 1,
    initiative: 69,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [2] },
            { action: ACTION.TARGET, value: 3, augments: [3] },
            { action: ACTION.NOTE, value: 'Gain (XP:1) for each enemy targeted.' },
          ],
        },
        { action: ACTION.ELEMENT_FIRE, className: 'mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [4] }],
    },
  },
  62: {
    id: 62,
    class: CLASS.SPELLWEAVER,
    name: 'Impaling Eruption',
    level: 1,
    initiative: 70,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 4, augments: [2] },
            {
              action: ACTION.NOTE,
              value: `Additionally, target all enemies
                      on the path to the primary target
                      Gain (XP:1) for each enemy targeted.`,
            },
          ],
        },
        { action: ACTION.ELEMENT_EARTH, className: 'mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  63: {
    id: 63,
    class: CLASS.SPELLWEAVER,
    name: 'Reviving Ether',
    level: 1,
    initiative: 80,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Recover (Symbol:Recover) all your lost cards.', className: 'small' },
        { action: ACTION.ELEMENT_DARK, className: 'mt-0' },
      ],
      consumed: true,
      noRecover: true,
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
  64: {
    id: 64,
    class: CLASS.SPELLWEAVER,
    name: 'Freezing Nova',
    level: 1,
    initiative: 21,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }, { action: ACTION.IMMOBILIZE }],
        },
        { action: ACTION.ELEMENT_ICE_CONSUME, condition: true, bonuses: [{ action: ACTION.MODIFY_ATTACK, value: 1 }] },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [2, 3],
          bonuses: [{ action: ACTION.RANGE, value: 4 }],
        },
        { action: ACTION.ELEMENT_LIGHT },
      ],
      consumed: true,
    },
  },
  65: {
    id: 65,
    class: CLASS.SPELLWEAVER,
    name: 'Mana Bolt',
    level: 1,
    initiative: 7,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.MODIFY_ATTACK, value: 1, className: 'd-inline-block' },
            { action: ACTION.NOTE, value: ', ', className: 'd-inline-block' },
            { action: ACTION.XP, value: 1, className: 'd-inline-block', style: { fontSize: '1.25em' } },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 1, augments: [3] }],
        },
      ],
    },
  },
  66: {
    id: 66,
    class: CLASS.SPELLWEAVER,
    name: 'Frost Armor',
    level: 1,
    initiative: 20,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.MODIFY_ATTACK, value: 1, className: 'd-inline-block' },
            { action: ACTION.NOTE, value: ', ', className: 'd-inline-block' },
            { action: ACTION.XP, value: 1, className: 'd-inline-block', style: { fontSize: '1.25em' } },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'On the next two sources of damage\non you, suffer no damage instead.',
          className: 'small',
        },
        { action: ACTION.ELEMENT_ICE, className: 'mt-0' },
        {
          action: ACTION.SYMBOLS,
          symbols: [SYMBOL.PERSISTENT, SYMBOL.USE_SLOT_GAIN_XP_1, SYMBOL.USE_SLOT_GAIN_XP_1, SYMBOL.CONSUMED],
          className: 'mt-0',
        },
      ],
    },
  },
  67: {
    id: 67,
    class: CLASS.SPELLWEAVER,
    name: 'Flame Strike',
    level: 1,
    initiative: 36,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [1] }],
        },
        { action: ACTION.ELEMENT_FIRE_CONSUME, condition: true, bonuses: [{ action: ACTION.WOUND }] },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [3] }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  68: {
    id: 68,
    class: CLASS.SPELLWEAVER,
    name: 'Ride the Wind',
    level: 1,
    initiative: 83,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 8,
          augments: [1],
          bonuses: [{ action: ACTION.JUMP }],
        },
        { action: ACTION.ELEMENT_AIR, className: 'mt-0' },
      ],
      consumed: true,
    },
  },
  69: {
    id: 69,
    class: CLASS.SPELLWEAVER,
    name: 'Crackling Air',
    level: 0,
    initiative: 25,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'On your next four attacks, add +1 Attack (Symbol:Attack).', className: 'small' },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Add +2 Attack (Symbol:Attack) instead' }],
          className: 'mt-0',
        },
        {
          action: ACTION.SYMBOLS,
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.CONSUMED,
          ],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.RETALIATE,
              value: 2,
              bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
              className: 'd-inline-block',
            },
            { action: ACTION.ROUND, className: 'd-inline-block ml-1' },
          ],
        },
      ],
    },
  },
  70: {
    id: 70,
    class: CLASS.SPELLWEAVER,
    name: 'Hardened Spikes',
    level: 0,
    initiative: 26,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect self and all adjacent allies' }],
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_RETALIATE, value: 1 }],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.ROUND, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.SHIELD,
              value: 2,
              bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
              className: 'd-inline-block',
            },
            { action: ACTION.ROUND, className: 'd-inline-block pl-1' },
          ],
        },
      ],
    },
  },
  71: {
    id: 71,
    class: CLASS.SPELLWEAVER,
    name: 'Aid from the Ether',
    level: 0,
    initiative: 91,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC },
      5: { id: 5, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.MYSTIC_ALLY },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
  },
  72: {
    id: 72,
    class: CLASS.SPELLWEAVER,
    name: 'Flashing Burst',
    level: 2,
    initiative: 26,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }],
        },
        { action: ACTION.ELEMENT_LIGHT, className: 'mt-0' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  73: {
    id: 73,
    class: CLASS.SPELLWEAVER,
    name: 'Icy Blast',
    level: 2,
    initiative: 66,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.MUDDLE },
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 2, className: 'd-inline-block mx-1 large' },
          ],
          className: 'w-50 ml-2',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R6R2R3R4R5R6R',
          className: 'w-100',
          pos: { x: '52%', y: 0, w: 90, h: 90 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 6,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [3] }],
        },
      ],
      consumed: true,
    },
  },
  74: {
    id: 74,
    class: CLASS.SPELLWEAVER,
    name: 'Cold Fire',
    level: 3,
    initiative: 67,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          style: { marginLeft: -80 },
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_ATTACK, value: 2 }],
          style: { marginLeft: -80, marginTop: 0 },
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.STUN }],
          style: { marginLeft: -80, marginTop: 0 },
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [1],
          className: 'w-100',
          pos: { x: '55%', y: '10%', w: 80, h: 80 },
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 2 }],
      consumed: true,
    },
  },
  75: {
    id: 75,
    class: CLASS.SPELLWEAVER,
    name: 'Elemental Aid',
    level: 3,
    initiative: 84,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [2] }],
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Heal (Symbol:Heal), (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 2,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect any one ally' }],
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all allies instead' }],
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  76: {
    id: 76,
    class: CLASS.SPELLWEAVER,
    name: 'Spirit of Doom',
    level: 4,
    initiative: 81,
    top: {
      actions: [
        { action: ACTION.CURSE, bonuses: [{ action: ACTION.RANGE, value: 4 }] },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Kill a normal target of\nthe ability instead, (XP:1)' }],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 'X',
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Affect any one ally
                      where X is half of that ally's maximum
                      hit point value (rounded down).`,
            },
          ],
        },
        { action: ACTION.XP, value: 1, className: 'large', pos: { x: '80%', y: -3 } },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: "X is that ally's maximum\nhit point value instead" }],
        },
      ],
      consumed: true,
    },
  },
  77: {
    id: 77,
    class: CLASS.SPELLWEAVER,
    name: 'Forked Beam',
    level: 4,
    initiative: 20,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.TARGET, value: 2, augments: [2] },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  78: {
    id: 78,
    class: CLASS.SPELLWEAVER,
    name: 'Chromatic Explosion',
    level: 5,
    initiative: 71,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.ELEMENT_AIR, className: 'd-inline-block w-33 mx-1' },
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block w-33 mx-1' },
            { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block w-33 mx-1' },
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block w-33 mx-1' },
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block w-33 mx-1' },
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block w-33 mx-1' },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
          className: 'w-50 ml-2',
        },
        { action: ACTION.HEX_PATTERN, value: 'R2R6R', pos: { x: '60%', y: '9%', w: 60, h: 60 }, className: 'w-100' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [2] }, { action: ACTION.ELEMENT_ANY }],
    },
  },
  79: {
    id: 79,
    class: CLASS.SPELLWEAVER,
    name: 'Engulfed in Flames',
    level: 5,
    initiative: 44,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }, { action: ACTION.ELEMENT_FIRE }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'On the next five melee attacks\ntargeting you, gain Retaliate (Symbol:Retaliate) 3.',
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.CONSUMED,
          ],
        },
      ],
    },
  },
  80: {
    id: 80,
    class: CLASS.SPELLWEAVER,
    name: 'Living Torch',
    level: 6,
    initiative: 96,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC, type: AUGMENT.ELEMENT_FIRE, readonly: true },
      5: { id: 5, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.IMMOBILIZE }],
        },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'All enemies adjacent to the\ntarget suffer 2 damage, (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.BURNING_AVATAR },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
  },
  81: {
    id: 81,
    class: CLASS.SPELLWEAVER,
    name: 'Frozen Night',
    level: 6,
    initiative: 46,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.HEX, top: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Gain (XP:1) for each enemy targeted.' },
            { action: ACTION.ELEMENT_ICE },
          ],
          className: 'w-50 ml-2',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G2R2R6R5R1R2A3A',
          augments: [2, 3],
          className: 'w-100',
          pos: { x: '55%', y: '5%', w: 90, h: 90 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [4] },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.MODIFY_MOVE,
              value: 2,
              bonuses: [
                {
                  action: ACTION.INVISIBLE,
                  bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
                  style: { fontSize: '1em' },
                },
              ],
              className: 'd-inline-block',
            },
            {
              action: ACTION.XP,
              value: 1,
              className: 'd-inline-block position-relative',
              style: { fontSize: '1.5rem', top: -5 },
            },
          ],
        },
      ],
    },
  },
  82: {
    id: 82,
    class: CLASS.SPELLWEAVER,
    name: 'Twin Restoration',
    level: 7,
    initiative: 75,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, multiple: true },
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
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.TARGET, value: 2, augments: [2] }],
        },
      ],
    },
  },
  83: {
    id: 83,
    class: CLASS.SPELLWEAVER,
    name: 'Stone Fists',
    level: 7,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 6,
          bonuses: [{ action: ACTION.PUSH, value: 2, augments: [1] }, { action: ACTION.IMMOBILIZE }],
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Target (Symbol:Target) 2, (XP:1)' }],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 2, className: 'large mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        { action: ACTION.SHIELD, value: 1, augments: [3] },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.MODIFY_MOVE, value: 1, className: 'd-inline-block' },
            { action: ACTION.NOTE, value: ', ', className: 'd-inline-block' },
            { action: ACTION.MODIFY_SHIELD, value: 1, className: 'd-inline-block' },
            { action: ACTION.NOTE, value: ', ', className: 'd-inline-block' },
            { action: ACTION.XP, value: 1, style: { fontSize: '1.5em' }, className: 'd-inline-block' },
          ],
          className: 'mt-0',
        },
        { action: ACTION.ROUND, className: 'mt-0' },
      ],
    },
  },
  84: {
    id: 84,
    class: CLASS.SPELLWEAVER,
    name: 'Zephyr Wings',
    level: 8,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.LOOT, value: 2 },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Loot (Symbol:Loot) 3 instead, (XP:1)' }],
        },
        {
          action: ACTION.NOTE,
          value: 'You may not loot more than four money\ntokens or treasure tiles with this action',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 8,
          augments: [1, 2],
          bonuses: [{ action: ACTION.JUMP }],
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+3 Move (Symbol:Move), (XP:1)' }],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 1, className: 'large mt-0' },
      ],
      consumed: true,
    },
  },
  85: {
    id: 85,
    class: CLASS.SPELLWEAVER,
    name: 'Cold Front',
    level: 8,
    initiative: 61,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 2, augments: [2] },
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
          ],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R1R1R1R1R',
          className: 'w-100',
          pos: { x: '58%', y: -10, w: 75, h: 100 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `On the next three sources of damage
                 from attacks targeting you, suffer no damage
                 instead and gain Retaliate (Symbol:Retaliate) 3, Range (Symbol:Range) 3.`,
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
  },
  86: {
    id: 86,
    class: CLASS.SPELLWEAVER,
    name: 'Black Hole',
    level: 9,
    initiative: 41,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.NOTE, value: 'Gain (XP:1) for each\nenemy targeted.' },
          ],
          className: 'w-75',
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Kill all normal enemies\nin the targeted area.' }],
          style: { marginLeft: -60 },
        },
        { action: ACTION.HEX_PATTERN, value: 'R2R6R', className: 'w-100', pos: { x: '70%', y: '8%', w: 60, h: 60 } },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Choose a hex within Range (Symbol:Range) 4.', className: 'small' },
        {
          action: ACTION.PULL,
          value: 2,
          augments: [1],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Target all enemies within
                      Range (Symbol:Range) 4 of the chosen hex
                      and pull them toward it`,
            },
          ],
        },
      ],
    },
  },
  87: {
    id: 87,
    class: CLASS.SPELLWEAVER,
    name: 'Inferno',
    level: 9,
    initiative: 19,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies in the same room as you.' }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), (XP:1)' }],
        },
        { action: ACTION.NOTE, value: 'All allies in the same room\nas you suffer 2 damage.', className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.NOTE, value: 'Affect self and all allies' },
            { action: ACTION.ROUND },
          ],
        },
      ],
    },
  },
};

import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { ELEMENT } from '../../../ELEMENT';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  261: {
    id: 261,
    class: CLASS.NIGHTSHROUD,
    name: 'Black Knives',
    level: 1,
    initiative: 44,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `During your next four Attack actions while
                  INVISIBLE (Effect:Invisible), perform an "Attack (Symbol:Attack)2",
                  Range (Symbol:Range)3" as the final part of the action.`,
          style: { fontSize: '0.75em', lineHeight: '1em' },
        },
        {
          action: ACTION.SYMBOLS,
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.CONSUMED,
          ],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [{ action: ACTION.MUDDLE }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
  },
  262: {
    id: 262,
    class: CLASS.NIGHTSHROUD,
    name: 'Cloak of Shade',
    level: 1,
    initiative: 13,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1, 2],
          bonuses: [{ action: ACTION.ELEMENT_DARK }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3 },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.INVISIBLE,
              bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
              className: 'd-inline-block',
            },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block' },
          ],
          className: 'mt-0',
        },
      ],
    },
  },
  263: {
    id: 263,
    class: CLASS.NIGHTSHROUD,
    name: 'Empowering Void',
    level: 1,
    initiative: 21,
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 2 },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add +2 Attack (Symbol:Attack) and double the
                      value of all Move abilities played
                      during the remainder of this turn,(XP:1)`,
              style: { fontSize: '0.75em' },
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add +2 Move (Symbol:Move) and double the
                      value of all Move abilities played
                      during the remainder of this turn,(XP:1)`,
              style: { fontSize: '0.75em' },
            },
          ],
        },
      ],
    },
  },
  264: {
    id: 264,
    class: CLASS.NIGHTSHROUD,
    name: 'Doomed Breeze',
    level: 1,
    initiative: 15,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }, { action: ACTION.MUDDLE }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3 },
        {
          action: ACTION.CURSE,
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  265: {
    id: 265,
    class: CLASS.NIGHTSHROUD,
    name: 'Enervating Wound',
    level: 1,
    initiative: 77,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.WOUND }],
        },
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4 }],
    },
  },
  266: {
    id: 266,
    class: CLASS.NIGHTSHROUD,
    name: 'Spirit of the Night',
    level: 1,
    initiative: 84,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 3 },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Kill one normal\ntarget instead, (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 6, augments: [1, 2] },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  267: {
    id: 267,
    class: CLASS.NIGHTSHROUD,
    name: 'Dancing Shadows',
    level: 1,
    initiative: 9,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.ATTACK, value: 1 }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All attacks targeting you\ngain Disadvantage this round.', className: 'small' },
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
  268: {
    id: 268,
    class: CLASS.NIGHTSHROUD,
    name: 'Silent Force',
    level: 1,
    initiative: 91,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Add +2 Attack (Symbol:Attack) and gain (XP:1)\nif you are INVISIBLE (Effect:Invisible)',
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 6, augments: [1] }, { action: ACTION.LOOT, value: 1 }],
      consumed: true,
    },
  },
  269: {
    id: 269,
    class: CLASS.NIGHTSHROUD,
    name: 'Smoke Step',
    level: 1,
    initiative: 28,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.MOVE, value: 1 },
        { action: ACTION.ATTACK, value: 2 },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Move (Symbol:Move), +2 Attack (Symbol:Attack), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 1, augments: [1, 2] }, { action: ACTION.ELEMENT_DARK }],
    },
  },
  270: {
    id: 270,
    class: CLASS.NIGHTSHROUD,
    name: 'Wings of the Night',
    level: 0,
    initiative: 24,
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 1 },
        {
          action: ACTION.INVISIBLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'Before your next four Attack actions,\nperform a "Move (Symbol:Move)2" action.',
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.CONSUMED,
          ],
        },
      ],
    },
  },
  271: {
    id: 271,
    class: CLASS.NIGHTSHROUD,
    name: 'Concealed Dominance',
    level: 0,
    initiative: 35,
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 4 },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.HEX_PATTERN,
              value: 'G1R2R3R4R5R1R',
              className: 'w-100',
              style: { width: 80, display: 'inline-block' },
            },
            { action: ACTION.XP, value: 2, className: 'large position-absolute', style: { top: '33%', right: '10%' } },
          ],
          className: 'mt-0 position-relative',
          style: { marginLeft: -20 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4 },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Move to any unoccupied hex not\nthrough a closed door instead.' }],
          className: 'mt-0',
        },
      ],
      consumed: true,
    },
  },
  272: {
    id: 272,
    class: CLASS.NIGHTSHROUD,
    name: 'Dark Cloud',
    level: 0,
    initiative: 74,
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [{ action: ACTION.CURSE }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MUDDLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
        { action: ACTION.ELEMENT_DARK },
      ],
    },
  },
  273: {
    id: 273,
    class: CLASS.NIGHTSHROUD,
    name: 'Prepare for the Kill',
    level: 2,
    initiative: 7,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [{ action: ACTION.ATTACK, value: 2, augments: [1, 2] }, { action: ACTION.ELEMENT_DARK }],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [3, 4] }, { action: ACTION.ELEMENT_DARK }],
    },
  },
  274: {
    id: 274,
    class: CLASS.NIGHTSHROUD,
    name: 'Soulfire',
    level: 2,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [1] }, { action: ACTION.WOUND }],
        },
        {
          action: ACTION.NOTE,
          value: 'Add STUN (Effect:Stun) and gain (XP:1)\nif you are INVISIBLE (Effect:Invisible)',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 6,
          augments: [2, 3],
          bonuses: [{ action: ACTION.CURSE }],
        },
      ],
      consumed: true,
    },
  },
  275: {
    id: 275,
    class: CLASS.NIGHTSHROUD,
    name: 'Terror Blade',
    level: 3,
    initiative: 17,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [{ action: ACTION.PUSH, value: 3, augments: [1] }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4 },
        { action: ACTION.NOTE, value: 'All attacks targeting you\ngain Disadvantage this round.', className: 'small' },
        { action: ACTION.ROUND },
      ],
    },
  },
  276: {
    id: 276,
    class: CLASS.NIGHTSHROUD,
    name: 'Armor of the Night',
    level: 3,
    initiative: 23,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 4 },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.HEAL,
              value: 4,
              bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
              className: 'd-inline-block',
            },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [1, 2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
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
  277: {
    id: 277,
    class: CLASS.NIGHTSHROUD,
    name: 'Nightfall',
    level: 4,
    initiative: 73,
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'At the end of your next three turns\nwhere (Element:Dark) is not Strong, generate (Element:Dark).',
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
        { action: ACTION.MOVE, value: 3 },
        { action: ACTION.ATTACK, value: 2 },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), (Element:Dark), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
  },
  278: {
    id: 278,
    class: CLASS.NIGHTSHROUD,
    name: 'Grim Sustenance',
    level: 4,
    initiative: 29,
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Add +2 Attack (Symbol:Attack) and gain (XP:1)\nif you are INVISIBLE (Effect:Invisible)',
            },
          ],
        },
        {
          action: ACTION.INVISIBLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }, { action: ACTION.ELEMENT_DARK }],
    },
  },
  279: {
    id: 279,
    class: CLASS.NIGHTSHROUD,
    name: 'Claws of the Night',
    level: 5,
    initiative: 26,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.POISON }],
          className: 'w-75',
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), (Element:Dark), (XP:1)' }],
          className: 'mt-0 w-75',
        },
        { action: ACTION.HEX_PATTERN, value: 'G2R6R', className: 'w-100', pos: { x: '70%', y: -5, w: 60, h: 60 } },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `During your next four Move actions while
                  INVISIBLE (Effect:Invisible), perform an "Attack (Symbol:Attack)2, Target all
                  adjecent enemies" as the final part of the action.`,
          style: { fontSize: '0.71em', lineHeight: '1em' },
        },
        {
          action: ACTION.SYMBOLS,
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.CONSUMED,
          ],
          className: 'mt-0',
        },
      ],
    },
  },
  280: {
    id: 280,
    class: CLASS.NIGHTSHROUD,
    name: 'Black Arrow',
    level: 5,
    initiative: 11,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          bonuses: [
            { action: ACTION.RANGE, value: 4, augments: [1] },
            { action: ACTION.MUDDLE },
            { action: ACTION.CURSE },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.INVISIBLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.ATTACK,
              value: 3,
              bonuses: [{ action: ACTION.RANGE, value: 3 }],
              className: 'd-inline-block',
            },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block' },
          ],
          className: 'mt-0',
        },
      ],
    },
  },
  281: {
    id: 281,
    class: CLASS.NIGHTSHROUD,
    name: 'Unseen Dread',
    level: 6,
    initiative: 5,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [{ action: ACTION.ATTACK, value: 3, augments: [1, 2] }, { action: ACTION.ELEMENT_DARK }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 6,
          augments: [3],
          bonuses: [{ action: ACTION.JUMP }],
        },
      ],
    },
  },
  282: {
    id: 282,
    class: CLASS.NIGHTSHROUD,
    name: 'Swallowed by Fear',
    level: 6,
    initiative: 90,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 2, augments: [1] },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.DARK, ELEMENT.ANY],
          bonuses: [{ action: ACTION.NOTE, value: 'Kill one normal or elite\ntarget instead, (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3 },
        {
          action: ACTION.PUSH,
          value: 2,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
  283: {
    id: 283,
    class: CLASS.NIGHTSHROUD,
    name: 'Eyes of the Night',
    level: 7,
    initiative: 35,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Gain Advantage on all your attack actions.\nYou can target INVISIBLE (Effect:Invisible) enemies.',
          className: 'small',
        },
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
        { action: ACTION.MOVE, value: 5 },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'MUDDLE (Effect:Muddle)\nTarget all adjacent enemies',
              className: 'd-inline-block',
            },
            { action: ACTION.NOTE, value: '(Element:Dark),(XP:1)', className: 'd-inline-block' },
          ],
          className: 'mt-0',
        },
      ],
    },
  },
  284: {
    id: 284,
    class: CLASS.NIGHTSHROUD,
    name: 'Quiet Frenzy',
    level: 7,
    initiative: 19,
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Add +2 Attack (Symbol:Attack) and gain (XP:1)\nif you are INVISIBLE (Effect:Invisible)',
            },
          ],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+3 Attack (Symbol:Attack), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.ATTACK, value: 3 }, { action: ACTION.MOVE, value: 3 }],
    },
  },
  285: {
    id: 285,
    class: CLASS.NIGHTSHROUD,
    name: 'Gloom Darts',
    level: 8,
    initiative: 78,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [
            { action: ACTION.RANGE, value: 4, augments: [1] },
            { action: ACTION.POISON },
            { action: ACTION.CURSE },
          ],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Target (Symbol:Target)3, (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [2, 3] }, { action: ACTION.ELEMENT_DARK }],
    },
  },
  286: {
    id: 286,
    class: CLASS.NIGHTSHROUD,
    name: 'Lurking Ruin',
    level: 8,
    initiative: 18,
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add POISON (Effect:Poison), MUDDLE (Effect:Muddle), WOUND (Effect:Wound)
                      and gain (XP:1) if you are INVISIBLE (Effect:Invisible)`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3 },
        {
          action: ACTION.INVISIBLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  287: {
    id: 287,
    class: CLASS.NIGHTSHROUD,
    name: 'Angel of Death',
    level: 9,
    initiative: 38,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Kill all normal targets instead, (XP:2)' }],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 5,
          augments: [2],
          bonuses: [{ action: ACTION.JUMP }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Kill one adjacent normal enemy, (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
  },
  288: {
    id: 288,
    class: CLASS.NIGHTSHROUD,
    name: 'Voice of the Night',
    level: 9,
    initiative: 6,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'On your next five attacks while INVISIBLE (Effect:Invisible),\nadd STUN (Effect:Stun) to the attack.',
          style: { fontSize: '0.75em' },
        },
        {
          action: ACTION.SYMBOLS,
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
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
        { action: ACTION.MOVE, value: 2, augments: [1] },
        { action: ACTION.ATTACK, value: 2, augments: [2] },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.INVISIBLE,
              bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
              className: 'd-inline-block',
            },
            { action: ACTION.NOTE, value: '(Element:Dark),(XP:1)', className: 'd-inline-block' },
          ],
          className: 'mt-0',
        },
      ],
    },
  },
};

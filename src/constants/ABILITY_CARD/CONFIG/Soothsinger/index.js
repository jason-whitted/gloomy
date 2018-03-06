import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  348: {
    id: 348,
    class: CLASS.SOOTHSINGER,
    name: 'Power Ballad',
    level: 1,
    initiative: 19,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'All allies add +1 Attack (Symbol:Attack) to\none of their attacks each turn.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        {
          action: ACTION.STRENGTHEN,
          augments: [2],
          bonuses: [
            { action: ACTION.NOTE, value: 'Affect all adjacent allies' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  349: {
    id: 349,
    class: CLASS.SOOTHSINGER,
    name: 'Defensive Ditty',
    level: 1,
    initiative: 9,
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'All allies gain Shield (Symbol:Shield) 1.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Negate the next source of damage this\nround to one ally within Range (Symbol:Range) 2.',
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  350: {
    id: 350,
    class: CLASS.SOOTHSINGER,
    name: 'Song of Speed',
    level: 1,
    initiative: 5,
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: `All allies add +1 Move (Symbol:Move) to all their
          Move actions, and add +1 Range (Symbol:Range)
          to all their ranged attacks.`,
          style: { fontSize: '0.75em', lineHeight: '1em' },
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          className: 'mt-0',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MUDDLE,
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies in Range (Symbol:Range) 4' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  351: {
    id: 351,
    class: CLASS.SOOTHSINGER,
    name: 'Tuning the Outcome',
    level: 1,
    initiative: 78,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.BLESS,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.CURSE,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
      ],
    },
  },
  352: {
    id: 352,
    class: CLASS.SOOTHSINGER,
    name: 'Call to Action',
    level: 1,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.STRENGTHEN,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all allies' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'One ally within Range (Symbol:Range) 3 may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 4, augments: [1] },
      ],
    },
  },
  353: {
    id: 353,
    class: CLASS.SOOTHSINGER,
    name: 'Warding Dagger',
    level: 1,
    initiative: 56,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.IMMOBILIZE }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [2] },
        {
          action: ACTION.SHIELD,
          value: 2,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  354: {
    id: 354,
    class: CLASS.SOOTHSINGER,
    name: 'Throw Voice',
    level: 1,
    initiative: 44,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX },
    },
    top: {
      actions: [
        {
          action: ACTION.DISARM,
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [1],
          className: 'w-100',
          pos: { x: '60%', y: '10%', w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            {
              action: ACTION.NOTE,
              value: `Force all enemies in the
                      targeted area to perform a
                      "Move (Symbol:Move)1" action with you
                      controlling the actions.`,
              className: 'mt-1',
            },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
          className: 'w-75',
          style: { marginLeft: -10 },
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [2],
          className: 'w-100',
          pos: { x: '65%', y: '10%', w: 70, h: 70 },
        },
      ],
      consumed: true,
    },
  },
  355: {
    id: 355,
    class: CLASS.SOOTHSINGER,
    name: 'Singing Arrow',
    level: 1,
    initiative: 89,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.CURSE,
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [1],
          className: 'w-100',
          pos: { x: '58%', y: '10%', w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [3] }, { action: ACTION.WOUND }],
        },
      ],
    },
  },
  356: {
    id: 356,
    class: CLASS.SOOTHSINGER,
    name: 'Marching Beat',
    level: 1,
    initiative: 32,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One ally within Range (Symbol:Range)3 may perform', className: 'small' },
        { action: ACTION.MOVE, value: 4, augments: [1] },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  357: {
    id: 357,
    class: CLASS.SOOTHSINGER,
    name: 'Wistful Wounding',
    level: 0,
    initiative: 16,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'Add WOUND (Effect:Wound) to all attacks\nmade by all of your allies.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          bonuses: [
            { action: ACTION.RANGE, value: 4, augments: [1] },
            { action: ACTION.TARGET, value: 3, augments: [2] },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  358: {
    id: 358,
    class: CLASS.SOOTHSINGER,
    name: 'Unending Chant',
    level: 0,
    initiative: 51,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'The next five times you CURSE (Effect:Curse) an enemy,\nCURSE (Effect:Curse) them an additional time.',
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT,
            SYMBOL.USE_SLOT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.CONSUMED,
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  359: {
    id: 359,
    class: CLASS.SOOTHSINGER,
    name: 'Nimble Knife',
    level: 0,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.CURSE }],
        },
        {
          action: ACTION.BLESS,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect one adjacent ally' }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  360: {
    id: 360,
    class: CLASS.SOOTHSINGER,
    name: 'Soothing Lullaby',
    level: 2,
    initiative: 11,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'All allies may perform a "Heal (Symbol:Heal)1, Self"\naction at the start of each of their turns.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 4 }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
  },
  361: {
    id: 361,
    class: CLASS.SOOTHSINGER,
    name: 'Change Tempo',
    level: 2,
    initiative: 91,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.IMMOBILIZE,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range)3' }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [1] }],
    },
  },
  362: {
    id: 362,
    class: CLASS.SOOTHSINGER,
    name: 'Echoing Aria',
    level: 3,
    initiative: 8,
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'All allies gain Retaliate (Symbol:Retaliate)2, Range (Symbol:Range)2.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 2,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all allies in Range (Symbol:Range)3' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  363: {
    id: 363,
    class: CLASS.SOOTHSINGER,
    name: 'Crippling Chorus',
    level: 3,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.STUN,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range)3' },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.DISARM,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  364: {
    id: 364,
    class: CLASS.SOOTHSINGER,
    name: 'Disorienting Dirge',
    level: 4,
    initiative: 14,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'All enemies gain Disadvantage\non all their attacks.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.CURSE,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range)3' }],
        },
        {
          action: ACTION.BLESS,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all allies within Range (Symbol:Range)3' }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  365: {
    id: 365,
    class: CLASS.SOOTHSINGER,
    name: 'Inspiring Anthem',
    level: 4,
    initiative: 50,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Any one ally may perform', className: 'small' },
        { action: ACTION.MOVE, value: 5, augments: [1] },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Any one ally may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 5, augments: [2] },
      ],
    },
  },
  366: {
    id: 366,
    class: CLASS.SOOTHSINGER,
    name: 'Melody and Harmony',
    level: 5,
    initiative: 78,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'You may have two (ClassAbility:SS:Songs) active at once,\nbut you only gain experience from one.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'If a third (ClassAbility:SS:Song) is played,\ndiscard one of the others.',
          className: 'small',
        },
        { action: ACTION.PERSISTENT },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
      ],
    },
  },
  367: {
    id: 367,
    class: CLASS.SOOTHSINGER,
    name: 'Mobilizing Measure',
    level: 5,
    initiative: 6,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'Allies may perform a "Move (Symbol:Move)1" action\nbefore any of their Attack actions.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 6, augments: [1] }, { action: ACTION.XP, value: 1, className: 'large' }],
    },
  },
  368: {
    id: 368,
    class: CLASS.SOOTHSINGER,
    name: 'Pull the Strings',
    level: 6,
    initiative: 20,
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: `At the beginning of each of your turns, you
          may force an enemy within Range (Symbol:Range)5 to
          perform a "Move (Symbol:Move)2" action with
          you controlling the action.`,
          style: { fontSize: '0.75em', lineHeight: '1em' },
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          className: 'mt-0',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Force one enemy with Range (Symbol:Range)5 to perform', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: '+ 0',
          bonuses: [{ action: ACTION.NOTE, value: 'targeting another enemy with\nyou controlling the action.' }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  369: {
    id: 369,
    class: CLASS.SOOTHSINGER,
    name: 'Provoke Terror',
    level: 6,
    initiative: 60,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.STUN,
          bonuses: [{ action: ACTION.RANGE, value: 4 }],
          className: 'w-50 ml-2',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [1],
          className: 'w-100',
          pos: { x: '55%', y: '15%', w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 4 }, { action: ACTION.PUSH, value: 3, augments: [3] }],
        },
      ],
    },
  },
  370: {
    id: 370,
    class: CLASS.SOOTHSINGER,
    name: 'Nightmare Serenade',
    level: 7,
    initiative: 13,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX },
    },
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value:
            'At the beginning of each of your turns,\nCURSE (Symbol:Curse) one enemy within Range (Symbol:Range)5.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.CURSE },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [2],
          className: 'w-100',
          pos: { x: '60%', y: '15%', w: 70, h: 70 },
        },
      ],
    },
  },
  371: {
    id: 371,
    class: CLASS.SOOTHSINGER,
    name: 'Booming Proclamation',
    level: 7,
    initiative: 65,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range)2' },
            { action: ACTION.PUSH, value: 2, augments: [2] },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All allies within Range (Symbol:Range)3 may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 3, augments: [3] },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
      consumed: true,
    },
  },
  372: {
    id: 372,
    class: CLASS.SOOTHSINGER,
    name: 'Tranquil Trill',
    level: 8,
    initiative: 10,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'All allies may perform a "Heal (Symbol:2), Self"\naction at the start of each of their turns.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.DISARM,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all adjacent enemies' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  373: {
    id: 373,
    class: CLASS.SOOTHSINGER,
    name: 'Commanding Presence',
    level: 8,
    initiative: 59,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One ally within Range (Symbol:Range)3 may perform', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: '' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.RANGE, value: 2, className: 'small' },
            {
              action: ACTION.NOTE,
              value: `Force all enemies in the
                      targeted area to perform a
                      "Move (Symbol:Move)2" action with you
                      controlling the actions.`,
              className: 'small mt-1',
            },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
          className: 'w-75',
          style: { marginLeft: -10 },
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R6R2R3R4R5R6R',
          className: 'w-100',
          pos: { x: '65%', y: 0, w: 70, h: 70 },
        },
      ],
      consumed: true,
    },
  },
  374: {
    id: 374,
    class: CLASS.SOOTHSINGER,
    name: 'Captivating Performance',
    level: 9,
    initiative: 25,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.SONG, class: CLASS.SOOTHSINGER },
        {
          action: ACTION.NOTE,
          value: 'All allies add +1 Attack (Symbol:Attack)\nto all their attacks.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Gain (XP:1) at the beginning of each of your turns.',
          style: { fontSize: '0.70em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'position-absolute', style: { top: -5, left: 10 } },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:SS:Song)\nis played, discard this card.',
              className: 'ml-3',
            },
          ],
          className: 'position-relative',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.STUN,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.TARGET, value: 3, augments: [2] },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  375: {
    id: 375,
    class: CLASS.SOOTHSINGER,
    name: 'Shadow Puppets',
    level: 9,
    initiative: 52,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.JUMP },
            {
              action: ACTION.NOTE,
              value: `Force all enemies moved through
                      to perform an "Attack (Symbol:Attack)3" action
                      targeting another enemy with you
                      controlling the actions.`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Two allies within Range (Symbol:Range)3 may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 4 },
      ],
    },
  },
};

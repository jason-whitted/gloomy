import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  407: {
    id: 407,
    class: CLASS.SAWBONE,
    name: 'First Aid',
    level: 1,
    initiative: 8,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Give one adjacent ally one\n"Medical Pack" ability card.', className: 'small' },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [1] }],
    },
  },
  408: {
    id: 408,
    class: CLASS.SAWBONE,
    name: 'Hand of the Surgeon',
    level: 1,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [1] },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All your heal actions this round affect\nyourself and all adjacent allies.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  409: {
    id: 409,
    class: CLASS.SAWBONE,
    name: 'Hold Back the Pain',
    level: 1,
    initiative: 57,
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
          bonuses: [{ action: ACTION.RANGE, value: 1 }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All your melee attack actions this round\ntarget all adjacent enemies.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  410: {
    id: 410,
    class: CLASS.SAWBONE,
    name: 'Booster Shot',
    level: 1,
    initiative: 42,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 1 }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: "Place this card in one adjacent ally's active\narea and treat it as if they own this card.",
          className: 'small',
        },
        {
          action: ACTION.SHIELD,
          value: 1,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
  },
  411: {
    id: 411,
    class: CLASS.SAWBONE,
    name: 'Bloody Saw',
    level: 1,
    initiative: 25,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.WOUND }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
  },
  412: {
    id: 412,
    class: CLASS.SAWBONE,
    name: 'Curative Mixture',
    level: 1,
    initiative: 19,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [1, 2],
          bonuses: [
            { action: ACTION.RANGE, value: 1 },
            { action: ACTION.NOTE, value: 'Remove all negative conditions\non the healed figure.', className: 'small' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        { action: ACTION.NOTE, value: 'Remove all negative conditions\non one adjacent ally.', className: 'small' },
      ],
    },
  },
  413: {
    id: 413,
    class: CLASS.SAWBONE,
    name: 'Syringe',
    level: 1,
    initiative: 15,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Place this card in one adjacent ally's
                active area, then put it into your
                discard pile at the end of the round.`,
          className: 'small',
        },
        {
          action: ACTION.SHIELD,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ROUND }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.POISON }, { action: ACTION.STUN }],
        },
      ],
    },
  },
  414: {
    id: 414,
    class: CLASS.SAWBONE,
    name: 'Battlefield Medicine',
    level: 1,
    initiative: 83,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Give one adjacent ally one\n"Large Medical Pack" ability card.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Prevent all negative conditions on\nyourself and all allies this round.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  415: {
    id: 415,
    class: CLASS.SAWBONE,
    name: 'Triage',
    level: 1,
    initiative: 53,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `Once during each of your next four turns,
                 perform a "Heal (Symbol:Heal)2, Range (Symbol:Range)1" action.`,
          symbols: [
            SYMBOL.PERSISTENT,
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
      actions: [{ action: ACTION.MOVE, value: 5, augments: [1] }],
    },
  },
  416: {
    id: 416,
    class: CLASS.SAWBONE,
    name: 'Medical Pack',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  417: {
    id: 417,
    class: CLASS.SAWBONE,
    name: 'Medical Pack',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  418: {
    id: 418,
    class: CLASS.SAWBONE,
    name: 'Medical Pack',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  419: {
    id: 419,
    class: CLASS.SAWBONE,
    name: 'Medical Pack',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  420: {
    id: 420,
    class: CLASS.SAWBONE,
    name: 'Medical Pack',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  421: {
    id: 421,
    class: CLASS.SAWBONE,
    name: 'Medical Pack',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  422: {
    id: 422,
    class: CLASS.SAWBONE,
    name: 'Medical Pack',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  423: {
    id: 423,
    class: CLASS.SAWBONE,
    name: 'Medical Pack',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  424: {
    id: 424,
    class: CLASS.SAWBONE,
    name: 'Large Medical Pack',
    level: 0,
    initiative: 30,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  425: {
    id: 425,
    class: CLASS.SAWBONE,
    name: 'Large Medical Pack',
    level: 0,
    initiative: 30,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  426: {
    id: 426,
    class: CLASS.SAWBONE,
    name: 'Large Medical Pack',
    level: 0,
    initiative: 30,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  427: {
    id: 427,
    class: CLASS.SAWBONE,
    name: 'Large Medical Pack',
    level: 0,
    initiative: 30,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: "Return this card to the Sawbone's supply", className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'This card cannot be used for basic actions\nor to negate a source of damage.',
          className: 'small',
        },
      ],
    },
  },
  428: {
    id: 428,
    class: CLASS.SAWBONE,
    name: 'Prevention Is Key',
    level: 0,
    initiative: 13,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.DISARM,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [2],
          bonuses: [
            { action: ACTION.NOTE, value: 'Affect self and all adjacent allies' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  429: {
    id: 429,
    class: CLASS.SAWBONE,
    name: 'Teamwork',
    level: 0,
    initiative: 89,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `You and all adjacent allies may Recover (Symbol:Recover)
                  up to a number of discarded cards equal to
                  the number of allies adjacent to you.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All adjacent allies may perform\na "Move (Symbol:Move)2" action.',
          className: 'small',
        },
        { action: ACTION.MOVE, value: 2, augments: [1] },
      ],
    },
  },
  430: {
    id: 430,
    class: CLASS.SAWBONE,
    name: 'Vaccine',
    level: 0,
    initiative: 44,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.POISON },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
          className: 'w-75',
        },
        { action: ACTION.HEX_PATTERN, value: 'R2R6R', className: 'w-100', pos: { x: '60%', y: '10%', w: 60, h: 60 } },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Place this card in one adjacent ally’s active\narea and treat it as if they own the card.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Prevent all negative conditions\non all abilities targeting you.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
  },
  431: {
    id: 431,
    class: CLASS.SAWBONE,
    name: 'Hamstring',
    level: 2,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.IMMOBILIZE }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 6, augments: [2] },
        {
          action: ACTION.IMMOBILIZE,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  432: {
    id: 432,
    class: CLASS.SAWBONE,
    name: 'Precaution',
    level: 2,
    initiative: 9,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all allies' }, { action: ACTION.ROUND }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Give one adjacent ally one\n"Medical Pack" ability card.', className: 'small' },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  433: {
    id: 433,
    class: CLASS.SAWBONE,
    name: 'Regenerative Tissue',
    level: 3,
    initiative: 46,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [1, 2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Place this card in one adjacent ally’s active\narea and treat it as if they own the card.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'At the start of each of your turns,\nperform a "Heal 1, Self" action.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
    },
  },
  434: {
    id: 434,
    class: CLASS.SAWBONE,
    name: 'Vital Strike',
    level: 3,
    initiative: 38,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 7, augments: [1, 2] },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.ATTACK, value: 4, augments: [3] }],
    },
  },
  435: {
    id: 435,
    class: CLASS.SAWBONE,
    name: 'Blood Transfusion',
    level: 4,
    initiative: 52,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 7,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect one adjacent ally' }],
        },
        { action: ACTION.NOTE, value: 'Suffer 2 damage.', className: 'small' },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [2] },
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }],
        },
      ],
    },
  },
  436: {
    id: 436,
    class: CLASS.SAWBONE,
    name: 'Do No Harm',
    level: 4,
    initiative: 76,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Kill one adjancent normal or elite enemy.', className: 'small' },
        { action: ACTION.NOTE, value: 'DISARM (Effect:Disarm) and\nIMMOBILIZE (Effect:Immobilize)' },
        { action: ACTION.NOTE, value: 'Self', className: 'small mt-0' },
        { action: ACTION.XP, value: 2, className: 'large mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4 },
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 1 }],
        },
      ],
    },
  },
  437: {
    id: 437,
    class: CLASS.SAWBONE,
    name: 'Research the Cure',
    level: 5,
    initiative: 40,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 4, augments: [1] },
        { action: ACTION.NOTE, value: 'Remove all negative conditions\non all adjacent allies.', className: 'small' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: "Place this card in one adjacent ally's active\narea and treat it as if they own the card.",
          className: 'small',
        },
        {
          action: ACTION.SHIELD,
          value: 1,
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            {
              action: ACTION.NOTE,
              value: 'Prevent all negative conditions\non all abilities targeting you.',
            },
          ],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
  },
  438: {
    id: 438,
    class: CLASS.SAWBONE,
    name: 'Amputate',
    level: 5,
    initiative: 86,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.WOUND },
            { action: ACTION.IMMOBILIZE },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 7,
          augments: [2, 3],
          bonuses: [{ action: ACTION.RANGE, value: 1 }, { action: ACTION.STUN }],
        },
      ],
    },
  },
  439: {
    id: 439,
    class: CLASS.SAWBONE,
    name: 'Euthanize',
    level: 6,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Kill one adjacent normal enemy with at\nleast two negative condition tokens.',
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.POISON }, { action: ACTION.WOUND }, { action: ACTION.STUN }],
        },
      ],
    },
  },
  440: {
    id: 440,
    class: CLASS.SAWBONE,
    name: 'Prescription',
    level: 6,
    initiative: 6,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Give all adjacent allies one\n"Medical Pack" ability card.',
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Give all adjacent allies one\n"Large Medical Pack" ability card.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
  441: {
    id: 441,
    class: CLASS.SAWBONE,
    name: 'Master Physician',
    level: 7,
    initiative: 49,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Before your next six Heal actions, remove all
                  negative conditions on the healed figure(s).`,
          className: 'small',
        },
        {
          action: ACTION.SYMBOLS,
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT,
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
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Add +4 Heal (Symbol:Heal) to all your\nHeal actions this round.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  442: {
    id: 442,
    class: CLASS.SAWBONE,
    name: "Surgeon's Satchel",
    level: 7,
    initiative: 10,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.LOOT, value: 1 },
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [2] },
        { action: ACTION.NOTE, value: 'Give one adjacent ally one\n"Medical Pack" ability card.', className: 'small' },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  443: {
    id: 443,
    class: CLASS.SAWBONE,
    name: 'Bedside Manner',
    level: 8,
    initiative: 5,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 1 }],
        },
        {
          action: ACTION.NOTE,
          value: `Remove all negative conditions on the
                  healed figure and give them one
                  "Large Medical Pack" ability card.`,
          className: 'small mt-0',
        },
        { action: ACTION.XP, value: 2, className: 'large mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [3] },
        {
          action: ACTION.NOTE,
          value: 'One adjacent ally may Recover (Symbol:Recover)\nup to two discarded cards.',
          className: 'small',
        },
      ],
    },
  },
  444: {
    id: 444,
    class: CLASS.SAWBONE,
    name: "Gentleman's Anger",
    level: 8,
    initiative: 29,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1],
          bonuses: [{ action: ACTION.DISARM }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 5 }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
  },
  445: {
    id: 445,
    class: CLASS.SAWBONE,
    name: 'Prep for Surgery',
    level: 9,
    initiative: 22,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `All your Attack and Move abilities
                  may be performed as Heal abilities
                  of an equal value plus one.`,
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'In such cases, ignore all conditions\napplied by the Attack abilities.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.STUN,
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy', augments: [2] }],
        },
      ],
    },
  },
  446: {
    id: 446,
    class: CLASS.SAWBONE,
    name: 'Grisly Trauma',
    level: 9,
    initiative: 81,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Kill all normal or elite\nenemies in the targeted\narea suffering from 10\nor more damage.',
          className: 'small w-75',
          style: { marginLeft: -5 },
        },
        { action: ACTION.RANGE, value: 3, className: 'small w-75', style: { marginLeft: -5 } },
        { action: ACTION.XP, value: 1, className: 'large w-75 mt-0', style: { marginLeft: -5 } },
        { action: ACTION.HEX_PATTERN, value: 'R2R6R', className: 'w-100', pos: { x: '65%', y: '10%', w: 60, h: 60 } },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        {
          action: ACTION.NOTE,
          value: 'POISON (Effect:Poison), WOUND (Effect:Wound) and\nMUDDLE (Effect:Muddle)',
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
};

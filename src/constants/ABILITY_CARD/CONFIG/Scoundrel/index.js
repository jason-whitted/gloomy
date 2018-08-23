import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  88: {
    id: 88,
    class: CLASS.SCOUNDREL,
    name: 'Single Out',
    level: 1,
    initiative: 86,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add +2 Attack (Symbol:Attack) and gain (XP:1) when the
                      target is adjacent to any of your allies.`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `On your next four attacks targeting enemies
               adjacent to none of their allies, add +2 Attack (Symbol:Attack).`,
          style: { fontSize: '0.72em', lineHeight: '1.2em' },
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
        },
      ],
    },
  },
  89: {
    id: 89,
    class: CLASS.SCOUNDREL,
    name: 'Flanking Strike',
    level: 1,
    initiative: 4,
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
            {
              action: ACTION.NOTE,
              value: `Add +2 Attack (Symbol:Attack) and gain (XP:1) when the
                      target is adjacent to any of your allies.`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [2] }],
    },
  },
  90: {
    id: 90,
    class: CLASS.SCOUNDREL,
    name: 'Smoke Bomb',
    level: 1,
    initiative: 12,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.INVISIBLE,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.ELEMENT_DARK, className: 'position-absolute', style: { top: 0, right: '5%' } },
          ],
          className: 'position-relative',
        },

        {
          action: ACTION.SYMBOLS,
          text: 'On your next attack while you have\nINVISIBLE (Effect:Invisible), double the value of the attack.',
          symbols: [SYMBOL.PERSISTENT, SYMBOL.USE_SLOT_GAIN_XP_2, SYMBOL.CONSUMED],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.PULL,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [3] }],
        },
      ],
    },
  },
  91: {
    id: 91,
    class: CLASS.SCOUNDREL,
    name: 'Backstab',
    level: 1,
    initiative: 6,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [1, 2] },
        {
          action: ACTION.NOTE,
          value: 'Add +2 Attack (Symbol:Attack) and gain (XP:1) when the\ntarget is adjacent to any of your allies.',
          className: 'small mt-0',
        },
        {
          action: ACTION.NOTE,
          value: 'Add +2 Attack (Symbol:Attack) and gain (XP:1) when the\ntarget is adjacent to none of its allies.',
          className: 'small',
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 6 }],
    },
  },
  92: {
    id: 92,
    class: CLASS.SCOUNDREL,
    name: "Thief's Knack",
    level: 1,
    initiative: 23,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Disarm one adjacent trap.', className: 'small' },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [1] },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  93: {
    id: 93,
    class: CLASS.SCOUNDREL,
    name: 'Venom Shiv',
    level: 1,
    initiative: 60,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [1], bonuses: [{ action: ACTION.POISON }] },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [2] }],
    },
  },
  94: {
    id: 94,
    class: CLASS.SCOUNDREL,
    name: 'Throwing Knives',
    level: 1,
    initiative: 10,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [1] }, { action: ACTION.TARGET, value: 2 }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 2 }],
      consumed: true,
    },
  },
  95: {
    id: 95,
    class: CLASS.SCOUNDREL,
    name: 'Quick Hands',
    level: 1,
    initiative: 64,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [1] }, { action: ACTION.ATTACK, value: 2, augments: [2] }],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
  },
  96: {
    id: 96,
    class: CLASS.SCOUNDREL,
    name: 'Special Mixture',
    level: 1,
    initiative: 33,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        { action: ACTION.POISON, bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }] },
      ],
    },
  },
  97: {
    id: 97,
    class: CLASS.SCOUNDREL,
    name: 'Sinister Opportunity',
    level: 0,
    initiative: 93,
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
            {
              action: ACTION.NOTE,
              value: 'Add +1 Attack (Symbol:Attack) for each of your\nallies adjacent to the target.',
            },
          ],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Add +2 Attack (Symbol:Attack) instead, (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Force one adjacent enemy to perform' }],
        },
        {
          action: ACTION.MOVE,
          value: 1,
          bonuses: [
            { action: ACTION.NOTE, value: 'with you controlling the action,\nand ending in a hex adjacent to you.' },
          ],
        },
      ],
    },
  },
  98: {
    id: 98,
    class: CLASS.SCOUNDREL,
    name: "Trickster's Reversal",
    level: 0,
    initiative: 9,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1, 2],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add +X Attack (Symbol:Attack) where X is equal to
                      double the Shield (Symbol:Shield) value of the target.`,
            },
          ],
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Negate the next source of\ndamage to you this round.', className: 'small' },
        { action: ACTION.ROUND },
      ],
    },
  },
  99: {
    id: 99,
    class: CLASS.SCOUNDREL,
    name: 'Swift Bow',
    level: 0,
    initiative: 36,
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
          bonuses: [{ action: ACTION.RANGE, value: 4, augments: [2] }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 4,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Loot (Symbol:Loot) every hex you enter.' }],
        },
      ],
    },
  },
  100: {
    id: 100,
    class: CLASS.SCOUNDREL,
    name: 'Open Wound',
    level: 2,
    initiative: 11,
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
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Add WOUND (Effect:Wound) and gain (XP:1) when the\ntarget is adjacent to any of your allies.',
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [2] }],
    },
  },
  101: {
    id: 101,
    class: CLASS.SCOUNDREL,
    name: 'Flintlock',
    level: 2,
    initiative: 90,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 4, augments: [3] }],
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
  102: {
    id: 102,
    class: CLASS.SCOUNDREL,
    name: 'Hidden Daggers',
    level: 3,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      4: { id: 4, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [2] },
            { action: ACTION.TARGET, value: 1, augments: [3] },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
          consumed: true,
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.INVISIBLE, augments: [4], bonuses: [{ action: ACTION.NOTE, value: 'Self' }] }],
    },
  },
  103: {
    id: 103,
    class: CLASS.SCOUNDREL,
    name: "Duelist's Advance",
    level: 3,
    initiative: 16,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [1] }, { action: ACTION.ATTACK, value: 3, augments: [2] }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Add +2 Attack (Symbol:Attack) to attacks this
                  round targeting enemies adjacent to none of their allies.`,
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  104: {
    id: 104,
    class: CLASS.SCOUNDREL,
    name: 'Flurry of Blades',
    level: 4,
    initiative: 3,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [1] },
            { action: ACTION.TARGET, value: 3 },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 4,
          augments: [2],
          bonuses: [
            { action: ACTION.NOTE, value: 'Gain Advantage on all\nyour attacks this round.' },
            { action: ACTION.ROUND },
          ],
        },
      ],
    },
  },
  105: {
    id: 105,
    class: CLASS.SCOUNDREL,
    name: 'Gruesome Advantage',
    level: 4,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1, 2],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add +3 Attack (Symbol:Attack) and gain (XP:1) when the
                      target is adjacent to any of your allies.`,
              className: 'small',
            },
            {
              action: ACTION.NOTE,
              value: `Add +3 Attack (Symbol:Attack) and gain (XP:1) when the
                      target is adjacent to none of its allies.`,
              className: 'small',
            },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 7 }],
    },
  },
  106: {
    id: 106,
    class: CLASS.SCOUNDREL,
    name: 'Cull the Weak',
    level: 5,
    initiative: 16,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add +2 Attack (Symbol:Attack) and gain (XP:1) when the
                      target is adjacent to any of your allies.`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `On your next six attacks targeting enemies with
                  DISARM (Effect:Disarm), IMMOBILIZE (Effect:Disarm) or STUN (Effect:Stun),
                  add +2 Attack (Symbol:Attack).`,
          style: { fontSize: '0.75em', lineHeight: '1em' },
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
            SYMBOL.USE_SLOT,
            SYMBOL.CONSUMED,
          ],
          style: { marginTop: 0 },
        },
      ],
    },
  },
  107: {
    id: 107,
    class: CLASS.SCOUNDREL,
    name: 'Visage of the Inevitable',
    level: 5,
    initiative: 88,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Kill one adjacent normal enemy that
                  is adjacent to none of its allies and
                  also adjacent to any of your allies.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        { action: ACTION.POISON, bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }] },
      ],
    },
  },
  108: {
    id: 108,
    class: CLASS.SCOUNDREL,
    name: 'Crippling Poison',
    level: 6,
    initiative: 30,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Add +2 Attack (Symbol:Attack) to all your attacks\ntargeting poisoned enemies.',
          className: 'small',
        },
        { action: ACTION.PERSISTENT },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.POISON },
            { action: ACTION.IMMOBILIZE },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  109: {
    id: 109,
    class: CLASS.SCOUNDREL,
    name: 'Burning Oil',
    level: 6,
    initiative: 95,
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
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [2] },
            { action: ACTION.WOUND },
            { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 2 }, { action: ACTION.XP, value: 1, className: 'large' }],
    },
  },
  110: {
    id: 110,
    class: CLASS.SCOUNDREL,
    name: 'Stick to the Shadows',
    level: 7,
    initiative: 26,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 4, augments: [1, 2] },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add +4 Attack (Symbol:Attack) and gain (XP:2)
                      when the target is adjacent
                      to any of your allies`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        { action: ACTION.INVISIBLE, augments: [3], bonuses: [{ action: ACTION.NOTE, value: 'Self' }] },
      ],
    },
  },
  111: {
    id: 111,
    class: CLASS.SCOUNDREL,
    name: 'Spring the Trap',
    level: 7,
    initiative: 13,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Disarm one adjacent trap.', className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'Target an enemy within Range (Symbol:Range) 3 to\nsuffer the effects of the disarmed trap.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `On your next attack targeting an enemy
                  adjacent to none of its allies and adjacent to any
                  of your allies, double the value of the attack.`,
          style: { fontSize: '0.75em' },
        },

        {
          action: ACTION.SYMBOLS,
          symbols: [SYMBOL.PERSISTENT, SYMBOL.USE_SLOT_GAIN_XP_2, SYMBOL.CONSUMED],
        },
      ],
    },
  },
  112: {
    id: 112,
    class: CLASS.SCOUNDREL,
    name: 'Stiletto Storm',
    level: 8,
    initiative: 80,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [1] },
            { action: ACTION.TARGET, value: 4 },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [2] },
        {
          action: ACTION.RETALIATE,
          value: 1,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  113: {
    id: 113,
    class: CLASS.SCOUNDREL,
    name: "Pain's End",
    level: 8,
    initiative: 38,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 8,
          augments: [1, 2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.XP, value: 2, className: 'large' }],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [3],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Kill one adjacent enemy whose current hit\npoint value is equal to or less than 3.',
            },
          ],
        },
      ],
    },
  },
  114: {
    id: 114,
    class: CLASS.SCOUNDREL,
    name: 'Long Con',
    level: 9,
    initiative: 2,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }, { action: ACTION.DISARM }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Force one adjacent normal or elite
                  enemy to perform its turn this
                  round as if its allies were enemies
                  and its enemies were allies, with
                  you controlling its actions.`,
          style: { fontSize: '0.75em', lineHeight: '0.9em' },
        },
        {
          action: ACTION.NOTE,
          value: `To signify this, place one of your class
                  tokens on this enemy for the round.`,
          style: { fontSize: '0.75em', lineHeight: '0.9em' },
        },

        { action: ACTION.XP, value: 2, className: 'large mt-0', style: { marginLeft: -80 } },
        { action: ACTION.ROUND, pos: { x: 125, y: 70, w: 40, h: 40 } },
      ],
      consumed: true,
    },
  },
  115: {
    id: 115,
    class: CLASS.SCOUNDREL,
    name: 'Watch It Burn',
    level: 9,
    initiative: 98,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Add POISON (Effect:Poison) and WOUND (Effect:Wound)\nto all your attacks.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 5, augments: [1] },
        {
          action: ACTION.WOUND,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
};

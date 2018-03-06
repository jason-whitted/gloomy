import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  319: {
    id: 319,
    class: CLASS.BERSERKER,
    name: 'Resolute Stand',
    level: 1,
    initiative: 9,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 'X',
          augments: [1],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `where X is the difference between
                      your maximum hit point value
                      and current hit point value.
                      (XP:1) for every 5 damage done.`,
            },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
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
  320: {
    id: 320,
    class: CLASS.BERSERKER,
    name: 'Growing Rage',
    level: 1,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 'X',
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'where X is the number of cards\nyou have lost.' }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [2],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `If you have fewer hit points than
                      half your maximum hit point value
                      (rounded up), perform`,
            },
          ],
        },
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [{ action: ACTION.NOTE, value: 'and gain (XP:1).' }],
        },
      ],
    },
  },
  321: {
    id: 321,
    class: CLASS.BERSERKER,
    name: 'Strength of Agony',
    level: 1,
    initiative: 37,
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
              value: 'You may suffer 2 damage to\nadd +2 Attack (Symbol:Attack) and gain (XP:1).',
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'You may suffer up to 3 damage.', className: 'small' },
        {
          action: ACTION.MOVE,
          value: '4+X',
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'where X is the amount of\ndamage you suffered.' }],
        },
      ],
    },
  },
  322: {
    id: 322,
    class: CLASS.BERSERKER,
    name: 'Defiance of Death',
    level: 1,
    initiative: 31,
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
              value: `Add +2 Attack (Symbol:Attack) and gain (XP:1) if you
                      have less than half of your maximum
                      hit points (rounded up).`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `On the next three sources of damage to
                 you that would reduce you to less than
                 1 hit point, suffer no damage instead.`,
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
  323: {
    id: 323,
    class: CLASS.BERSERKER,
    name: 'From the Brink',
    level: 1,
    initiative: 24,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 'X',
          bonuses: [
            { action: ACTION.RANGE, value: 2 },
            {
              action: ACTION.NOTE,
              value: `where X is the difference between
                      your maximum hit point value
                      and current hit point value.`,
              className: 'mt-1',
            },
          ],
        },
        { action: ACTION.XP, value: 2, className: 'large mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [1],
        },
        {
          action: ACTION.PUSH,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  324: {
    id: 324,
    class: CLASS.BERSERKER,
    name: 'Blood Pact',
    level: 1,
    initiative: 76,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 6,
          augments: [1],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Suffer damage equal to half of your\ncurrent hit point value (rounded up).',
            },
          ],
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Add +1 Attack (Symbol:Attack) to all your attacks
                  Suffer 1 damage at the start
                  of each of your turns.`,
          className: 'small',
        },
        { action: ACTION.PERSISTENT },
      ],
      consumed: true,
    },
  },
  325: {
    id: 325,
    class: CLASS.BERSERKER,
    name: 'Cauterize',
    level: 1,
    initiative: 40,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
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
            { action: ACTION.WOUND },
          ],
        },
        { action: ACTION.ELEMENT_FIRE, className: 'mt-0' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'The next four times you are healed,\nadd +2 Heal (Symbol:Heal).',
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
  },
  326: {
    id: 326,
    class: CLASS.BERSERKER,
    name: 'Dazing Wound',
    level: 1,
    initiative: 29,
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
            { action: ACTION.NOTE, value: 'You may suffer 2 damage to add\nSTUN (Effect:Stun) and gain (XP:1).' },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  327: {
    id: 327,
    class: CLASS.BERSERKER,
    name: 'Furious Aid',
    level: 1,
    initiative: 43,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [{ action: ACTION.LOOT, value: 2, bonuses: [{ action: ACTION.XP, value: 1, className: 'large' }] }],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
      ],
    },
  },
  328: {
    id: 328,
    class: CLASS.BERSERKER,
    name: 'Bounce Back',
    level: 1,
    initiative: 14,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.ROUND },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
        },
        {
          action: ACTION.HEAL,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  329: {
    id: 329,
    class: CLASS.BERSERKER,
    name: 'Unbridled Power',
    level: 0,
    initiative: 67,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.STUN }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_ATTACK, value: 2 }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `You may overheal to a maximum of 26 hit
                  points but your maximum hit point value
                  remains the same for the purpose of ability
                  effects.`,
          className: 'small',
        },
        { action: ACTION.HEAL, value: 3, bonuses: [{ action: ACTION.NOTE, value: 'Self' }], className: 'mt-0' },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-4 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-4 mt-0' },
      ],
      consumed: true,
    },
  },
  330: {
    id: 330,
    class: CLASS.BERSERKER,
    name: 'Glass Hammer',
    level: 0,
    initiative: 11,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 'X', augments: [1] },
        {
          action: ACTION.NOTE,
          value: 'where X is your current hit point value.\n(XP:1) for every 5 damage done.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Reduce current hit point value to 1.\nThis is not considered damage.',
          className: 'small',
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [2] }],
    },
  },
  331: {
    id: 331,
    class: CLASS.BERSERKER,
    name: 'Numb the Pain',
    level: 0,
    initiative: 35,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [1] },
        {
          action: ACTION.NOTE,
          value: 'You may suffer 2 damage to gain\nShield (Symbol:Shield) 1, (XP:1)',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.NOTE,
          value: 'You may suffer 2 damage to STUN (Effect:Stun)\nan adjacent enemy.',
          className: 'small',
        },
      ],
    },
  },
  332: {
    id: 332,
    class: CLASS.BERSERKER,
    name: 'Reckless Offensive',
    level: 2,
    initiative: 21,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'You may suffer up to 3 damage.', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1, 2],
          bonuses: [
            { action: ACTION.TARGET, value: 'X' },
            { action: ACTION.NOTE, value: 'where X is the amount of damage you\nsuffered.' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All melee attacks targeting\nyou add +1 Attack (Symbol:Attack).',
          className: 'small',
        },
        { action: ACTION.RETALIATE, value: 2, bonuses: [{ action: ACTION.NOTE, value: 'Self' }] },
        { action: ACTION.PERSISTENT },
      ],
      consumed: true,
    },
  },
  333: {
    id: 333,
    class: CLASS.BERSERKER,
    name: 'Break the Chains',
    level: 2,
    initiative: 53,
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
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.TARGET, value: 2, augments: [2] },
            { action: ACTION.PULL, value: 2 },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 4,
          augments: [3],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `Add +2 Move (Symbol:Move) if you have fewer
                      hit points than half of your maximum
                      hit point value (rounded up).`,
            },
          ],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Move (Symbol:Move), (XP:1)' }],
        },
      ],
    },
  },
  334: {
    id: 334,
    class: CLASS.BERSERKER,
    name: 'Spiked Armor',
    level: 3,
    initiative: 16,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Increse the value of each of your\nRetaliate (Symbol:Retaliate) abilities by 2 this round.',
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
        { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
  335: {
    id: 335,
    class: CLASS.BERSERKER,
    name: 'Fatal Fury',
    level: 3,
    initiative: 34,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Kill one adjacent normal enemy
                  whose current hit point value is less
                  than half the difference between your
                  maximum hit point value and your
                  current hit point value.`,
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.ATTACK, value: 2 },
        { action: ACTION.MOVE, value: 2, augments: [1] },
        { action: ACTION.ATTACK, value: 2 },
      ],
    },
  },
  336: {
    id: 336,
    class: CLASS.BERSERKER,
    name: 'Flurry of Axes',
    level: 4,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'You may suffer up to 4 damage.', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: 'X',
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'where X is the amount of\ndamage you suffered.' }],
          className: 'mt-1',
        },
        { action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range)3', className: 'small' },
        { action: ACTION.XP, value: 2, className: 'large', style: { marginTop: -5 } },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [2] }],
    },
  },
  337: {
    id: 337,
    class: CLASS.BERSERKER,
    name: 'Shiny Distraction',
    level: 4,
    initiative: 8,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        { action: ACTION.LOOT, value: 1 },
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.ROUND },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Gain Advantage on all\nyour attacks this round.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'All attacks targeting you\ngain Disadvantage this round.',
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  338: {
    id: 338,
    class: CLASS.BERSERKER,
    name: 'Seeing Red',
    level: 5,
    initiative: 22,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1, 2],
        },
        {
          action: ACTION.NOTE,
          value: `Gain Shield (Symbol:Shield) 1, (XP:1) if you have
                  fewer hit points than half of your
                  maximum hit point value (rounded up).`,
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Add +1 Attack (Symbol:Attack) to all your attacks when
                  you have fewer hit points than half of your
                  maximum hit point value (rounded up).`,
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
  },
  339: {
    id: 339,
    class: CLASS.BERSERKER,
    name: 'Final Thought',
    level: 5,
    initiative: 89,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Kill one adjacent normal or elite enemy.\nYou immediately become exhausted.',
          className: 'small',
        },
        { action: ACTION.XP, value: 3, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 'X',
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'where X is the number of cards\nyou have lost.' }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.ATTACK, value: 3 }],
        },
      ],
    },
  },
  340: {
    id: 340,
    class: CLASS.BERSERKER,
    name: 'Devil Horns',
    level: 6,
    initiative: 31,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.WOUND }, { action: ACTION.ELEMENT_FIRE }],
          className: 'w-50 pl-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G3R1R6R5A',
          augments: [2],
          className: 'w-100',
          pos: { x: '55%', y: '10%', w: 80, h: 80 },
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.ATTACK, value: 5, augments: [3] },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  341: {
    id: 341,
    class: CLASS.BERSERKER,
    name: 'Unstoppable Destruction',
    level: 6,
    initiative: 57,
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
              value: `You may suffer 2 damage to ignore the\ntarget's Shield value and gain (XP:1).`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'If you short rest at the end of this round,\ngain all the benefits of a long rest.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  342: {
    id: 342,
    class: CLASS.BERSERKER,
    name: 'Burning Hatred',
    level: 7,
    initiative: 40,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies within\nRange (Symbol:Range) 2 instead' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.WOUND,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
  343: {
    id: 343,
    class: CLASS.BERSERKER,
    name: 'Careless Charge',
    level: 7,
    initiative: 20,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [2],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: `WOUND (Effect:Wound) self and all adjacent allies
            to add PUSH (Effect:Push) 2, IMMOBILIZE (Effect:Immobilize).`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'You are immune to all negative conditions.', className: 'small' },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
  },
  344: {
    id: 344,
    class: CLASS.BERSERKER,
    name: 'Bone Breaker',
    level: 8,
    initiative: 41,
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
          bonuses: [{ action: ACTION.WOUND }, { action: ACTION.IMMOBILIZE }, { action: ACTION.ELEMENT_FIRE }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [2],
          bonuses: [
            { action: ACTION.RANGE, value: 4 },
            {
              action: ACTION.NOTE,
              value: `Target can no longer fly.
                      Place a character token
                      on the target to signify this.`,
              className: 'mt-1',
            },
          ],
        },
      ],
    },
  },
  345: {
    id: 345,
    class: CLASS.BERSERKER,
    name: 'Vengeful Barrage',
    level: 8,
    initiative: 38,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'On the next five sources of damage\nto you, perform an "Attack (Symbol:Attack) 3" action.',
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
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [1] },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Add +1 Attack (Symbol:Attack) to all your\nattack actions this round, (XP:1).',
            },
          ],
        },
        { action: ACTION.PERSISTENT, className: 'mt-0' },
      ],
    },
  },
  346: {
    id: 346,
    class: CLASS.BERSERKER,
    name: 'Immortality',
    level: 9,
    initiative: 33,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'On the next five sources of damage\nto you, suffer no damage instead.',
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
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        {
          action: ACTION.SHIELD,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.RETALIATE, value: 2, bonuses: [{ action: ACTION.NOTE, value: 'Self' }] }],
          className: 'mt-0',
        },
        { action: ACTION.ROUND, style: { marginTop: -5 } },
      ],
    },
  },
  347: {
    id: 347,
    class: CLASS.BERSERKER,
    name: 'The Maw of Madness',
    level: 9,
    initiative: 10,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }, { action: ACTION.MUDDLE }],
        },
        {
          action: ACTION.NOTE,
          value: 'Perform a "Heal (Symbol:Heal) 2, Self" action\nfor each enemy damaged.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'You may suffer up to 5 damage.', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: '3+X',
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [3] }, { action: ACTION.IMMOBILIZE }],
        },
        { action: ACTION.NOTE, value: 'where X is the amount of\ndamage you suffered.', className: 'small' },
      ],
    },
  },
};

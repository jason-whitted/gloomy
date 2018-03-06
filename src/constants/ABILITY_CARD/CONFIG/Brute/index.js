import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  1: {
    id: 1,
    class: CLASS.BRUTE,
    name: 'Trample',
    level: 1,
    initiative: 72,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY },
      5: { id: 5, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.PIERCE, value: 2, augments: [2] }],
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
            { action: ACTION.JUMP },
            { action: ACTION.XP, value: 2, className: 'large position-absolute', style: { top: 0, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [4, 5],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies moved through' }],
        },
      ],
      consumed: true,
    },
  },
  2: {
    id: 2,
    class: CLASS.BRUTE,
    name: 'Eye for an Eye',
    level: 1,
    initiative: 18,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.NOTE, value: '(Symbol:XP:1) each time you Retaliate.' },
            { action: ACTION.ROUND },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [2, 3],
          bonuses: [{ action: ACTION.RANGE, value: 1 }, { action: ACTION.ELEMENT_EARTH }],
        },
      ],
    },
  },
  3: {
    id: 3,
    class: CLASS.BRUTE,
    name: 'Sweeping Blow',
    level: 1,
    initiative: 64,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          className: 'w-75',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G3R1R6R5A',
          augments: [2],
          pos: { x: '60%', y: '7%', w: 60, h: 60 },
          className: 'w-100',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3 },
        {
          action: ACTION.PUSH,
          value: 1,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
  4: {
    id: 4,
    class: CLASS.BRUTE,
    name: 'Provoking Roar',
    level: 1,
    initiative: 10,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          aguments: [1],
          bonuses: [{ action: ACTION.DISARM }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value:
            "Any enemy who targets one of your adjacent allies with an attack targets you with that attack instead regardless of the attack's range.",
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  5: {
    id: 5,
    class: CLASS.BRUTE,
    name: 'Overwhelming Assault',
    level: 1,
    initiative: 61,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 6,
          augments: [1, 2],
          bonuses: [{ action: ACTION.XP, value: 2, className: 'large' }],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3 },
        {
          action: ACTION.PUSH,
          value: 2,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  6: {
    id: 6,
    class: CLASS.BRUTE,
    name: 'Grab and Go',
    level: 1,
    initiative: 87,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [1, 2] }],
    },
  },
  7: {
    id: 7,
    class: CLASS.BRUTE,
    name: 'Warding Strength',
    level: 1,
    initiative: 32,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.PUSH, value: 2, augments: [2] }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'On the next six sources of damage from attacks targetting you, gain (Shield) 1.',
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
  },
  8: {
    id: 8,
    class: CLASS.BRUTE,
    name: 'Shield Bash',
    level: 1,
    initiative: 15,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
      4: { id: 4, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1, 2],
          bonuses: [{ action: ACTION.STUN }, { action: ACTION.XP, value: 2, className: 'large' }],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [3, 4],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  9: {
    id: 9,
    class: CLASS.BRUTE,
    name: 'Leaping Cleave',
    level: 1,
    initiative: 54,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large' }],
          className: 'w-75',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G1R3R4A',
          augments: [2],
          pos: { x: '65%', y: '10%', w: 60, h: 60 },
          className: 'w-100',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [3],
          bonuses: [{ action: ACTION.JUMP }, { action: ACTION.ELEMENT_AIR }],
        },
      ],
    },
  },
  10: {
    id: 10,
    class: CLASS.BRUTE,
    name: 'Spare Dagger',
    level: 1,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.ATTACK, value: 2, augments: [2] }],
    },
  },
  11: {
    id: 11,
    class: CLASS.BRUTE,
    name: 'Skewer',
    level: 0,
    initiative: 35,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            {
              action: ACTION.HEX_PATTERN,
              value: 'G1R1R1A',
              augments: [2],
              pos: { x: '65%', y: -10, w: 65, h: 65 },
              className: 'w-100',
            },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
          className: 'w-50 ml-3',
        },

        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_ATTACK, value: 1 }, { action: ACTION.PIERCE, value: 1 }],
          className: 'w-50 ml-2',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 6,
          augments: [3, 4],
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
      consumed: true,
    },
  },
  12: {
    id: 12,
    class: CLASS.BRUTE,
    name: 'Balanced Measure',
    level: 0,
    initiative: 77,
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 'X',
          bonuses: [
            { action: ACTION.NOTE, value: 'where X is the number of hexes\nyou have moved so far this turn.' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 'X',
          bonuses: [
            { action: ACTION.NOTE, value: 'where X is the amount of damage\nyou have inflicted so far this turn.' },
          ],
        },
      ],
    },
  },
  13: {
    id: 13,
    class: CLASS.BRUTE,
    name: 'Wall of Doom',
    level: 0,
    initiative: 20,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.SHIELD,
          value: 2,
          augments: [2],
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-1' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Add +1 (Symbol:Attack) to all\nyour Attacks this round.',
          bonuses: [{ action: ACTION.ROUND }],
          className: 'small',
        },
      ],
    },
  },
  14: {
    id: 14,
    class: CLASS.BRUTE,
    name: 'Fatal Advance',
    level: 2,
    initiative: 40,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Kill one adjacent normal enemy.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [1] }],
    },
  },
  15: {
    id: 15,
    class: CLASS.BRUTE,
    name: 'Juggernaut',
    level: 2,
    initiative: 34,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [1] }, { action: ACTION.ATTACK, value: 2, augments: [2] }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'On the next three sources of damage to you, suffer no damage instead.',
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
  16: {
    id: 16,
    class: CLASS.BRUTE,
    name: 'Hook and Chain',
    level: 3,
    initiative: 42,
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
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.PULL, value: 2 }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 4,
          bonuses: [{ action: ACTION.NOTE, value: 'If the movement was in\na straight line, perform' }],
        },
        {
          action: ACTION.ATTACK,
          value: 'X',
          bonuses: [
            { action: ACTION.NOTE, value: 'where X is equal to the number of hexes\nyou moved with this action.' },
          ],
        },
      ],
    },
  },
  17: {
    id: 17,
    class: CLASS.BRUTE,
    name: 'Brute Force',
    level: 3,
    initiative: 51,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.HEX, top: true },
      4: { id: 4, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.MUDDLE }, { action: ACTION.XP, value: 1, className: 'large' }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G6A2R3R4R5A',
          augments: [2, 3],
          pos: { x: '60%', y: '7%', w: 65, h: 65 },
          className: 'w-100',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        {
          action: ACTION.SHIELD,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  18: {
    id: 18,
    class: CLASS.BRUTE,
    name: 'Unstoppable Charge',
    level: 4,
    initiative: 86,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1],
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [2] },
        { action: ACTION.STUN, bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }] },
      ],
      consumed: true,
    },
  },
  19: {
    id: 19,
    class: CLASS.BRUTE,
    name: 'Devastating Hack',
    level: 4,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 8,
          augments: [1, 2],
          bonuses: [{ action: ACTION.XP, value: 3, className: 'large' }],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
  },
  20: {
    id: 20,
    class: CLASS.BRUTE,
    name: 'Whirlwind',
    level: 5,
    initiative: 28,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all adjacent enemies.\nGain (XP:1) for each enemy targeted.' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [2] },
        {
          action: ACTION.PUSH,
          value: 3,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  21: {
    id: 21,
    class: CLASS.BRUTE,
    name: 'Skirmishing Maneuver',
    level: 5,
    initiative: 29,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 2 },
        { action: ACTION.MOVE, value: 2, augments: [1] },
        { action: ACTION.ATTACK, value: 2 },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
  },
  22: {
    id: 22,
    class: CLASS.BRUTE,
    name: 'Quietus',
    level: 6,
    initiative: 57,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Kill one adjacent normal enemy\nwith STUN (Effect:Stun).',
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Add +1 (Symbol:Attack) to all\nyour Attacks this round.' },
            { action: ACTION.ROUND },
          ],
        },
      ],
    },
  },
  23: {
    id: 23,
    class: CLASS.BRUTE,
    name: 'Immovable Phalanx',
    level: 6,
    initiative: 17,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 4, augments: [1] },
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'You may treat all Move (Symbol:Move) abilities as\nAttack (Symbol:Attack) abilities of equal value.',
          className: 'small',
        },
        { action: ACTION.PERSISTENT },
      ],
      consumed: true,
    },
  },
  24: {
    id: 24,
    class: CLASS.BRUTE,
    name: 'Defensive Tactics',
    level: 7,
    initiative: 26,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
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
            { action: ACTION.IMMOBILIZE },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.RETALIATE, value: 1, bonuses: [{ action: ACTION.NOTE, value: 'Self' }] },
        {
          action: ACTION.SHIELD,
          value: 1,
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-1' },
          ],
        },
      ],
      consumed: true,
    },
  },
  25: {
    id: 25,
    class: CLASS.BRUTE,
    name: 'Crippling Offensive',
    level: 7,
    initiative: 33,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 6,
          augments: [1, 2],
          bonuses: [
            { action: ACTION.WOUND },
            { action: ACTION.STUN },
            { action: ACTION.XP, value: 3, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.NOTE,
          value: 'IMMOBILIZE (Effect:Immobilize) and\nPUSH (Effect:Push) 1',
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  26: {
    id: 26,
    class: CLASS.BRUTE,
    name: 'Frenzied Onslaught',
    level: 8,
    initiative: 41,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        { action: ACTION.ATTACK, value: 2, augments: [1] },
        { action: ACTION.MOVE, value: 2 },
        { action: ACTION.ATTACK, value: 2, augments: [2] },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value:
            'Add +3 Attack (Symbol:Attack) and (XP:1) to your attacks targeting enemies with DISARM (Effect:Disarm), IMMOBILIZE (Effect:Immobilize), or STUN (Effect:Stun) this round.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  27: {
    id: 27,
    class: CLASS.BRUTE,
    name: 'Selfish Retribution',
    level: 8,
    initiative: 12,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [{ action: ACTION.MOVE, value: 1, augments: [1] }, { action: ACTION.LOOT, value: 2 }],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.RETALIATE,
          value: 2,
          augments: [3],
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-1' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-1' },
          ],
        },
      ],
    },
  },
  28: {
    id: 28,
    class: CLASS.BRUTE,
    name: 'King of the Hill',
    level: 9,
    initiative: 39,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 6,
          augments: [1, 2],
          bonuses: [
            {
              action: ACTION.PUSH,
              value: 1,
            },
            { action: ACTION.NOTE, value: 'Target all adjacent enemies.\nGain (XP:1) for each enemy targeted.' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  29: {
    id: 29,
    class: CLASS.BRUTE,
    name: 'Face Your End',
    level: 9,
    initiative: 67,
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
            { action: ACTION.RANGE, value: 4 },
            { action: ACTION.TARGET, value: 3, augments: [2] },
            { action: ACTION.PULL, value: 3 },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Kill one adjacent normal or elite enemy.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
};

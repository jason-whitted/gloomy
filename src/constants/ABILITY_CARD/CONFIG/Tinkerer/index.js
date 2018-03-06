import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SUMMON } from '../../../SUMMON';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  30: {
    id: 30,
    class: CLASS.TINKERER,
    name: 'Proximity Mine',
    level: 1,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one 6 damage trap \n in an adjacent empty hex.',
          className: 'small mt-0',
        },
        {
          action: ACTION.NOTE,
          value: `Gain (XP:2) when the trap is sprung \n by an enemy.`,
          className: 'small',
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [1] }],
    },
  },
  31: {
    id: 31,
    class: CLASS.TINKERER,
    name: 'Harmless Contraption',
    level: 1,
    initiative: 74,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.DECOY },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.HEAL, value: 2, augments: [3] },
        { action: ACTION.RANGE, value: 3, augments: [4], className: 'small' },
      ],
    },
  },
  32: {
    id: 32,
    class: CLASS.TINKERER,
    name: 'Flamethrower',
    level: 1,
    initiative: 47,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.HEX, top: true },
      4: { id: 4, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          className: 'w-50 ml-3',
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.WOUND },
            {
              action: ACTION.FRAGMENT,
              bonuses: [
                { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
                { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block mx-1' },
              ],
            },
          ],
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G1R1A3R3A5R',
          augments: [2, 3],
          className: 'w-100',
          pos: { x: '60%', y: -10, w: 80, h: 80 },
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
          bonuses: [{ action: ACTION.NOTE, value: 'Affect self and all adjacent allies' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  33: {
    id: 33,
    class: CLASS.TINKERER,
    name: 'Hook Gun',
    level: 1,
    initiative: 72,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [1] },
            { action: ACTION.PULL, value: 2, augments: [2] },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.LOOT,
          value: 2,
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large d-inline-block mt-1' }],
        },
      ],
      consumed: true,
    },
  },
  34: {
    id: 34,
    class: CLASS.TINKERER,
    name: 'Ink Bomb',
    level: 1,
    initiative: 74,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          className: 'w-50 ml-3',
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            {
              action: ACTION.NOTE,
              value: 'Gain (XP:1) for each \n enemy targeted.',
              className: 'small',
            },
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-1' },
          ],
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R1R3R',
          className: 'w-100',
          pos: { x: '63%', y: 5, w: 60, h: 60 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  35: {
    id: 35,
    class: CLASS.TINKERER,
    name: 'Net Shooter',
    level: 1,
    initiative: 19,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          className: 'w-50 ml-3',
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.IMMOBILIZE },
            { action: ACTION.NOTE, value: 'Gain (XP:1) for each \n enemy targeted.' },
          ],
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'A3R1R3R',
          augments: [1],
          className: 'w-100',
          pos: { x: '55%', y: 15, w: 70, h: 70 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.IMMOBILIZE,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
        { action: ACTION.MOVE, value: 2, augments: [3] },
      ],
    },
  },
  36: {
    id: 36,
    class: CLASS.TINKERER,
    name: 'Stun Shot',
    level: 1,
    initiative: 20,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }, { action: ACTION.STUN }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  37: {
    id: 37,
    class: CLASS.TINKERER,
    name: 'Reinvigorating Elixir',
    level: 1,
    initiative: 37,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
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
        {
          action: ACTION.NOTE,
          value: 'One adjacent ally may Recover (Symbol:Recover) \n all their discarded cards.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'd-inline-block mx-1 large' },
      ],
      consumed: true,
    },
  },
  38: {
    id: 38,
    class: CLASS.TINKERER,
    name: 'Restorative Mist',
    level: 1,
    initiative: 17,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
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
        { action: ACTION.MOVE, value: 2, augments: [3] },
        {
          action: ACTION.HEAL,
          value: 1,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies', className: 'small' }],
        },
      ],
    },
  },
  39: {
    id: 39,
    class: CLASS.TINKERER,
    name: 'Energizing Tonic',
    level: 1,
    initiative: 16,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 2 }],
        },
        { action: ACTION.XP, value: 2, className: 'd-inline-block mx-1 large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 6,
          augments: [3],
        },
        { action: ACTION.XP, value: 1, className: 'd-inline-block mx-1 large' },
      ],
      consumed: true,
    },
  },
  40: {
    id: 40,
    class: CLASS.TINKERER,
    name: 'Enhancement Field',
    level: 1,
    initiative: 61,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'You and all adjacent allies add \n +1 Attack (Symbol:Attack) to all your Attacks this round.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  41: {
    id: 41,
    class: CLASS.TINKERER,
    name: 'Toxic Bolt',
    level: 1,
    initiative: 18,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [1] }, { action: ACTION.POISON }],
        },
        { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-1' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [3] }],
        },
        { action: ACTION.XP, value: 2, className: 'd-inline-block mx-1 large' },
      ],
      consumed: true,
    },
  },
  42: {
    id: 42,
    class: CLASS.TINKERER,
    name: 'Reviving Shock',
    level: 0,
    initiative: 34,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
      4: { id: 4, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.TARGET, value: 2, augments: [2] }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [3, 4],
          bonuses: [{ action: ACTION.RANGE, value: 2 }],
        },
        { action: ACTION.XP, value: 2, className: 'd-inline-block mx-1 large' },
      ],
      consumed: true,
    },
  },
  43: {
    id: 43,
    class: CLASS.TINKERER,
    name: 'Volatile Concoction',
    level: 0,
    initiative: 76,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one 2 damage POISON (Effect:Poison) \n trap in an adjacent empty hex.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'One ally within Range(Symbol:Range)2 may \n Recover (Symbol:Recover) one discarded card.',
          className: 'small',
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Up to two discarded \n cards instead.' }],
          className: 'mt-0',
        },
      ],
    },
  },
  44: {
    id: 44,
    class: CLASS.TINKERER,
    name: 'Potent Potables',
    level: 0,
    initiative: 46,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'On your next four heal actions, add +2 Heal (Symbol:Heal)',
          style: { fontSize: '0.75em' },
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
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [1] }],
    },
  },
  45: {
    id: 45,
    class: CLASS.TINKERER,
    name: 'Stamina Booster',
    level: 2,
    initiative: 48,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'One ally within Range(Symbol:Range)3 may \n Recover (Symbol:Recover) one lost card.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'd-inline-block mx-1 large' },
      ],
      noRecover: true,
      consumed: true,
    },
  },
  46: {
    id: 46,
    class: CLASS.TINKERER,
    name: 'Disorienting Flash',
    level: 2,
    initiative: 73,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.STUN,
          value: 0,
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [1] },
            { action: ACTION.TARGET, value: 2, augments: [2] },
          ],
        },
        { action: ACTION.XP, value: 2, className: 'd-inline-block mx-1 large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MUDDLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies', className: 'small' }],
        },
        { action: ACTION.MOVE, value: 2, augments: [3] },
      ],
    },
  },
  47: {
    id: 47,
    class: CLASS.TINKERER,
    name: 'Tinkerer’s Tools',
    level: 3,
    initiative: 26,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Disarm one adjacent trap.', className: 'small' },
        { action: ACTION.XP, value: 1, className: 'd-inline-block mx-1 large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one STUN (Effect:Stun) trap in \n an adjacent empty hex.',
          className: 'small',
        },
      ],
    },
  },
  48: {
    id: 48,
    class: CLASS.TINKERER,
    name: 'Crank Bow',
    level: 3,
    initiative: 66,
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
          bonuses: [{ action: ACTION.RANGE, value: 5 }],
        },
        { action: ACTION.XP, value: 2, className: 'd-inline-block mx-1 large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  49: {
    id: 49,
    class: CLASS.TINKERER,
    name: 'Dangerous Contraption',
    level: 4,
    initiative: 84,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.BATTLE_BOT },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [4] }],
    },
  },
  50: {
    id: 50,
    class: CLASS.TINKERER,
    name: 'Micro Bots',
    level: 4,
    initiative: 22,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 6,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [3] }, { action: ACTION.LOOT, value: 1 }],
      consumed: true,
    },
  },
  51: {
    id: 51,
    class: CLASS.TINKERER,
    name: 'Noxious Vials',
    level: 5,
    initiative: 75,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'One adjacent ally may Refresh (Symbol:ItemRefresh) \n one consumed (Slot:Sm) item.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          className: 'w-50 ml-3',
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.POISON },
            {
              action: ACTION.NOTE,
              value: 'Gain (XP:1) for each \n enemy targeted.',
            },
          ],
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R6A2R3R',
          augments: [2],
          className: 'w-100',
          pos: { x: '55%', y: 10, w: 75, h: 75 },
        },
      ],
      consumed: true,
    },
  },
  52: {
    id: 52,
    class: CLASS.TINKERER,
    name: 'Disintegration Beam',
    level: 5,
    initiative: 36,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          className: 'w-50 ml-3 small',
          value:
            'Kill all enemies in \n the targeted area whose hit \n point value is equal to \n or less than 5. \n Gain (XP:1) for each \n enemy killed.',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G1R1R1R1A',
          augments: [1],
          className: 'w-100',
          pos: { x: '60%', y: -15, w: 75, h: 75 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
        {
          action: ACTION.DISARM,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy', className: 'small' }],
        },
      ],
    },
  },
  53: {
    id: 53,
    class: CLASS.TINKERER,
    name: 'Gas Canister',
    level: 6,
    initiative: 71,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one 4 damage MUDDLE (Effect:Muddle) \n trap in an adjacent empty hex.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value:
            'At the end of your next four turns, one ally within \n Range(Symbol:Range)3 may Recover (Symbol:Recover) one discarded card.',
          style: { fontSize: '0.70em' },
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
  },
  54: {
    id: 54,
    class: CLASS.TINKERER,
    name: 'Auto Turret',
    level: 6,
    initiative: 34,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value:
            'At the end of your next five turns, perform an "Attack(Symbol:Attack)2, Range(Symbol:Range)5" action.',
          className: 'small',
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
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 4, augments: [2] }],
        },
      ],
    },
  },
  55: {
    id: 55,
    class: CLASS.TINKERER,
    name: 'Murderous Contraption',
    level: 7,
    initiative: 94,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY },
      5: { id: 5, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.KILL_BOT },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [4],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [5] }],
        },
      ],
    },
  },
  56: {
    id: 56,
    class: CLASS.TINKERER,
    name: 'Curative Aerosol',
    level: 7,
    initiative: 21,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF, multiple: true },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [1],
          className: 'mt-0',
          bonuses: [{ action: ACTION.RANGE, value: 1 }],
        },
        { action: ACTION.MOVE, value: 2 },
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [2],
          className: 'mt-0',
          bonuses: [{ action: ACTION.RANGE, value: 1 }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.TARGET, value: 2, augments: [4] }],
        },
        { action: ACTION.NOTE, value: '', className: 'small' },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
  57: {
    id: 57,
    class: CLASS.TINKERER,
    name: 'Jet Propulsion',
    level: 8,
    initiative: 38,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All summoned allies within \n Range(Symbol:Range)3 may perform',
          className: 'small',
        },
        { action: ACTION.MOVE, value: '+2' },
        {
          action: ACTION.NOTE,
          value: 'with you controlling the actions.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 8, augments: [1], bonuses: [{ action: ACTION.JUMP }] },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
  58: {
    id: 58,
    class: CLASS.TINKERER,
    name: 'Harsh Stimulants',
    level: 8,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 9,
          augments: [1, 2],
          bonuses: [{ action: ACTION.NOTE, value: 'Suffer 2 damage.', className: 'small' }],
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All adjacent allies add +2 Attack (Symbol:Attack) \n to all attacks this round.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'All adjacent allies suffer 2 damage.',
          className: 'small',
        },
        { action: ACTION.ROUND, className: 'large' },
      ],
    },
  },
  59: {
    id: 59,
    class: CLASS.TINKERER,
    name: 'Lethal Injection',
    level: 9,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Kill one adjacent normal or elite enemy.', className: 'small' },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [1] },
        {
          action: ACTION.POISON,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies', className: 'small' }],
        },
      ],
    },
  },
  60: {
    id: 60,
    class: CLASS.TINKERER,
    name: 'Chimeric Formula',
    level: 9,
    initiative: 43,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value:
            'One adjacent ally may Recover (Symbol:Recover) up to \n two of their lost cards, then lose two cards.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value:
            'One ally within Range(Symbol:Range)3 may \n Recover (Symbol:Recover) one lost card belonging \n to an ally adjacent to them.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
};

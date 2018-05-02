import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  205: {
    id: 205,
    class: CLASS.QUARTERMASTER,
    name: 'Restock',
    level: 1,
    initiative: 73,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All allies within Range (Symbol:Range)2\nRefresh (Symbol:ItemRefresh) one spent or consumed item.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.ATTACK, value: 3, augments: [1] }],
    },
  },
  206: {
    id: 206,
    class: CLASS.QUARTERMASTER,
    name: 'Oversized Pack',
    level: 1,
    initiative: 81,
    top: {
      actions: [{ action: ACTION.LOOT, value: 2 }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Refresh (Symbol:ItemRefresh) all your consumed (Slot:Sm) items.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
  207: {
    id: 207,
    class: CLASS.QUARTERMASTER,
    name: 'Sharpening Kit',
    level: 1,
    initiative: 23,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 2 }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `You and all allies within Range (Symbol:Range)2 add
                  +1 Attack (Symbol:Attack) to all your attacks this round.`,
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  208: {
    id: 208,
    class: CLASS.QUARTERMASTER,
    name: 'Proficiency',
    level: 1,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Once during each of your Attack actions,
                  if you use an item, add +1 Attack (Symbol:Attack) to
                  the entire attack action.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [1] }],
    },
  },
  209: {
    id: 209,
    class: CLASS.QUARTERMASTER,
    name: 'Iron Bulwark',
    level: 1,
    initiative: 19,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [{ action: ACTION.MUDDLE }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect self and all adjacent allies' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  210: {
    id: 210,
    class: CLASS.QUARTERMASTER,
    name: 'Hastened Step',
    level: 1,
    initiative: 26,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 2 },
        { action: ACTION.MOVE, value: 1, augments: [1] },
        { action: ACTION.ATTACK, value: 2 },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [2] }],
    },
  },
  211: {
    id: 211,
    class: CLASS.QUARTERMASTER,
    name: 'Cleaving Axe',
    level: 1,
    initiative: 52,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large' }],
          className: 'w-75',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G3R1R6R5A',
          augments: [1],
          className: 'w-100',
          pos: { x: '60%', y: '10%', w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  212: {
    id: 212,
    class: CLASS.QUARTERMASTER,
    name: 'Impaling Spear',
    level: 1,
    initiative: 48,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large' }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G1R1R1A',
          augments: [1],
          className: 'w-100',
          pos: { x: '60%', y: -10, w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  213: {
    id: 213,
    class: CLASS.QUARTERMASTER,
    name: 'Crippling Blow',
    level: 1,
    initiative: 44,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 4 }, { action: ACTION.IMMOBILIZE }],
        },
      ],
    },
  },
  214: {
    id: 214,
    class: CLASS.QUARTERMASTER,
    name: 'Crushing Hammer',
    level: 0,
    initiative: 17,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1, 2],
          bonuses: [{ action: ACTION.STUN }, { action: ACTION.XP, value: 2, className: 'large' }],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  215: {
    id: 215,
    class: CLASS.QUARTERMASTER,
    name: 'Scroll of Recall',
    level: 0,
    initiative: 98,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Refresh (Symbol:ItemRefresh) one of your consumed (Slot:Sm) items.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.PULL,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.TARGET, value: 3, augments: [2] }],
        },
      ],
    },
  },
  216: {
    id: 216,
    class: CLASS.QUARTERMASTER,
    name: 'Reserved Energy',
    level: 0,
    initiative: 88,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'One adjacent ally may Refresh (Symbol:ItemRefresh)\nall their spent items.',
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [1] }],
    },
  },
  217: {
    id: 217,
    class: CLASS.QUARTERMASTER,
    name: 'Reforge',
    level: 2,
    initiative: 95,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `You or one adjacent ally may Refresh (Symbol:ItemRefresh)
                  one spent or consumed (Slot:2H) or (Slot:1H) item.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Recover (Symbol:Recover) up to two of your discarded cards.',
          className: 'small',
        },
      ],
    },
  },
  218: {
    id: 218,
    class: CLASS.QUARTERMASTER,
    name: 'Bladed Boomerang',
    level: 2,
    initiative: 40,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.WOUND },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        { action: ACTION.ATTACK, value: 1, augments: [1] },
        { action: ACTION.MOVE, value: 2 },
      ],
    },
  },
  219: {
    id: 219,
    class: CLASS.QUARTERMASTER,
    name: 'Continual Supply',
    level: 3,
    initiative: 86,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `At the end of each of your turns, you may
                  discard a card to allow an adjacent ally to
                  Refresh (Symbol:ItemRefresh) one consumed (Slot:Sm) item.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Recover (Symbol:Recover) up to two of your lost cards.', className: 'small' },
      ],
      consumed: true,
      noRecover: true,
    },
  },
  220: {
    id: 220,
    class: CLASS.QUARTERMASTER,
    name: 'Scroll of Lightning',
    level: 3,
    initiative: 77,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.ELEMENT_LIGHT }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.PUSH,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }, { action: ACTION.ELEMENT_AIR }],
        },
      ],
    },
  },
  221: {
    id: 221,
    class: CLASS.QUARTERMASTER,
    name: 'Side Pouch',
    level: 4,
    initiative: 84,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'One adjacent ally may Refresh (Symbol:ItemRefresh)\nall spent and consumed items.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [1] }, { action: ACTION.LOOT, value: 1 }],
    },
  },
  222: {
    id: 222,
    class: CLASS.QUARTERMASTER,
    name: 'Giant Club',
    level: 4,
    initiative: 61,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [{ action: ACTION.ATTACK, value: 5 }, { action: ACTION.XP, value: 1, className: 'large' }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.MUDDLE }],
        },
      ],
    },
  },
  223: {
    id: 223,
    class: CLASS.QUARTERMASTER,
    name: 'Reinforced Steel',
    level: 5,
    initiative: 12,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'At the end of the round, Refresh (Symbol:ItemRefresh)\none of your spent items.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect self and all adjacent allies' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  224: {
    id: 224,
    class: CLASS.QUARTERMASTER,
    name: 'Scroll of Judgement',
    level: 5,
    initiative: 66,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'You and all enemies within\nRange (Symbol:Range)4 suffer 2 damage.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        {
          action: ACTION.STUN,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  225: {
    id: 225,
    class: CLASS.QUARTERMASTER,
    name: 'Catastrophic Bomb',
    level: 6,
    initiative: 46,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          bonuses: [{ action: ACTION.ATTACK, value: 3 }, { action: ACTION.XP, value: 1, className: 'large' }],
          className: 'w-50 ml-1',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R1R5R5R6R2R2R2R6R5R5R1A2A',
          augments: [1, 2],
          className: 'w-100',
          pos: { x: '50%', y: -15, w: 100, h: 100 },
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'You and all normal\nenemies in the targeted\narea suffer 10 damage.',
          className: 'small w-75',
          style: { marginLeft: -10 },
        },
        { action: ACTION.XP, value: 1, className: 'large w-75', style: { marginLeft: -10 } },
        { action: ACTION.HEX_PATTERN, value: 'G2R6R', className: 'w-100', pos: { x: '60%', y: '10%', w: 70, h: 70 } },
      ],
    },
  },
  226: {
    id: 226,
    class: CLASS.QUARTERMASTER,
    name: 'Quiver of Arrows',
    level: 6,
    initiative: 31,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `If any adjacent ally performs a ranged
                  attack, that ally gains Add Target (Symbol:Target)
                  for the attack.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 6, augments: [1] }],
    },
  },
  227: {
    id: 227,
    class: CLASS.QUARTERMASTER,
    name: 'Scroll of Blizzards',
    level: 7,
    initiative: 46,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.HEX, top: true },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY, multiple: true },
      5: { id: 5, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 2 }, { action: ACTION.ELEMENT_ICE }],
          className: 'w-50 ml-2',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'A1R5R1R2R1R5R1R2R6A',
          augments: [2, 3],
          className: 'w-100',
          pos: { x: '50%', y: -20, w: 85, h: 85 },
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.IMMOBILIZE,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
        { action: ACTION.MOVE, value: 2, augments: [5] },
        { action: ACTION.ELEMENT_DARK, className: 'mt-0' },
      ],
    },
  },
  228: {
    id: 228,
    class: CLASS.QUARTERMASTER,
    name: 'Refreshment',
    level: 7,
    initiative: 89,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Each time you long rest,\nRefresh (Symbol:ItemRefresh) one of your consumed items.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Any one ally may Recover (Symbol:Recover)\nall of their discarded cards.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
  229: {
    id: 229,
    class: CLASS.QUARTERMASTER,
    name: 'Portable Ballista',
    level: 8,
    initiative: 41,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.HEX, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          className: 'w-50 ml-2',
          style: { marginTop: 40 },
        },
        { action: ACTION.XP, value: 1, className: 'large w-50 ml-2 mt-0' },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G6R6R6R6R1A5R4A',
          augments: [2, 3],
          className: 'w-100',
          pos: { x: '50%', y: -15, w: 100, h: 100 },
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'During all your attacks this round,\nignore the Shield values of all your targets.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  230: {
    id: 230,
    class: CLASS.QUARTERMASTER,
    name: 'Fortified Position',
    level: 8,
    initiative: 10,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `At the end of your next five turns, perform a
          "Heal (Symbol:Heal)2, Affect all adjacent allies" action.`,
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
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.SHIELD,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  231: {
    id: 231,
    class: CLASS.QUARTERMASTER,
    name: 'Scroll of Annihilation',
    level: 9,
    initiative: 56,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, multiple: true },
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
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.DISARM,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
  232: {
    id: 232,
    class: CLASS.QUARTERMASTER,
    name: 'Bag of Holding',
    level: 9,
    initiative: 91,
    top: {
      actions: [{ action: ACTION.LOOT, value: 3 }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'You and all adjacent allies may Refresh (Symbol:ItemRefresh)\nall your consumed (Slot:Sm) items.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
};

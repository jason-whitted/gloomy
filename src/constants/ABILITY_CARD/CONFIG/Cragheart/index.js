import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  145: {
    id: 145,
    class: CLASS.CRAGHEART,
    name: 'Opposing Strike',
    level: 1,
    initiative: 46,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1, 2],
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large', style: { marginLeft: -40 } }],
          className: 'w-75',
        },
        { action: ACTION.HEX_PATTERN, value: 'R1G1R', pos: { x: '65%', y: '5%', w: 60, h: 60 }, className: 'w-100' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'On the next six melee attacks\ntargeting you, gain Retaliate (Symbol:Retaliate) 2.',
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
  146: {
    id: 146,
    class: CLASS.CRAGHEART,
    name: 'Crushing Grasp',
    level: 1,
    initiative: 35,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.IMMOBILIZE }, { action: ACTION.ELEMENT_EARTH }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
  },
  147: {
    id: 147,
    class: CLASS.CRAGHEART,
    name: 'Avalanche',
    level: 1,
    initiative: 75,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large' }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G2R6R5A',
          augments: [2],
          pos: { x: '60%', y: 0, w: 70, h: 70 },
          className: 'w-100',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), (XP:1)' }],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Create one single-hex obstacle\nin an adjacent empty hex', className: 'small' },
        { action: ACTION.ELEMENT_EARTH },
      ],
    },
  },
  148: {
    id: 148,
    class: CLASS.CRAGHEART,
    name: 'Rumbling Advance',
    level: 1,
    initiative: 29,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [2] }, { action: ACTION.ELEMENT_EARTH }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 2,
          augments: [3],
          bonuses: [
            { action: ACTION.NOTE, value: 'All adjacent allies and enemies\nsuffer 1 damage.' },
            { action: ACTION.ELEMENT_EARTH },
          ],
        },
      ],
    },
  },
  149: {
    id: 149,
    class: CLASS.CRAGHEART,
    name: 'Massive Boulder',
    level: 1,
    initiative: 87,
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
          bonuses: [
            {
              action: ACTION.RANGE,
              value: 3,
              augments: [2],
            },
            { action: ACTION.NOTE, value: 'All allies and enemies adjacent to the\ntarget suffer 1 damage.' },
            { action: ACTION.ELEMENT_EARTH },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  150: {
    id: 150,
    class: CLASS.CRAGHEART,
    name: 'Backup Ammunition',
    level: 1,
    initiative: 77,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'On your next four ranged Attack actions,\ngain Add Target (Symbol:Target).',
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
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [1] }],
    },
  },
  151: {
    id: 151,
    class: CLASS.CRAGHEART,
    name: 'Rock Tunnel',
    level: 1,
    initiative: 41,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Destroy one adjacent obstacle.', className: 'small' },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 5,
          augments: [1],
          bonuses: [{ action: ACTION.JUMP }],
        },
        {
          action: ACTION.IMMOBILIZE,
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies moved through' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
  },
  152: {
    id: 152,
    class: CLASS.CRAGHEART,
    name: 'Unstable Upheaval',
    level: 1,
    initiative: 13,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
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
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Target all enemies within\nRange (Symbol:Range) 2 instead, (XP:1)',
            },
          ],
          className: 'mt-0',
        },
        {
          action: ACTION.NOTE,
          value: 'All adjacent allies suffer 2 damage.',
          className: 'small mt-0',
        },
        { action: ACTION.XP, value: 1, className: 'large mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All allies suffer 1 damage\nand gain Shield (Symbol:Shield) 2.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block ml-1' },
        { action: ACTION.ROUND, className: 'd-inline-block ml-1' },
      ],
      consumed: true,
    },
  },
  153: {
    id: 153,
    class: CLASS.CRAGHEART,
    name: 'Crater',
    level: 1,
    initiative: 61,
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
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'PUSH (Effect:Push) 2, (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All adjacent allies and enemies\nsuffer 1 damage.', className: 'small' },
        {
          action: ACTION.MOVE,
          value: 4,
          augments: [3],
          bonuses: [
            { action: ACTION.JUMP },
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: 0, right: '10%' } },
          ],
          className: 'mt-0 position-relative',
        },
        {
          action: ACTION.NOTE,
          value: 'All adjacent allies and enemies\nsuffer 1 damage.',
          className: 'small mt-1',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '2 damage instead, (XP:1)' }],
          style: { marginTop: -5, marginLeft: -20 },
        },
      ],
      consumed: true,
    },
  },
  154: {
    id: 154,
    class: CLASS.CRAGHEART,
    name: 'Dirt Tornado',
    level: 1,
    initiative: 82,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 2 }],
          className: 'w-75',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R1R3R4R5R6R1R',
          pos: { x: '60%', y: -5, w: 80, h: 80 },
          className: 'w-100',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), (XP:1)' }],
          className: 'w-75',
          style: { marginLeft: -10 },
        },
        {
          action: ACTION.NOTE,
          value: 'MUDDLE (Effect:Muddle) all allies and enemies\nin the targeted area.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [2] }],
    },
  },
  155: {
    id: 155,
    class: CLASS.CRAGHEART,
    name: 'Earthen Clod',
    level: 1,
    initiative: 38,
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
          bonuses: [{ action: ACTION.RANGE, value: 5 }],
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'IMMOBILIZE (Effect:Immobilize), (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [3] }],
        },
      ],
    },
  },
  156: {
    id: 156,
    class: CLASS.CRAGHEART,
    name: 'Heaving Swing',
    level: 0,
    initiative: 57,
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
          bonuses: [
            {
              action: ACTION.PUSH,
              value: 1,
              augments: [2],
            },
            {
              action: ACTION.NOTE,
              value: `You may push the target into a hex with an
                      obstacle. In this case, destroy the obstacle,
                      the target suffers 2 damage,
                      and you gain (XP:1).`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Add +1 Attack (Symbol:Attack) to all your
                  ranged attacks this round.`,
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  157: {
    id: 157,
    class: CLASS.CRAGHEART,
    name: 'Forceful Storm',
    level: 0,
    initiative: 53,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.DISARM },
            { action: ACTION.NOTE, value: 'Gain (XP:1) for each\nenemy targeted' },
            { action: ACTION.ELEMENT_AIR },
          ],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [2],
          pos: { x: '60%', y: '10%', w: 70, h: 70 },
          className: 'w-100',
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Add +2 Attack (Symbol:Attack) to all your\nmelee attacks this round.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  158: {
    id: 158,
    class: CLASS.CRAGHEART,
    name: "Nature's Lift",
    level: 0,
    initiative: 64,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [2] },
            { action: ACTION.TARGET, value: 2, augments: [3] },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `On your next six ranged Attack actions when
              (Element:Air) is Strong, (Element:Air:Consume) to add +2 Range (Symbol:Range).`,
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
  159: {
    id: 159,
    class: CLASS.CRAGHEART,
    name: 'Explosive Punch',
    level: 2,
    initiative: 28,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Destroy one adjacent obstacle of any size.', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies adjacent to the destroyed obstacle' },
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  160: {
    id: 160,
    class: CLASS.CRAGHEART,
    name: 'Sentient Growth',
    level: 2,
    initiative: 78,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.HEX, top: true },
      4: { id: 4, ...AUGMENT_SLOT.SELF, multiple: true },
      5: { id: 5, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          className: 'w-75',
        },
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all allies\nin the targeted area.' }],
          className: 'w-75',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [3],
          pos: { x: '60%', y: '20%', w: 70, h: 70 },
          className: 'w-100',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2 },
        {
          action: ACTION.HEAL,
          value: 1,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Affects all adjacent allies' }],
        },
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [5],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
  161: {
    id: 161,
    class: CLASS.CRAGHEART,
    name: 'Clear the Way',
    level: 3,
    initiative: 43,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Move one adjacent single-hex obstacle to
                  an empty hex within Range (Symbol:Range) 4.`,
          className: 'small',
        },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies adjacent\nto the moved obstacle' },
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: 0, right: 0 } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 5,
          augments: [2, 3],
          bonuses: [{ action: ACTION.JUMP }],
        },
        {
          action: ACTION.NOTE,
          value: 'Destroy all obstacles and\ndisarm all traps moved through.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large mt-0' },
      ],
      consumed: true,
    },
  },
  162: {
    id: 162,
    class: CLASS.CRAGHEART,
    name: 'Blunt Force',
    level: 3,
    initiative: 21,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1, 2],
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+4 Attack (Symbol:Attack), (XP:2)' }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [3] },
        {
          action: ACTION.RETALIATE,
          value: 1,
          augments: [4],
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-1' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-1' },
          ],
        },
      ],
    },
  },
  163: {
    id: 163,
    class: CLASS.CRAGHEART,
    name: 'Rock Slide',
    level: 4,
    initiative: 81,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create three single-hex obstacles\nin empty hexes within Range (Symbol:Range) 4.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'All allies and enemies adjacent\nto a created obstacle suffer 2 damage',
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          value: '',
          bonuses: [
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 6,
          bonuses: [{ action: ACTION.NOTE, value: 'The movement must be in a straight line.' }],
        },
      ],
    },
  },
  164: {
    id: 164,
    class: CLASS.CRAGHEART,
    name: 'Kinetic Assault',
    level: 4,
    initiative: 19,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [{ action: ACTION.MOVE, value: 1, augments: [1] }, { action: ACTION.ATTACK, value: 4, augments: [2] }],
    },
    bottom: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 3,
          augments: [3],
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [4] },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-1' },
          ],
        },
      ],
      consumed: true,
    },
  },
  165: {
    id: 165,
    class: CLASS.CRAGHEART,
    name: 'Petrify',
    level: 5,
    initiative: 47,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Kill one normal enemy within Range (Symbol:Range) 4.', className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'Create one single-hex obstacle in\nthe hex in which the enemy died.',
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [1] },
        { action: ACTION.IMMOBILIZE, bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }] },
      ],
    },
  },
  166: {
    id: 166,
    class: CLASS.CRAGHEART,
    name: 'Stone Pummel',
    level: 5,
    initiative: 32,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.HEX, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.MUDDLE }, { action: ACTION.XP, value: 1, className: 'large' }],
          className: 'w-50 pl-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'A2R6R2G2R6R2A',
          augments: [2, 3],
          pos: { x: '50%', y: '10%', w: 100, h: 100 },
          className: 'w-100',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `On your next four melee attacks, if possible,
                 destroy an adjacent obstacle for +3 Attack (Symbol:Attack)`,
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
  167: {
    id: 167,
    class: CLASS.CRAGHEART,
    name: 'Dig Pit',
    level: 6,
    initiative: 78,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one 2 damage STUN (Effect:Stun) trap\nin an adjacent empty hex.',
          className: 'small',
        },
        { action: ACTION.MUDDLE, bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }] },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        { action: ACTION.INVISIBLE, bonuses: [{ action: ACTION.NOTE, value: 'Self' }] },
      ],
    },
  },
  168: {
    id: 168,
    class: CLASS.CRAGHEART,
    name: 'Cataclysm',
    level: 6,
    initiative: 26,
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
          className: 'w-75',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Attack (Symbol:Attack), (XP:2)' }],
          className: 'w-75 mt-0',
          style: { marginLeft: -10 },
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G1R3R4R2R1R6R',
          pos: { x: '65%', y: -10, w: 70, h: 70 },
          className: 'w-100',
        },
        {
          action: ACTION.NOTE,
          value: 'IMMOBILIZE (Effect:Immobilize) all allies and enemies\nin the targeted area.',
          className: 'small',
          style: { marginTop: 20 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [2],
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_MOVE, value: 3, className: 'mt-2' }],
        },
      ],
    },
  },
  169: {
    id: 169,
    class: CLASS.CRAGHEART,
    name: 'Meteor',
    level: 7,
    initiative: 23,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one three-hex triangular obstacle\nin empty hexes within Range (Symbol:Range) 3.',
          className: 'small',
        },
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.IMMOBILIZE },
            { action: ACTION.NOTE, value: 'Target all enemies adjacent to the obstacle' },
          ],
          className: 'mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-1' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 4,
          augments: [2],
          bonuses: [{ action: ACTION.JUMP }],
        },
      ],
    },
  },
  170: {
    id: 170,
    class: CLASS.CRAGHEART,
    name: 'Brutal Momentum',
    level: 7,
    initiative: 52,
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
          bonuses: [
            {
              action: ACTION.PUSH,
              value: 2,
              augments: [2],
            },
            {
              action: ACTION.NOTE,
              value: `For each hex you cannot push the target
                      because of a wall or obstacle, the target
                      suffers 2 damage and you gain (XP:1).`,
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Add +1 Attack (Symbol:Attack) to all\nranged attacks this round.',
          className: 'small',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Add +2 Attack (Symbol:Attack) instead, (XP:1)' }],
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  171: {
    id: 171,
    class: CLASS.CRAGHEART,
    name: 'Rocky End',
    level: 8,
    initiative: 37,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Destroy all obstacles within Range (Symbol:Range) 2.', className: 'small' },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Range (Symbol:Range) 3 instead, (XP:1)' }],
          style: { marginTop: -5 },
        },
        {
          action: ACTION.ATTACK,
          value: 'X',
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'where X is equal to twice the number of\nhexes the destroyed obstacles occupied.',
              className: 'small mt-1',
            },
            { action: ACTION.XP, value: 2, className: 'large position-absolute', style: { top: -10, right: 5 } },
          ],
          className: 'mt-0 position-relative',
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 6,
          bonuses: [{ action: ACTION.NOTE, value: 'The Move action must end in a hex\nadjacent to an obstacle.' }],
        },
      ],
    },
  },
  172: {
    id: 172,
    class: CLASS.CRAGHEART,
    name: 'Lumbering Bash',
    level: 8,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        { action: ACTION.ATTACK, value: 5, augments: [2] },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-1' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `At the start of your next five turns,
                 perform a "Heal (Symbol:Heal) 2, Range (Symbol:Range) 2" action.`,
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
  173: {
    id: 173,
    class: CLASS.CRAGHEART,
    name: 'Blind Destruction',
    level: 9,
    initiative: 74,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          bonuses: [
            {
              action: ACTION.RANGE,
              value: 4,
              augments: [1],
            },
            {
              action: ACTION.NOTE,
              value: `All allies and enemies adjacent to
                      the target suffer damage equal to
                      the damage the target suffered.`,
            },
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
            {
              action: ACTION.NOTE,
              value: `All allies and enemies adjacent to any
                      hexes you enter during the movement
                      suffer 2 damage.`,
            },
            { action: ACTION.ELEMENT_EARTH },
          ],
        },
      ],
    },
  },
  174: {
    id: 174,
    class: CLASS.CRAGHEART,
    name: 'Pulverize',
    level: 9,
    initiative: 31,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY, multiple: true },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.PUSH, value: 2, augments: [2] },
            { action: ACTION.NOTE, value: 'Target all adjacent enemies' },
          ],
        },
        {
          action: ACTION.NOTE,
          value: `You may push the targets into hexes
          containing obstacles. In each case, the
          obstacle is destroyed, the target suffers 2
          damage, and you gain (XP:1).`,
          className: 'small',
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
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
        {
          action: ACTION.MOVE,
          value: 5,
          bonuses: [
            { action: ACTION.JUMP },
            { action: ACTION.XP, value: 2, className: 'large position-absolute', style: { top: 0, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies', style: { marginLeft: -10 } }],
        },
      ],
      consumed: true,
    },
  },
};

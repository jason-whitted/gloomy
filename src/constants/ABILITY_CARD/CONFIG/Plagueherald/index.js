import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  289: {
    id: 289,
    class: CLASS.PLAGUEHERALD,
    name: 'Vile Pestilence',
    level: 1,
    initiative: 61,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          className: 'w-75',
        },
        {
          action: ACTION.NOTE,
          value: 'POISON (Effect:Poison) all allies and enemies\nin the targeted area.',
          className: 'small mt-4',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R1R3R4R5R6R1R',
          className: 'w-100',
          pos: { x: '60%', y: -15, w: 80, h: 80 },
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [1] }],
    },
  },
  290: {
    id: 290,
    class: CLASS.PLAGUEHERALD,
    name: 'Grasping Vermin',
    level: 1,
    initiative: 69,
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 0,
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.IMMOBILIZE }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R1R3R4R5R6R1R',
          className: 'w-100',
          pos: { x: '60%', y: '10%', w: 80, h: 80 },
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.NOTE,
          value: 'Deduce -1 Range (Symbol:Range) from\nall your ranged attacks.',
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large d-inline-block' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block' },
      ],
      consumed: true,
    },
  },
  291: {
    id: 291,
    class: CLASS.PLAGUEHERALD,
    name: 'Wretched Swarm',
    level: 1,
    initiative: 84,
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
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.STUN },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R1R3R4R5R6R1R',
          className: 'w-100',
          pos: { x: '55%', y: '10%', w: 80, h: 80 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  292: {
    id: 292,
    class: CLASS.PLAGUEHERALD,
    name: 'Spread the Plague',
    level: 1,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Once during each of your attack actions,
          you may POISON (Effect:Poison) one ally within
          Range (Symbol:Range)2 (or deal 3 damage if the ally
            is already poisoned) to add +1 Attack (Symbol:Attack)
            to the entire Attack action.`,
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
          action: ACTION.MOVE,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }],
        },
      ],
    },
  },
  293: {
    id: 293,
    class: CLASS.PLAGUEHERALD,
    name: 'Biting Gnats',
    level: 1,
    initiative: 47,
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
            { action: ACTION.RANGE, value: 4 },
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
  294: {
    id: 294,
    class: CLASS.PLAGUEHERALD,
    name: 'Winged Congregation',
    level: 1,
    initiative: 16,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Gain Flying (Symbol:Flying)', className: 'small' },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_AIR, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        {
          action: ACTION.HEAL,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }],
        },
      ],
    },
  },
  295: {
    id: 295,
    class: CLASS.PLAGUEHERALD,
    name: 'Creeping Curse',
    level: 1,
    initiative: 72,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.CURSE }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
        {
          action: ACTION.CURSE,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  296: {
    id: 296,
    class: CLASS.PLAGUEHERALD,
    name: 'Gathering Doom',
    level: 1,
    initiative: 76,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.CURSE }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.LOOT, value: 2 },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_AIR, bonuses: [], className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  297: {
    id: 297,
    class: CLASS.PLAGUEHERALD,
    name: 'Paralyzing Bite',
    level: 1,
    initiative: 31,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.STUN },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 6,
          augments: [2],
          bonuses: [{ action: ACTION.JUMP }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_AIR, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  298: {
    id: 298,
    class: CLASS.PLAGUEHERALD,
    name: 'Foul Wind',
    level: 1,
    initiative: 35,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `During your next six Attack actions
                  where (Element:Air) is Strong or Waning, you may (Element:Air:Consume)
                  to add +1 Attack (Symbol:Attack) to the entire Attack action.`,
          style: { fontSize: '0.75em', lineHeight: '1em' },
        },
        {
          action: ACTION.SYMBOLS,
          text: '',
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
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
  },
  299: {
    id: 299,
    class: CLASS.PLAGUEHERALD,
    name: 'Scattered Terror',
    level: 1,
    initiative: 11,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 4, augments: [2] },
            { action: ACTION.TARGET, value: 3, augments: [3] },
            { action: ACTION.PIERCE, augments: [4] },
          ],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_AIR, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All attacks targeting you\ngain Disadvantage this round.', className: 'small' },
        { action: ACTION.ROUND },
      ],
    },
  },
  300: {
    id: 300,
    class: CLASS.PLAGUEHERALD,
    name: 'Epidemic',
    level: 0,
    initiative: 43,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 2 },
            { action: ACTION.TARGET, value: 2, augments: [2] },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'After each of your Move actions,\nPOISON (Effect:Poison) all adjacent allies and enemies',
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
  },
  301: {
    id: 301,
    class: CLASS.PLAGUEHERALD,
    name: 'Virulent Strain',
    level: 0,
    initiative: 50,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Remove POISON (Effect:Poison) from any one\nenemy to cause it to suffer 4 damage.',
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.POISON,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies adjacent\nto a poisoned enemy' }],
        },
      ],
    },
  },
  302: {
    id: 302,
    class: CLASS.PLAGUEHERALD,
    name: 'Blistering Vortex',
    level: 0,
    initiative: 21,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 1 },
            {
              action: ACTION.FRAGMENT,
              bonuses: [
                { action: ACTION.ELEMENT_AIR, className: 'd-inline-block mx-2' },
                { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
              ],
            },
          ],
          className: 'w-75',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [2],
          className: 'w-100',
          pos: { x: '60%', y: '20%', w: 70, h: 70 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [3] },
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  303: {
    id: 303,
    class: CLASS.PLAGUEHERALD,
    name: 'Under the Skin',
    level: 2,
    initiative: 59,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1, 2],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.PIERCE, value: 3 },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  304: {
    id: 304,
    class: CLASS.PLAGUEHERALD,
    name: 'Rot Maggots',
    level: 2,
    initiative: 69,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 2 }, { action: ACTION.POISON }],
        },
        { action: ACTION.NOTE, value: 'POISON (Effect:Poison) all allies adjacent to the target.', className: 'small' },
        { action: ACTION.XP, value: 1, className: 'large mt-0' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 2,
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [2] },
            { action: ACTION.TARGET, value: 2, augments: [3] },
          ],
        },
      ],
    },
  },
  305: {
    id: 305,
    class: CLASS.PLAGUEHERALD,
    name: 'Succumb to the Gift',
    level: 3,
    initiative: 70,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Kill a normal or elite poisoned\nenemy within Range (Symbol:Range) 3.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.BLESS,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all poisoned allies' }],
        },
      ],
    },
  },
  306: {
    id: 306,
    class: CLASS.PLAGUEHERALD,
    name: 'Fetid Flurry',
    level: 3,
    initiative: 26,
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
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.CURSE }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.ELEMENT_AIR }],
        },
      ],
    },
  },
  307: {
    id: 307,
    class: CLASS.PLAGUEHERALD,
    name: 'Storm of Wings',
    level: 4,
    initiative: 91,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          bonuses: [{ action: ACTION.RANGE, value: 4 }],
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.NOTE, value: 'Additionally, target all enemies on\nthe path to the primary target' },
          ],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [1] }],
    },
  },
  308: {
    id: 308,
    class: CLASS.PLAGUEHERALD,
    name: 'Nightmarish Affliction',
    level: 4,
    initiative: 43,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.TARGET, value: 2, augments: [2] },
            { action: ACTION.POISON },
            { action: ACTION.CURSE },
            { action: ACTION.ELEMENT_DARK },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.IMMOBILIZE,
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.TARGET, value: 2, augments: [3] }],
        },
      ],
    },
  },
  309: {
    id: 309,
    class: CLASS.PLAGUEHERALD,
    name: 'Accelerated End',
    level: 5,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'All poisoned enemies suffer 1 damage.', className: 'small' },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '2 damage instead, (XP:1).' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.POISON,
          bonuses: [{ action: ACTION.RANGE, value: 5 }, { action: ACTION.TARGET, value: 3, augments: [1] }],
        },
      ],
    },
  },
  310: {
    id: 310,
    class: CLASS.PLAGUEHERALD,
    name: 'Willing Sacrifice',
    level: 5,
    initiative: 84,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Once during each of your Move actions,
          you may suffer 1 damage to
          deal 3 damage to one poisoned enemy.`,
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
          value: 'All poisoned allies may Recover (Symbol:Recover)\nup to two discarded cards.',
          className: 'small',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Up to three discarded\ncards instead, (XP:1)' }],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 1, className: 'large mt-0' },
      ],
      consumed: true,
    },
  },
  311: {
    id: 311,
    class: CLASS.PLAGUEHERALD,
    name: 'Stinging Cloud',
    level: 6,
    initiative: 66,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            {
              action: ACTION.ELEMENT_DARK_CONSUME,
              condition: true,
              bonuses: [{ action: ACTION.NOTE, value: 'MUDDLE (Effect:Muddle), (XP:1)' }],
              className: 'mt-0',
            },
          ],
          className: 'w-75',
          style: { marginLeft: -15 },
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R1R3R4R5R6R1R',
          className: 'w-100',
          pos: { x: '60%', y: '10%', w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  312: {
    id: 312,
    class: CLASS.PLAGUEHERALD,
    name: 'Black Tides',
    level: 6,
    initiative: 37,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [3] }, { action: ACTION.ELEMENT_AIR }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 4,
          augments: [4],
          bonuses: [{ action: ACTION.ELEMENT_DARK }],
        },
      ],
    },
  },
  313: {
    id: 313,
    class: CLASS.PLAGUEHERALD,
    name: 'Airborne Toxin',
    level: 7,
    initiative: 57,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'CURSE (Effect:Curse) and MUDDLE (Effect:Muddle)',
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range)2' }],
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Range (Symbol:Range), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.POISON,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_AIR, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  314: {
    id: 314,
    class: CLASS.PLAGUEHERALD,
    name: 'Baneful Hex',
    level: 7,
    initiative: 33,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `If a CURSE (Effect:Curse) causes an enemy to
                  deal no damage during its attack,
                  this enemy suffers 3 damage.`,
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
        { action: ACTION.MOVE, value: 3 },
        {
          action: ACTION.CURSE,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
      ],
    },
  },
  315: {
    id: 315,
    class: CLASS.PLAGUEHERALD,
    name: 'Spreading Scourge',
    level: 8,
    initiative: 71,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, multiple: true },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.MUDDLE }],
          className: 'w-50 ml-2',
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
          action: ACTION.HEAL,
          value: 2,
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [3] },
            { action: ACTION.TARGET, value: 3, augments: [4] },
          ],
        },
      ],
    },
  },
  316: {
    id: 316,
    class: CLASS.PLAGUEHERALD,
    name: 'Grim Bargain',
    level: 8,
    initiative: 46,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `During your next six Attack actions,
                  CURSE (Effect:Curse) one ally within Range (Symbol:Range)2 to
                  gain two Add Target (Symbol:Target) effects for the action`,
          className: 'small',
        },
        {
          action: ACTION.SYMBOLS,
          text: '',
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
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MUDDLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: 'Double the value of your next Attack action this round.', className: 'small' },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  317: {
    id: 317,
    class: CLASS.PLAGUEHERALD,
    name: 'Mass Extinction',
    level: 9,
    initiative: 94,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'CURSE (Effect:Curse) and WOUND (Effect:Wound)',
          bonuses: [{ action: ACTION.NOTE, value: 'Target all allies and enemies' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_AIR, className: 'd-inline-block mx-2' },
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All poisoned enemies suffer 2 damage.', className: 'small' },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Suffer 1 additional damage, (XP:1).' }],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Suffer 1 additional damage, (XP:1).' }],
          className: 'mt-0',
        },
      ],
    },
  },
  318: {
    id: 318,
    class: CLASS.PLAGUEHERALD,
    name: 'Convert the Flock',
    level: 9,
    initiative: 29,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [2] },
            { action: ACTION.TARGET, value: 3, augments: [3] },
            { action: ACTION.CURSE },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All poisoned allies suffer 2 damage.', className: 'small' },
        {
          action: ACTION.NOTE,
          value: `For each two allies damage,
                  add +1 Attack (Symbol:Attack) to all your
                  attacks this round and gain (XP:1).`,
          className: 'small',
        },
        { action: ACTION.ROUND, className: 'mt-0' },
      ],
    },
  },
};

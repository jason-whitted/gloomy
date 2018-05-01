import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SUMMON } from '../../../SUMMON';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  447: {
    id: 447,
    class: CLASS.BEAST_TYRANT,
    name: 'Disorienting Roar',
    level: 1,
    initiative: 17,
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        {
          action: ACTION.NOTE,
          value: 'MUDDLE (Effect:Muddle) and\nIMMOBILIZE (Effect:Immobilize)',
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range) 2' }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.NOTE, value: 'Swap the positions of any two figures.', className: 'small' }],
      consumed: true,
    },
  },
  448: {
    id: 448,
    class: CLASS.BEAST_TYRANT,
    name: 'Spirit Swap',
    level: 1,
    initiative: 22,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE, top: true },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.MOVE, value: 2, augments: [1, 2] },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.NOTE, value: 'Swap the positions of any two enemies.', className: 'small' }],
    },
  },
  449: {
    id: 449,
    class: CLASS.BEAST_TYRANT,
    name: 'Venomous Ally',
    level: 1,
    initiative: 79,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.GREEN_ADDER },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [{ action: ACTION.RANGE, value: 4, augments: [4] }, { action: ACTION.POISON }],
        },
      ],
    },
  },
  450: {
    id: 450,
    class: CLASS.BEAST_TYRANT,
    name: 'Summon Tattered Wolf',
    level: 1,
    initiative: 81,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.TATTERED_WOLF },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [4] }],
    },
  },
  451: {
    id: 451,
    class: CLASS.BEAST_TYRANT,
    name: 'Concentrated Rage',
    level: 1,
    initiative: 51,
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
          bonuses: [{ action: ACTION.RANGE, value: 4, augments: [2] }, { action: ACTION.DISARM }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Before your bear acts, you may choose to forego
                  the top action of your turn to add +3 Attack (Symbol:Attack)
                  to your bear's attacks for the round.`,
          style: { fontSize: '0.75em', lineHeight: '1.0em' },
        },
        {
          action: ACTION.NOTE,
          value: `Before your bear acts, you may choose to forego
                  the bottom action of your turn to add
                  +3 Move (Symbol:Move) to your bear's moves for the round.`,
          style: { fontSize: '0.75em', lineHeight: '1.0em' },
        },
        { action: ACTION.PERSISTENT, className: 'text-left ml-4' },
      ],
      consumed: true,
    },
  },
  452: {
    id: 452,
    class: CLASS.BEAST_TYRANT,
    name: 'Disappearing Wounds',
    level: 1,
    initiative: 23,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.ATTACK, value: 2, augments: [2, 3] },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  453: {
    id: 453,
    class: CLASS.BEAST_TYRANT,
    name: 'Patch Fur',
    level: 1,
    initiative: 20,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'All summoned allies gain Shield (Symbol:Shield) 1.', className: 'small' },
        { action: ACTION.ROUND },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [1, 2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
  },
  454: {
    id: 454,
    class: CLASS.BEAST_TYRANT,
    name: 'Maul',
    level: 1,
    initiative: 14,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.ATTACK, value: 4, augments: [1, 2] },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.SHIELD,
          value: 1,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect one adjacent ally' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  455: {
    id: 455,
    class: CLASS.BEAST_TYRANT,
    name: 'Forceful Swipe',
    level: 1,
    initiative: 35,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.XP, value: 1, className: 'large' }],
          className: 'w-50 ml-2',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G3R1R6R5A',
          augments: [2],
          className: 'w-100',
          pos: { x: '55%', y: '10%', w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.PUSH,
          value: 2,
          augments: [4],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target one adjacent enemy' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  456: {
    id: 456,
    class: CLASS.BEAST_TYRANT,
    name: 'Howling Bolts',
    level: 1,
    initiative: 47,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          bonuses: [{ action: ACTION.RANGE, value: 4 }, { action: ACTION.TARGET, value: 3, augments: [1] }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.MOVE, value: 5, augments: [2] },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
  },
  457: {
    id: 457,
    class: CLASS.BEAST_TYRANT,
    name: 'Soaring Ally',
    level: 0,
    initiative: 77,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.RED_FALCON },
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
      actions: [{ action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT }, { action: ACTION.LOOT, value: 1 }],
    },
  },
  458: {
    id: 458,
    class: CLASS.BEAST_TYRANT,
    name: 'Focused Aggression',
    level: 0,
    initiative: 31,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [1] }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.ATTACK, value: 5, augments: [2, 3] },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  459: {
    id: 459,
    class: CLASS.BEAST_TYRANT,
    name: 'Borrowed Essence',
    level: 0,
    initiative: 56,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Attack (Symbol:Attack), (XP:1)' }],
          className: 'mt-0',
        },
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [2],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Heal (Symbol:Heal), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Redistribute all damage taken by you and\nall summoned allies however you like.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'No figure may receive more damage\nthan they have hit points.',
          className: 'small',
        },
      ],
    },
  },
  460: {
    id: 460,
    class: CLASS.BEAST_TYRANT,
    name: 'Energizing Strike',
    level: 2,
    initiative: 29,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.ATTACK, value: 4, augments: [1, 2] },
        {
          action: ACTION.STRENGTHEN,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 1,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all allies' }],
        },
      ],
    },
  },
  461: {
    id: 461,
    class: CLASS.BEAST_TYRANT,
    name: 'Earthen Spikes',
    level: 2,
    initiative: 11,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          bonuses: [
            { action: ACTION.RANGE, value: 2, augments: [1] },
            { action: ACTION.IMMOBILIZE },
            { action: ACTION.ELEMENT_EARTH },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 2,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all summoned allies' }],
        },
        {
          action: ACTION.RETALIATE,
          value: 2,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all summoned allies' }],
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
  },
  462: {
    id: 462,
    class: CLASS.BEAST_TYRANT,
    name: 'Vicious Ally',
    level: 3,
    initiative: 86,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY, multiple: true },
      5: { id: 5, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.SWAMP_ALLIGATOR },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [4],
          bonuses: [
            { action: ACTION.TARGET, value: 2, augments: [5] },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  463: {
    id: 463,
    class: CLASS.BEAST_TYRANT,
    name: 'Unstoppable Beast',
    level: 3,
    initiative: 32,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.ATTACK, value: 3, augments: [1], className: 'w-75' },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), (XP:1)' }],
          className: 'w-75',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G3R1R6R5A',
          augments: [2],
          className: 'w-100',
          pos: { x: '65%', y: 0, w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [3] }],
    },
  },
  464: {
    id: 464,
    class: CLASS.BEAST_TYRANT,
    name: 'Ancient Ward',
    level: 4,
    initiative: 19,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 0,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 4 },
            { action: ACTION.TARGET, value: 2, augments: [2] },
            { action: ACTION.DISARM },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 4 }],
        },
      ],
    },
  },
  465: {
    id: 465,
    class: CLASS.BEAST_TYRANT,
    name: 'Punch Through',
    level: 4,
    initiative: 44,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.PIERCE, value: 4, augments: [2] },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.NOTE,
          value: 'Add +1 Attack (Symbol:Attack) to all\n(ClassAbility:BT:Command) actions this round.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  466: {
    id: 466,
    class: CLASS.BEAST_TYRANT,
    name: 'Rampage',
    level: 5,
    initiative: 34,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE, top: true },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.ATTACK, value: 2, className: 'mt-0' },
        { action: ACTION.MOVE, value: 2, augments: [1], className: 'mt-0' },
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'mt-0 position-relative',
        },
        { action: ACTION.MOVE, value: 2, augments: [2], className: 'mt-0' },
        { action: ACTION.ATTACK, value: 2, className: 'mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Any one summoned ally performs', className: 'small' },
        { action: ACTION.MOVE, value: '+ 0' },
        { action: ACTION.ATTACK, value: '+ 0' },
        { action: ACTION.NOTE, value: 'with you controlling the actions.', className: 'small' },
      ],
    },
  },
  467: {
    id: 467,
    class: CLASS.BEAST_TYRANT,
    name: 'Stone Sigil',
    level: 5,
    initiative: 95,
    augmentSlots: {
      1: { id: 0, ...AUGMENT_SLOT.MOVE },
      2: { id: 0, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.MONOLITH },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.MOVE, value: 5, augments: [1, 2] },
      ],
    },
  },
  468: {
    id: 468,
    class: CLASS.BEAST_TYRANT,
    name: 'Primal Blessing',
    level: 6,
    initiative: 28,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 0,
          bonuses: [
            { action: ACTION.RANGE, value: 4 },
            { action: ACTION.TARGET, value: 3, augments: [1] },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
        { action: ACTION.NOTE, value: 'Swap positions with your bear.', className: 'small' },
        { action: ACTION.MOVE, value: 2, augments: [3] },
      ],
    },
  },
  469: {
    id: 469,
    class: CLASS.BEAST_TYRANT,
    name: 'Blood Hunger',
    level: 6,
    initiative: 42,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `After your bear's next five attacks,
                 it performs a "Heal (Symbol:Heal) 2, Self" action.`,
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
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.ATTACK, value: 3, augments: [1] },
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.XP, value: 1, className: 'large' }],
        },
      ],
    },
  },
  470: {
    id: 470,
    class: CLASS.BEAST_TYRANT,
    name: 'Storm Sigil',
    level: 7,
    initiative: 93,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.WIND_TOTEM },
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
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.ATTACK, value: 4, augments: [1, 2] },
      ],
    },
  },
  471: {
    id: 471,
    class: CLASS.BEAST_TYRANT,
    name: 'Tyrannical Force',
    level: 7,
    initiative: 37,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 0,
          bonuses: [
            { action: ACTION.RANGE, value: 3, augments: [1] },
            { action: ACTION.STUN },
            { action: ACTION.ELEMENT_EARTH },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All summoned allies within\nRange (Symbol:Range) 3 perform',
          className: 'small',
        },
        { action: ACTION.MOVE, value: '-1' },
        { action: ACTION.NOTE, value: 'with you controlling the actions', className: 'small' },
      ],
    },
  },
  472: {
    id: 472,
    class: CLASS.BEAST_TYRANT,
    name: 'Lash Out',
    level: 8,
    initiative: 18,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.PUSH,
          value: 2,
          augments: [3],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all adjacent enemies' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
  },
  473: {
    id: 473,
    class: CLASS.BEAST_TYRANT,
    name: 'Natural Remedy',
    level: 8,
    initiative: 25,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Heal (Symbol:Heal), +1 Range (Symbol:Range), (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [2] },
        {
          action: ACTION.STRENGTHEN,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect one adjacent ally' }],
        },
      ],
    },
  },
  474: {
    id: 474,
    class: CLASS.BEAST_TYRANT,
    name: 'Jaws of Death',
    level: 9,
    initiative: 48,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        {
          action: ACTION.NOTE,
          value: `Kill one adjacent normal enemy
                  whose current hit point value
                  is equal to or less than 6.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.COMMAND, class: CLASS.BEAST_TYRANT },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.PUSH, value: 3 }],
        },
        {
          action: ACTION.MOVE,
          value: 3,
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        { action: ACTION.ATTACK, value: 2, augments: [2] },
      ],
    },
  },
  475: {
    id: 475,
    class: CLASS.BEAST_TYRANT,
    name: 'Tribal Sigil',
    level: 9,
    initiative: 91,
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.SPIRIT_BANNER },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
      noRecover: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Recover (Symbol:Recover) up to two lost cards
                  with Summon actions on them.`,
          className: 'small',
        },
      ],
      consumed: true,
      noRecover: true,
    },
  },
};

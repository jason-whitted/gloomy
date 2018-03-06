import { AUGMENT, AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { ELEMENT } from '../../../ELEMENT';
import { SUMMON } from '../../../SUMMON';
import ACTION from '../../ACTION';

export default {
  476: {
    id: 476,
    class: CLASS.ELEMENTALIST,
    name: 'Raw Enhancement',
    level: 1,
    initiative: 48,
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
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Attack (Symbol:Attack), (XP:1)' }],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Attack (Symbol:Attack)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Move (Symbol:Move), (XP:1)' }],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Move (Symbol:Move)' }],
          className: 'mt-0',
        },
      ],
    },
  },
  477: {
    id: 477,
    class: CLASS.ELEMENTALIST,
    name: 'Pure Augmentation',
    level: 1,
    initiative: 48,
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
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Attack (Symbol:Attack), (XP:1)' }],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Attack (Symbol:Attack)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Move (Symbol:Move), (XP:1)' }],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Move (Symbol:Move)' }],
          className: 'mt-0',
        },
      ],
    },
  },
  478: {
    id: 478,
    class: CLASS.ELEMENTALIST,
    name: 'Formless Power',
    level: 1,
    initiative: 45,
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
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [2] }],
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), +1 Range (Symbol:Range), (XP:1)' }],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), +1 Range (Symbol:Range)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `During an attack action, you
                  you (Element:Any) once to add +1 Attack (Symbol:Attack)
                  to the entire Attack action.`,
          className: 'small',
        },
        { action: ACTION.PERSISTENT },
      ],
      consumed: true,
    },
  },
  479: {
    id: 479,
    class: CLASS.ELEMENTALIST,
    name: 'Shaping the Ether',
    level: 1,
    initiative: 54,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: 0, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_ATTACK, value: 2 }],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.PUSH, value: 3 }],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.STUN }],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.TARGET, value: 2 }],
          className: 'mt-0 w-50 d-inline-block',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'At the end of each of your turns,\nyou may generate (Element.Any).',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: 'Deduct -1 Attack (Symbol:Attack) from\nall your Attack actions.',
          className: 'small',
        },
        { action: ACTION.PERSISTENT },
      ],
      consumed: true,
    },
  },
  480: {
    id: 480,
    class: CLASS.ELEMENTALIST,
    name: 'Stoking Hail',
    level: 1,
    initiative: 28,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }],
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'STUN (Effect:Stun), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [3] }, { action: ACTION.ELEMENT_FIRE }],
    },
  },
  481: {
    id: 481,
    class: CLASS.ELEMENTALIST,
    name: 'Tremulant Cyclone',
    level: 1,
    initiative: 26,
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
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          className: 'w-75',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack),\nPUSH (Effect:Push)1, (XP:1)' }],
          className: 'w-75',
          style: { marginLeft: -10 },
        },
        { action: ACTION.HEX_PATTERN, value: 'R2R6R', className: 'w-100', pos: { x: '65%', y: '10%', w: 60, h: 60 } },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [2] }, { action: ACTION.ELEMENT_EARTH }],
    },
  },
  482: {
    id: 482,
    class: CLASS.ELEMENTALIST,
    name: 'Infernal Vortex',
    level: 1,
    initiative: 17,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1, 2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies at exactly Range (Symbol:Range) 2' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block ml-2' },
            { action: ACTION.ELEMENT_AIR, className: 'd-inline-block ml-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block ml-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [3] }, { action: ACTION.ELEMENT_ICE }],
    },
  },
  483: {
    id: 483,
    class: CLASS.ELEMENTALIST,
    name: 'Lava Eruption',
    level: 1,
    initiative: 19,
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
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range) 4' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block ml-2' },
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block ml-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block ml-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [2] }, { action: ACTION.ELEMENT_AIR }],
    },
  },
  484: {
    id: 484,
    class: CLASS.ELEMENTALIST,
    name: 'Ice Spikes',
    level: 1,
    initiative: 40,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.HEX, top: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack),\nWOUND (Effect:Wound), (XP:1)' }],
          className: 'mt-0 w-75',
          style: { marginLeft: -10 },
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [2],
          className: 'w-100',
          pos: { x: '60%', y: '10%', w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [4] }, { action: ACTION.IMMOBILIZE }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-2' },
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  485: {
    id: 485,
    class: CLASS.ELEMENTALIST,
    name: 'Frigid Torrent',
    level: 1,
    initiative: 35,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
      4: { id: 4, ...AUGMENT_SLOT.HEX },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [1] },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Target (Symbol:Target),\nPIERCE (Effect:Pierce) 2, (XP:1)' }],
          className: 'mt-0',
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
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.PULL, value: 2, augments: [3] },
            {
              action: ACTION.FRAGMENT,
              bonuses: [
                { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-2' },
                { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-2' },
                { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
              ],
            },
          ],
          className: 'w-75',
          style: { marginLeft: -10 },
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [4],
          className: 'w-100',
          pos: { x: '60%', y: '10%', w: 70, h: 70 },
        },
      ],
      consumed: true,
    },
  },
  486: {
    id: 486,
    class: CLASS.ELEMENTALIST,
    name: 'Malleable Evocation',
    level: 0,
    initiative: 50,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 0,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 2, augments: [2] },
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: 0, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack(Symbol:Attack),\nWOUND (Effect:Wound)' }],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack(Symbol:Attack),\nTarget (Symbol:Target)2' }],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack(Symbol:Attack),\nIMMOBILIZE (Effect:Immobilize)' }],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack(Symbol:Attack),\nPOISON (Effect:Poison)' }],
          className: 'mt-0 w-50 d-inline-block',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [3] },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_MOVE, value: 3 }],
          className: 'mt-0 d-inline-block',
          style: { width: '44%' },
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.JUMP }],
          className: 'mt-0 d-inline-block',
          style: { width: '56%' },
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Heal (Symbol:Heal)2\nSelf' }],
          className: 'mt-0 d-inline-block',
          style: { width: '44%' },
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.NOTE, value: 'Shield (Symbol:Shield)1\nSelf', className: 'd-inline-block' },
            { action: ACTION.ROUND, className: 'd-inline-block' },
          ],
          className: 'mt-0 d-inline-block',
          style: { width: '56%' },
        },
      ],
    },
  },
  487: {
    id: 487,
    class: CLASS.ELEMENTALIST,
    name: 'Brilliant Flash',
    level: 0,
    initiative: 67,
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
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.ELEMENT_LIGHT }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
  },
  488: {
    id: 488,
    class: CLASS.ELEMENTALIST,
    name: 'Encompassing Shadow',
    level: 0,
    initiative: 23,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.INVISIBLE,
          bonuses: [
            { action: ACTION.NOTE, value: 'Affect one ally within Range (Symbol:Range) 3' },
            { action: ACTION.ELEMENT_DARK },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        { action: ACTION.NOTE, value: 'All attacks targeting you gain\nDisadvantage this round.', className: 'small' },
        { action: ACTION.ROUND },
      ],
    },
  },
  489: {
    id: 489,
    class: CLASS.ELEMENTALIST,
    name: 'Boiling Arc',
    level: 2,
    initiative: 47,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.ELEMENT_FIRE }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'G2R2R6R5R1R',
          className: 'w-100',
          pos: { x: '55%', y: '10%', w: 80, h: 80 },
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [2] },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Retaliate (Symbol:Retaliate) 2\nRange (Symbol:Range) 2',
              className: 'd-inline-block',
            },
            { action: ACTION.ROUND, className: 'd-inline-block' },
          ],
          className: 'mt-0',
        },
      ],
    },
  },
  490: {
    id: 490,
    class: CLASS.ELEMENTALIST,
    name: 'Crystallizing Blast',
    level: 2,
    initiative: 0,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [2] }, { action: ACTION.ELEMENT_ICE }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R1R3R4R5R6R1R',
          className: 'w-100',
          pos: { x: '55%', y: '10%', w: 80, h: 80 },
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [3] },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.NOTE, value: 'Shield (Symbol:Shield) 2\nSelf', className: 'd-inline-block' },
            { action: ACTION.ROUND, className: 'd-inline-block' },
          ],
        },
      ],
    },
  },
  491: {
    id: 491,
    class: CLASS.ELEMENTALIST,
    name: 'Burial',
    level: 3,
    initiative: 65,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 4 }],
          className: 'w-50 ml-3',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack),\nIMMOBILIZE (Effect:Immobilize), (XP:1)' },
          ],
          className: 'mt-0 w-75',
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack),\nCURSE (Effect:Curse), (XP:1)' }],
          className: 'mt-0 w-75',
        },
        { action: ACTION.HEX_PATTERN, value: 'R3R5R', className: 'w-100', pos: { x: '70%', y: -15, w: 60, h: 60 } },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 4 }, { action: ACTION.ELEMENT_DARK }],
        },
      ],
    },
  },
  492: {
    id: 492,
    class: CLASS.ELEMENTALIST,
    name: 'Chain Lightning',
    level: 3,
    initiative: 41,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 'X = 4',
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            {
              action: ACTION.NOTE,
              value: `Attack (Symbol:Attack)X-1 on a new enemy within Range (Symbol:Range)2 of the
                      first target, then Attack (Symbol:Attack)X-2 on a third enemy within
                      Range (Symbol:Range)2 of the second target`,
              style: { fontSize: '0.65em', lineHeight: '0.9em' },
            },
            {
              action: ACTION.ELEMENT_LIGHT_CONSUME,
              condition: true,
              bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), PIERCE (Effect:Pierce)2, (XP:1)' }],
              style: { marginTop: -5, marginLeft: -10 },
            },
            {
              action: ACTION.ELEMENT_AIR_CONSUME,
              condition: true,
              bonuses: [
                {
                  action: ACTION.NOTE,
                  value: `Attack (Symbol:Attack)X-3 on a fourth enemy within
                          Range (Symbol:Range)2 of the third target, (XP:1)`,
                },
              ],
              style: { marginTop: -5, marginLeft: -10 },
            },
          ],
          style: { marginTop: -5 },
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 4 }, { action: ACTION.ELEMENT_LIGHT }],
        },
      ],
    },
  },
  493: {
    id: 493,
    class: CLASS.ELEMENTALIST,
    name: 'Primal Duality',
    level: 4,
    initiative: 15,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 4 }, { action: ACTION.TARGET, value: 2, augments: [3] }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block ml-2' },
            { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block ml-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block ml-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [4] },
        { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block ml-2' },
        { action: ACTION.ELEMENT_DARK, className: 'd-inline-block ml-2' },
      ],
    },
  },
  494: {
    id: 494,
    class: CLASS.ELEMENTALIST,
    name: 'Gravel Vortex',
    level: 4,
    initiative: 62,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
        { action: ACTION.ELEMENT_AIR, className: 'd-inline-block ml-2' },
        { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block ml-2' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.LOOT, value: 1 },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.ANY, ELEMENT.ANY],
          bonuses: [{ action: ACTION.LOOT, value: 2 }],
          className: 'mt-0',
        },
      ],
    },
  },
  495: {
    id: 495,
    class: CLASS.ELEMENTALIST,
    name: 'Obsidian Shards',
    level: 5,
    initiative: 36,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.TARGET, value: 2 }],
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.FIRE, ELEMENT.EARTH],
          bonuses: [{ action: ACTION.NOTE, value: '+3 Attack (Symbol:Attack), (XP:1)' }],
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
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-2' },
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-2' },
            { action: ACTION.ROUND },
          ],
        },
      ],
    },
  },
  496: {
    id: 496,
    class: CLASS.ELEMENTALIST,
    name: "Winter's Edge",
    level: 5,
    initiative: 43,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 2 }],
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.ICE, ELEMENT.AIR],
          bonuses: [{ action: ACTION.NOTE, value: '+2 Range (Symbol:Range), PIERCE (Symbol:Pierce)4, (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [3] }],
        },
        { action: ACTION.ELEMENT_FIRE, className: 'd-inline-block mx-2' },
        { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
      ],
    },
  },
  497: {
    id: 497,
    class: CLASS.ELEMENTALIST,
    name: 'Eye of the Hurricane',
    level: 6,
    initiative: 29,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 4 }],
        },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [2],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies within\nRange (Symbol:Range) 2 of the healed figure' },
          ],
          className: 'mt-0',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-2' },
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_MOVE, value: 3 }],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Jump (Symbol:Jump), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
  },
  498: {
    id: 498,
    class: CLASS.ELEMENTALIST,
    name: 'Simulacrum',
    level: 6,
    initiative: 94,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          style: { marginTop: -5 },
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.ANY, ELEMENT.ANY],
          bonuses: [{ action: ACTION.NOTE, value: '+3 Attack (Symbol:Attack), (XP:1)' }],
          style: { marginTop: -5 },
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.ANY, ELEMENT.ANY],
          bonuses: [{ action: ACTION.NOTE, value: 'Target (Symbol:Target) 2, (XP:1)' }],
          style: { marginTop: -1 },
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.ANY, ELEMENT.ANY],
          bonuses: [{ action: ACTION.NOTE, value: 'IMMOBILIZE (Effect:Immobilize),\nMUDDLE (Effect:Muddle), (XP:1)' }],
          className: 'small',
          style: { marginTop: -5 },
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.DOPPLEGANGER },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_EARTH, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  499: {
    id: 499,
    class: CLASS.ELEMENTALIST,
    name: 'Vengeance',
    level: 7,
    initiative: 33,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.HEX, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
          className: 'w-75',
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.DARK, ELEMENT.ANY],
          bonuses: [{ action: ACTION.NOTE, value: 'Kill all normal\ntargets instead, (XP:1)' }],
          className: 'w-75',
        },
        {
          action: ACTION.HEX_PATTERN,
          value: 'R2R6R5A',
          augments: [1],
          className: 'w-100',
          pos: { x: '65%', y: 0, w: 70, h: 70 },
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.RETALIATE,
          value: 1,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect one adjacent ally' }],
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.LIGHT, ELEMENT.ANY],
          bonuses: [{ action: ACTION.NOTE, value: 'Retaliate (Symbol:Retaliate) 3 instead, (XP:1)' }],
          className: 'mt-0',
        },
        { action: ACTION.ROUND, style: { marginTop: -5 } },
      ],
    },
  },
  500: {
    id: 500,
    class: CLASS.ELEMENTALIST,
    name: 'Pragmatic Reinforcement',
    level: 7,
    initiative: 56,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: 0, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.SHIELD, value: 1, className: 'd-inline-block' },
            { action: ACTION.ROUND, className: 'd-inline-block' },
          ],
          className: 'mt-0 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_HEAL, value: 2 }],
          className: 'mt-0 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.NOTE, value: 'The healed figure may\nRecover (Symbol:Recover) one discarded card.' },
          ],
          className: 'mt-0',
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
            { action: ACTION.RANGE, value: 3 },
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: 0, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'POISON (Effect:Poison),\nWOUND (Effect:Wound)',
              className: 'd-inline-block',
            },
          ],
          className: 'mt-0 mx-1 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_RANGE, value: 3 }],
          className: 'mt-0 mx-1 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_ATTACK, value: 2 }],
          className: 'mt-0',
        },
      ],
    },
  },
  501: {
    id: 501,
    class: CLASS.ELEMENTALIST,
    name: 'Volatile Consumption',
    level: 8,
    initiative: 64,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `When you consume an element during an
                  action, you may cause an enemy within
                  Range (Symbol:Range)2 to suffer 1 damage or you may
                  perform a "Heal (Symbol:Heal)1, Range (Symbol:Range)2" action.`,
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
          bonuses: [{ action: ACTION.JUMP }],
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.FIRE, ELEMENT.ANY],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: '+2 Move (Symbol:Move), WOUND (Effect:Wound)\nall enemies moved through, (XP:1)',
              style: { fontSize: '0.75em' },
            },
          ],
          className: 'mt-0',
        },
        {
          action: ACTION.CONSUME_ELEMENTS,
          elements: [ELEMENT.FIRE, ELEMENT.ANY],
          bonuses: [
            {
              action: ACTION.NOTE,
              value: '+2 Move (Symbol:Move), IMMOBILIZE (Effect:Immobilize)\nall enemies moved through, (XP:1)',
              style: { fontSize: '0.75em' },
            },
          ],
          style: { marginTop: -5 },
        },
      ],
    },
  },
  502: {
    id: 502,
    class: CLASS.ELEMENTALIST,
    name: 'Elemental Aegis',
    level: 8,
    initiative: 14,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.ROUND, className: 'position-absolute', style: { top: 0, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Shield (Symbol:Shield),(XP:1)' }],
          className: 'mt-0 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_SHIELD, value: 1 }],
          className: 'mt-0 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Shield (Symbol:Shield),(XP:1)' }],
          className: 'mt-0 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MODIFY_SHIELD, value: 1 }],
          className: 'mt-0 d-inline-block',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [2, 3],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ELEMENT_LIGHT }],
        },
      ],
    },
  },
  503: {
    id: 503,
    class: CLASS.ELEMENTALIST,
    name: 'Ethereal Manifestation',
    level: 9,
    initiative: 98,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY, top: true, type: AUGMENT.ELEMENT_ANY, readonly: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.MANA_SPHERE },
        { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Perform any of the following abilities:', className: 'small' },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.ATTACK,
              value: 3,
              bonuses: [{ action: ACTION.RANGE, value: 3 }],
            },
          ],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_AIR_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.MOVE, value: 3 }],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.LOOT, value: 1 }],
          className: 'mt-0 w-50 d-inline-block',
        },
        {
          action: ACTION.ELEMENT_EARTH_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.HEAL, value: 3, bonuses: [{ action: ACTION.RANGE, value: 3 }] }],
          className: 'mt-0 w-50 d-inline-block',
        },
      ],
    },
  },
  504: {
    id: 504,
    class: CLASS.ELEMENTALIST,
    name: 'Eternal Equilibrium',
    level: 9,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies within Range (Symbol:Range)3' }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), CURSE (Effect:Curse), (XP:1)' }],
          className: 'mt-0',
        },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), MUDDLE (Effect:Muddle), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 4 }],
        },
        {
          action: ACTION.ELEMENT_FIRE_CONSUME,
          condition: true,
          bonuses: [
            { action: ACTION.NOTE, value: 'Retaliate (Symbol:Retaliate)2, (XP:1)' },
            { action: ACTION.ROUND, className: 'position-absolute', style: { top: '50%', right: '5%' } },
          ],
          className: 'mt-0 position-relative',
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Shield (Symbol:Shield)2, (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
  },
};

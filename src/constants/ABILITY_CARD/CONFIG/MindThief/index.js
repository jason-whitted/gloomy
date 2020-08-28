import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SUMMON } from '../../../SUMMON';
import ACTION from '../../ACTION';

export default {
  116: {
    id: 116,
    class: CLASS.MINDTHIEF,
    name: 'Submissive Affliction',
    level: 1,
    initiative: 48,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Add +1 Attack (Symbol:Attack) for each\nnegative condition on the target' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Force one enemy with Range (Symbol:Range)5 to perform', className: 'small' },
        { action: ACTION.ATTACK, value: 2 },
        { action: ACTION.NOTE, value: 'Range (Symbol:Range) + 0' },
        { action: ACTION.NOTE, value: 'with you controlling the action', className: 'small' },
      ],
    },
  },
  117: {
    id: 117,
    class: CLASS.MINDTHIEF,
    name: 'Into the Night',
    level: 1,
    initiative: 14,
    top: {
      actions: [{ action: ACTION.LOOT, value: 1 }, { action: ACTION.ELEMENT_DARK, value: 2 }],
    },
    bottom: {
      actions: [{ action: ACTION.INVISIBLE }, { action: ACTION.NOTE, value: 'Self', className: 'small' }],
    },
  },
  118: {
    id: 118,
    class: CLASS.MINDTHIEF,
    name: 'Fearsome Blade',
    level: 1,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
      4: { id: 4, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.PUSH, value: 3, augments: [2] },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4 },
        { action: ACTION.ATTACK, value: 2, augments: [3, 4] },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
  },
  119: {
    id: 119,
    class: CLASS.MINDTHIEF,
    name: 'Feedback Loop',
    level: 1,
    initiative: 79,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.AUGMENT,
          class: CLASS.MINDTHIEF,
          condition: 'On melee attack:',
          bonuses: [
            { action: ACTION.SHIELD, value: 1, bonuses: [{ action: ACTION.NOTE, value: 'Self', className: 'small' }] },
          ],
        },
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:MT:Augment)\nis played, discard this card.',
              className: 'small d-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [2],
          bonuses: [
            { action: ACTION.JUMP },
            { action: ACTION.NOTE, value: 'If you end this movement in the\nsame hex you started in, perform' },
          ],
        },
        {
          action: ACTION.MUDDLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies moved through' }],
        },
      ],
    },
  },
  120: {
    id: 120,
    class: CLASS.MINDTHIEF,
    name: 'Gnawing Horde',
    level: 1,
    initiative: 82,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.RAT_SWARM },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [4] }],
    },
  },
  121: {
    id: 121,
    class: CLASS.MINDTHIEF,
    name: "The Mind's Weakness",
    level: 1,
    initiative: 75,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.AUGMENT,
          class: CLASS.MINDTHIEF,
          condition: 'On melee attack:',
          bonuses: [{ action: ACTION.NOTE, value: 'Add +2 Attack (Symbol:Attack)' }],
        },
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:MT:Augment)\nis played, discard this card.',
              className: 'small d-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.ATTACK, value: 1, augments: [2], bonuses: [{ action: ACTION.WOUND }] }],
    },
  },
  122: {
    id: 122,
    class: CLASS.MINDTHIEF,
    name: 'Parasitic Influence',
    level: 1,
    initiative: 71,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.AUGMENT,
          class: CLASS.MINDTHIEF,
          condition: 'On melee attack:',
          bonuses: [
            { action: ACTION.HEAL, value: 2, bonuses: [{ action: ACTION.NOTE, value: 'Self', className: 'small' }] },
          ],
        },
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:MT:Augment)\nis played, discard this card.',
              className: 'small d-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Force one enemy with Range (Symbol:Range)4 to perform', className: 'small' },
        { action: ACTION.MOVE, value: 1 },
        { action: ACTION.NOTE, value: 'with you controlling its actions.', className: 'small' },
      ],
    },
  },
  123: {
    id: 123,
    class: CLASS.MINDTHIEF,
    name: 'Scurry',
    level: 1,
    initiative: 20,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [1] }, { action: ACTION.ATTACK, value: 1, augments: [2] }],
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 2 }, { action: ACTION.XP, value: 1, className: 'large' }],
      consumed: true,
    },
  },
  124: {
    id: 124,
    class: CLASS.MINDTHIEF,
    name: 'Perverse Edge',
    level: 1,
    initiative: 8,
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
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'Add +2 Attack (Symbol:Attack) and gain (XP:1) for\neach negative condition on the target',
              className: 'small',
            },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [3] }, { action: ACTION.STUN }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-1' },
          ],
        },
      ],
    },
  },
  125: {
    id: 125,
    class: CLASS.MINDTHIEF,
    name: 'Empathetic Assault',
    level: 1,
    initiative: 11,
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
          bonuses: [{ action: ACTION.RANGE, value: 5 }, { action: ACTION.DISARM }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-1' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-1' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [3] },
        { action: ACTION.HEAL, value: 2, augments: [4], bonuses: [{ action: ACTION.NOTE, value: 'Self' }] },
      ],
    },
  },
  126: {
    id: 126,
    class: CLASS.MINDTHIEF,
    name: 'Withering Claw',
    level: 0,
    initiative: 77,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.AUGMENT,
          class: CLASS.MINDTHIEF,
          condition: 'On melee attack:',
          bonuses: [{ action: ACTION.POISON, value: 2 }, { action: ACTION.MUDDLE, value: 2 }],
        },
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:MT:Augment)\nis played, discard this card.',
              className: 'small d-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'One summoned ally within\nRange (Symbol:Range) 3 performs', className: 'small' },
        { action: ACTION.NOTE, value: 'Move (Symbol:Move) + 1' },
        { action: ACTION.NOTE, value: 'with you controlling its actions.', className: 'small' },
      ],
    },
  },
  127: {
    id: 127,
    class: CLASS.MINDTHIEF,
    name: 'Possession',
    level: 0,
    initiative: 51,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent ally may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 2 },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'One ally within Range (Symbol:Range) 3 may perform', className: 'small' },
        { action: ACTION.MOVE, value: 4 },
      ],
    },
  },
  128: {
    id: 128,
    class: CLASS.MINDTHIEF,
    name: 'Frigid Apparition',
    level: 0,
    initiative: 29,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [1] },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'STUN (Effect:Stun), (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [2] },
        {
          action: ACTION.STUN,
          value: 2,
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
      consumed: true,
    },
  },
  129: {
    id: 129,
    class: CLASS.MINDTHIEF,
    name: 'Wretched Creature',
    level: 2,
    initiative: 84,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.MONSTROUS_RAT },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [4] },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.CURSE }, { action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
          style: { marginLeft: 10 },
        },
      ],
    },
  },
  130: {
    id: 130,
    class: CLASS.MINDTHIEF,
    name: 'Hostile Takeover',
    level: 2,
    initiative: 9,
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
          bonuses: [{ action: ACTION.RANGE, value: 4, augments: [2] }, { action: ACTION.IMMOBILIZE }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Force one normal or elite enemy within
                  Range (Symbol:Range) 3 to perform its turn this round
                  as if its allies were enemies and
                  its enemies were allies.`,
          style: { fontSize: '0.76em', lineHeight: '1em' },
        },
        {
          action: ACTION.NOTE,
          value: `To signify this, place one of your class
                  tokens on this enemy for the round.`,
          style: { fontSize: '0.76em', lineHeight: '1em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-4' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-4' },
          ],
          className: 'mt-0',
        },
      ],
      consumed: true,
    },
  },
  131: {
    id: 131,
    class: CLASS.MINDTHIEF,
    name: 'Brain Leech',
    level: 3,
    initiative: 16,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 4 }],
        },
        {
          action: ACTION.HEAL,
          value: 4,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_DARK, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.ATTACK, value: 1, augments: [3] },
        {
          action: ACTION.STRENGTHEN,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  132: {
    id: 132,
    class: CLASS.MINDTHIEF,
    name: 'Silent Scream',
    level: 3,
    initiative: 73,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.AUGMENT,
          class: CLASS.MINDTHIEF,
          condition: 'On melee attack:',
          bonuses: [{ action: ACTION.HEAL, value: 2, bonuses: [{ action: ACTION.RANGE, value: 2 }] }],
        },
        {
          action: ACTION.ATTACK,
          value: 1,
          augments: [1],
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:MT:Augment)\nis played, discard this card.',
              className: 'small d-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
        {
          action: ACTION.PUSH,
          value: 2,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target all adjacent enemies' }],
        },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'PUSH (Effect:Push) 3 instead, (XP:1)' }],
        },
      ],
    },
  },
  133: {
    id: 133,
    class: CLASS.MINDTHIEF,
    name: 'Pilfer',
    level: 4,
    initiative: 68,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.LOOT, value: 1 },
        {
          action: ACTION.NOTE,
          value: 'Gain one additional money token from the\nsupply for each adjacent enemy.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.ATTACK, value: 2, augments: [1] },
        { action: ACTION.MOVE, value: 2, augments: [2] },
        { action: ACTION.ATTACK, value: 2, augments: [3] },
        { action: ACTION.XP, value: 2, className: 'large mt-0' },
      ],
      consumed: true,
    },
  },
  134: {
    id: 134,
    class: CLASS.MINDTHIEF,
    name: 'Cranium Overload',
    level: 4,
    initiative: 5,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Kill one normal enemy within Range (Symbol:Range) 4.', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1, 2],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all enemies adjacent\nto the killed target' },
            { action: ACTION.NOTE, value: 'Gain (XP:1) for each enemy targeted\nwith this attack.' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [3] }],
    },
  },
  135: {
    id: 135,
    class: CLASS.MINDTHIEF,
    name: 'Mass Hysteria',
    level: 5,
    initiative: 12,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 1,
          bonuses: [
            { action: ACTION.RANGE, value: 4 },
            { action: ACTION.TARGET, value: 4, augments: [1] },
            { action: ACTION.MUDDLE },
          ],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, value: 2, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'You may have two Augments (Class:MT)\nactive at once.', className: 'small' },
        { action: ACTION.NOTE, value: 'If a third is played,\ndiscard one of the others.', className: 'small' },
        { action: ACTION.PERSISTENT },
      ],
      consumed: true,
    },
  },
  136: {
    id: 136,
    class: CLASS.MINDTHIEF,
    name: 'Frozen Mind',
    level: 5,
    initiative: 81,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.AUGMENT,
          class: CLASS.MINDTHIEF,
          condition: 'On melee attack:',
          bonuses: [
            {
              action: ACTION.ELEMENT_ICE_CONSUME,
              condition: true,
              bonuses: [{ action: ACTION.STUN, className: 'pt-2' }],
            },
          ],
        },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:MT:Augment)\nis played, discard this card.',
              className: 'small d-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'Force one enemy with Range (Symbol:Range)5 to perform', className: 'small' },
        { action: ACTION.MOVE, value: 2 },
        { action: ACTION.NOTE, value: 'with you controlling its actions.', className: 'small' },
      ],
    },
  },
  137: {
    id: 137,
    class: CLASS.MINDTHIEF,
    name: 'Corrupting Embrace',
    level: 6,
    initiative: 39,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 1, augments: [1], bonuses: [{ action: ACTION.POISON }] },
        { action: ACTION.ATTACK, value: 1, augments: [2], bonuses: [{ action: ACTION.MUDDLE }] },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [3], bonuses: [{ action: ACTION.JUMP }] },
        { action: ACTION.POISON, bonuses: [{ action: ACTION.NOTE, value: 'Target all enemies moved through' }] },
        { action: ACTION.ELEMENT_DARK, className: 'mt-0' },
      ],
    },
  },
  138: {
    id: 138,
    class: CLASS.MINDTHIEF,
    name: 'Dark Frenzy',
    level: 6,
    initiative: 10,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 2, augments: [1] },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Attack (Symbol:Attack), (XP:1)' }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Attack (Symbol:Attack), (XP:1)' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  139: {
    id: 139,
    class: CLASS.MINDTHIEF,
    name: 'Vicious Blood',
    level: 7,
    initiative: 83,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.AUGMENT,
          class: CLASS.MINDTHIEF,
          condition: 'On melee attack:',
          bonuses: [
            {
              action: ACTION.RETALIATE,
              value: 2,
              bonuses: [{ action: ACTION.NOTE, value: 'Self', className: 'small' }],
            },
          ],
        },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:MT:Augment)\nis played, discard this card.',
              className: 'small d-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 2, augments: [2] }, { action: ACTION.ATTACK, value: 2, augments: [3] }],
    },
  },
  140: {
    id: 140,
    class: CLASS.MINDTHIEF,
    name: 'Psychic Projection',
    level: 7,
    initiative: 92,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [2],
          bonuses: [
            { action: ACTION.NOTE, value: 'Self' },
            { action: ACTION.ROUND, className: 'position-absolute', style: { top: 0, right: '5%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.STUN,
          value: 5,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Your ranged attacks gain the effects\nof your Augments (Class:MT) this round.',
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
      consumed: true,
    },
  },
  141: {
    id: 141,
    class: CLASS.MINDTHIEF,
    name: 'Shared Nightmare',
    level: 8,
    initiative: 7,
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
          bonuses: [{ action: ACTION.RANGE, value: 4 }, { action: ACTION.TARGET, value: 2, augments: [2] }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.POISON }, { action: ACTION.CURSE }],
          className: 'mt-0',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_ICE, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 5, augments: [3] },
        {
          action: ACTION.ELEMENT_ICE_CONSUME,
          condition: true,
          bonuses: [
            {
              action: ACTION.SHIELD,
              value: 1,
              bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
              className: 'd-inline-block',
            },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block px-1' },
            { action: ACTION.ROUND, className: 'd-inline-block' },
          ],
        },
      ],
    },
  },
  142: {
    id: 142,
    class: CLASS.MINDTHIEF,
    name: 'Domination',
    level: 8,
    initiative: 13,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent ally may perform', className: 'small' },
        {
          action: ACTION.ATTACK,
          value: 4,
          bonuses: [
            {
              action: ACTION.NOTE,
              value: 'This attack gains the effects\nof your Augments (Class:MT).',
            },
          ],
        },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Force one normal or elite enemy within
                  Range 5 to perform its turn this
                  round as if its allies were enemies
                  and its enemies were allies, with
                  you controlling its actions.
                  To signify this, place one of your class
                  tokens on this enemy for the round.`,
          style: { fontSize: '0.75em', lineHeight: '1em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-4' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-4' },
          ],
        },
      ],
      consumed: true,
    },
  },
  143: {
    id: 143,
    class: CLASS.MINDTHIEF,
    name: 'Many as One',
    level: 9,
    initiative: 91,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.RAT_KING },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `All allies within Range 2 add +X Attack (Symbol:Attack)
                  to all their attacks, where X is equal to the
                  number of allies within Range (Symbol:Range) 2 of you.`,
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  144: {
    id: 144,
    class: CLASS.MINDTHIEF,
    name: 'Phantasmal Killer',
    level: 9,
    initiative: 67,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.AUGMENT,
          class: CLASS.MINDTHIEF,
          condition: 'On melee attack:',
          bonuses: [
            {
              action: ACTION.ELEMENT_DARK_CONSUME,
              condition: true,
              bonuses: [
                { action: ACTION.NOTE, value: 'Kill one\nnormal target\ninstead', style: { fontSize: '0.75em' } },
              ],
            },
          ],
        },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large position-absolute', style: { top: -8, right: '10%' } },
          ],
          className: 'position-relative',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: 'When another (ClassAbility:MT:Augment)\nis played, discard this card.',
              className: 'small d-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
        { action: ACTION.LOOT, value: 1 },
        { action: ACTION.INVISIBLE, bonuses: [{ action: ACTION.NOTE, value: 'Self' }] },
        { action: ACTION.ELEMENT_DARK, className: 'mt-0' },
      ],
    },
  },
};

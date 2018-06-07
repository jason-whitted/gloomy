import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  175: {
    id: 175,
    class: CLASS.SUNKEEPER,
    name: 'Purifying Aura',
    level: 1,
    initiative: 21,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'On the next five melee attacks\ntargeting you, gain Retaliate (Symbol:Retaliate)2.',
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
        {
          action: ACTION.STRENGTHEN,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all adjacent allies' }],
        },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect all allies within\nRange (Symbol:Range)2 instead' }],
          className: 'mt-0',
        },
      ],
    },
  },
  176: {
    id: 176,
    class: CLASS.SUNKEEPER,
    name: 'Cautious Advance',
    level: 1,
    initiative: 23,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
        { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [2] }],
    },
  },
  177: {
    id: 177,
    class: CLASS.SUNKEEPER,
    name: 'Brilliant Prayer',
    level: 1,
    initiative: 27,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'One adjacent ally may\nRecover (Symbol:Recover) one lost card.',
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
      noRecover: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  178: {
    id: 178,
    class: CLASS.SUNKEEPER,
    name: 'Empowering Command',
    level: 1,
    initiative: 32,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'One adjacent ally may Recover (Symbol:Recover)\nup to two discarded cards.',
          className: 'small',
        },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Up to three discarded\ncards instead, (XP:1).' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent ally may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 4, augments: [1] },
      ],
    },
  },
  179: {
    id: 179,
    class: CLASS.SUNKEEPER,
    name: 'Protective Blessing',
    level: 1,
    initiative: 61,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'BLESS (Effect:Bless) and STRENGTHEN (Effect:Strengthen)',
          bonuses: [{ action: ACTION.NOTE, value: 'Affect one ally within Range (Symbol:Range)3' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Negate all sources of damage to\nyou and all adjacent allies this round.',
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  180: {
    id: 180,
    class: CLASS.SUNKEEPER,
    name: 'Dazzling Charge',
    level: 1,
    initiative: 57,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.ELEMENT_LIGHT }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 5, augments: [2] },
        {
          action: ACTION.STUN,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  181: {
    id: 181,
    class: CLASS.SUNKEEPER,
    name: 'Tactical Order',
    level: 1,
    initiative: 29,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One ally within Range (Symbol:Range)3 may perform', className: 'small' },
        { action: ACTION.MOVE, value: 4, augments: [1] },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  182: {
    id: 182,
    class: CLASS.SUNKEEPER,
    name: 'Holy Strike',
    level: 1,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.STUN }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [2],
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [3] }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  183: {
    id: 183,
    class: CLASS.SUNKEEPER,
    name: 'Hammer Blow',
    level: 1,
    initiative: 55,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 4, augments: [1] },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), Advantage, (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [2] }],
    },
  },
  184: {
    id: 184,
    class: CLASS.SUNKEEPER,
    name: 'Defensive Stance',
    level: 1,
    initiative: 65,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 4, augments: [1] },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), Advantage, (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: 'On all your Move actions,\ndeduce -1 Move (Symbol:Move).', className: 'small' },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
  },
  185: {
    id: 185,
    class: CLASS.SUNKEEPER,
    name: 'Lay on Hands',
    level: 1,
    initiative: 90,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Heal all damage on one adjacent ally.', className: 'small' },
        { action: ACTION.NOTE, value: 'Suffer 3 damage.', className: 'small' },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
  },
  186: {
    id: 186,
    class: CLASS.SUNKEEPER,
    name: 'Daybreak',
    level: 0,
    initiative: 85,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.MUDDLE }],
        },
        {
          action: ACTION.ELEMENT_DARK_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), (Element:Light), (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
        {
          action: ACTION.BLESS,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect one adjacent ally' }],
        },
      ],
    },
  },
  187: {
    id: 187,
    class: CLASS.SUNKEEPER,
    name: 'Beacon of Light',
    level: 0,
    initiative: 36,
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 1,
          bonuses: [{ action: ACTION.NOTE, value: 'Affect self and all allies within Range (Symbol:Range)4' }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: 'At the end of your next five turns when\n(Element:Light) is not Strong, generate (Element:Light).',
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
  188: {
    id: 188,
    class: CLASS.SUNKEEPER,
    name: 'Glorious Bolt',
    level: 0,
    initiative: 39,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [1, 2],
          bonuses: [{ action: ACTION.RANGE, value: 3 }],
        },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Target (Symbol:Target)2, (XP:1)' }],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 1, className: 'large mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 3 }, { action: ACTION.MUDDLE }],
        },
      ],
    },
  },
  189: {
    id: 189,
    class: CLASS.SUNKEEPER,
    name: 'Practical Plans',
    level: 2,
    initiative: 56,
    top: {
      actions: [{ action: ACTION.ATTACK, value: 5 }],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5 }],
    },
  },
  190: {
    id: 190,
    class: CLASS.SUNKEEPER,
    name: 'Unwavering Mandate',
    level: 2,
    initiative: 72,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `One adjacent ally may immediately
                  perform an extra turn by playing
                  two cards from their hand.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 2, augments: [2] }],
        },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Target (Symbol:Target)2, (XP:1)' }],
          className: 'mt-0',
        },
      ],
    },
  },
  191: {
    id: 191,
    class: CLASS.SUNKEEPER,
    name: 'Burning Flash',
    level: 3,
    initiative: 51,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all adjacent enemies\nGain (XP:1) for each enemy targeted.' },
            { action: ACTION.ELEMENT_LIGHT },
          ],
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
          bonuses: [{ action: ACTION.RANGE, value: 3, augments: [3] }],
        },
        {
          action: ACTION.ELEMENT_ANY_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '1 Heal (Symbol:Heal), (Element:Light)' }],
          className: 'mt-0',
        },
      ],
    },
  },
  192: {
    id: 192,
    class: CLASS.SUNKEEPER,
    name: 'Mobilizing Axiom',
    level: 3,
    initiative: 23,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
    },
    top: {
      actions: [{ action: ACTION.ATTACK, value: 4, augments: [1] }, { action: ACTION.ELEMENT_LIGHT }],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All allies within Range (Symbol:Range)5 may perform', className: 'small' },
        { action: ACTION.MOVE, value: 4 },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
      consumed: true,
    },
  },
  193: {
    id: 193,
    class: CLASS.SUNKEEPER,
    name: 'Righteous Strength',
    level: 4,
    initiative: 18,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.BLESS,
          augments: [1],
          bonuses: [
            { action: ACTION.NOTE, value: 'Affect all adjacent allies' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [2] },
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  194: {
    id: 194,
    class: CLASS.SUNKEEPER,
    name: 'Engulfing Radiance',
    level: 4,
    initiative: 20,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true, multiple: true },
    },
    top: {
      actions: [
        {
          action: ACTION.HEAL,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect self and all allies' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All attacks targeting you or any ally within\nRange 4 this round gain Disadvantage.',
          className: 'small',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
  },
  195: {
    id: 195,
    class: CLASS.SUNKEEPER,
    name: 'Path of Glory',
    level: 5,
    initiative: 48,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1, 2],
          bonuses: [
            {
              action: ACTION.ELEMENT_LIGHT_CONSUME,
              condition: true,
              bonuses: [{ action: ACTION.NOTE, value: '+1 Attack (Symbol:Attack), Advantage, (XP:1)' }],
              className: 'mt-0',
            },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 5, augments: [3] },
        {
          action: ACTION.BLESS,
          bonuses: [
            { action: ACTION.NOTE, value: 'Affect all allies moved through' },
            { action: ACTION.XP, value: 1, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
  },
  196: {
    id: 196,
    class: CLASS.SUNKEEPER,
    name: 'Scales of Justice',
    level: 5,
    initiative: 68,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.MOVE },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 2,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        { action: ACTION.NOTE, value: 'On all your attacks,\ndeduct -1 Attack (Symbol:Attack).', className: 'small' },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 1, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [2] },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: '+2 Move (Symbol:Move), (XP:1)' }],
          className: 'mt-0',
        },
        {
          action: ACTION.STUN,
          augments: [3],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
      ],
    },
  },
  197: {
    id: 197,
    class: CLASS.SUNKEEPER,
    name: 'Supportive Chant',
    level: 6,
    initiative: 11,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All allies add +1 Attack (Symbol:Attack) to all \n their Attack actions this round.',
        },
        { action: ACTION.XP, value: 1, className: 'd-inline-block large' },
        { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All allies add +2 Move (Symbol:Move) to all \n their Move actions this round.',
          className: 'small',
        },
        { action: ACTION.ROUND, className: 'large' },
      ],
    },
  },
  198: {
    id: 198,
    class: CLASS.SUNKEEPER,
    name: 'Illuminate the Target',
    level: 6,
    initiative: 91,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.ATTACK, value: 5, augments: [1] },
        { action: ACTION.STRENGTHEN, augments: [2] },
        { action: ACTION.NOTE, value: 'Affect all adjacent allies', className: 'small' },
        { action: ACTION.XP, value: 1, className: 'large' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent ally may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 6, augments: [3] },
      ],
    },
  },
  199: {
    id: 199,
    class: CLASS.SUNKEEPER,
    name: 'Weapon of Purity',
    level: 7,
    initiative: 73,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `During any of your Attack actions,
                  (Element:Light:Consume) to add +2 Attack (Symbol:Attack), gain
                  Advantage and (XP:1).`,
          className: 'small',
        },
        { action: ACTION.PERSISTENT, className: 'mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 3, augments: [1] }, { action: ACTION.ATTACK, value: 3, augments: [2] }],
    },
  },
  200: {
    id: 200,
    class: CLASS.SUNKEEPER,
    name: 'Bright Aegis',
    level: 7,
    initiative: 14,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF, top: true },
      2: { id: 2, ...AUGMENT_SLOT.SELF, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.RETALIATE,
          value: 1,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'One adjacent ally may\nRecover (Symbol:Recover) on lost card.',
          className: 'small',
        },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Up to two lost cards instead, (XP:1).' }],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 2, className: 'large mt-0' },
      ],
      consumed: true,
      noRecover: true,
    },
  },
  201: {
    id: 201,
    class: CLASS.SUNKEEPER,
    name: 'Cleansing Force',
    level: 8,
    initiative: 25,
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
            { action: ACTION.STUN },
            { action: ACTION.WOUND },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }, { action: ACTION.ELEMENT_LIGHT }],
    },
  },
  202: {
    id: 202,
    class: CLASS.SUNKEEPER,
    name: 'Inspiring Sanctity',
    level: 8,
    initiative: 79,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent ally may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 8, className: 'mt-0' },
        {
          action: ACTION.ELEMENT_LIGHT_CONSUME,
          condition: true,
          bonuses: [{ action: ACTION.NOTE, value: 'Kill the normal or elite target\nof the attack instead, (XP:1).' }],
          className: 'mt-0',
        },
        { action: ACTION.XP, value: 2, className: 'large mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        { action: ACTION.NOTE, value: 'All allies within Range (Symbol:Range)3 may perform', className: 'small' },
        { action: ACTION.ATTACK, value: 4 },
        { action: ACTION.NOTE, value: 'Gain (XP:1) for each attack made.', className: 'small' },
      ],
      consumed: true,
    },
  },
  203: {
    id: 203,
    class: CLASS.SUNKEEPER,
    name: 'Angelic Ascension',
    level: 9,
    initiative: 87,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `On your next four attack actions, add
               +3 Attack (Symbol:Attack), WOUND (Effect:Wound), and gain Advantage.`,
          style: { fontSize: '0.75em', lineHeight: '1em' },
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
          className: 'mt-0',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 6,
          augments: [1],
          bonuses: [{ action: ACTION.JUMP }],
        },
      ],
    },
  },
  204: {
    id: 204,
    class: CLASS.SUNKEEPER,
    name: 'Divine Intervention',
    level: 9,
    initiative: 9,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `You may negate all damage any ally
                suffers by suffering the same amount
                of damage reduced by 1.`,
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
        {
          action: ACTION.SHIELD,
          value: 1,
          augments: [1],
          bonuses: [{ action: ACTION.NOTE, value: 'Affect self and all allies' }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.ELEMENT_LIGHT, className: 'd-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
  },
};

import { AUGMENT_SLOT } from '../../../AUGMENT';
import { CLASS } from '../../../CLASS';
import { SUMMON } from '../../../SUMMON';
import { SYMBOL } from '../../../SYMBOL';
import ACTION from '../../ACTION';

export default {
  376: {
    id: 376,
    class: CLASS.DOOMSTALKER,
    name: 'Rain of Arrows',
    level: 1,
    initiative: 33,
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `The next four times a (ClassAbility:DS:Doomed) target dies,
        perform an "Attack (Symbol:Attack) 2, Range (Symbol:Range) 5" action.`,
          symbols: [
            SYMBOL.PERSISTENT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT,
            SYMBOL.USE_SLOT_GAIN_XP_1,
            SYMBOL.USE_SLOT,
            SYMBOL.CONSUMED,
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'Add +2 Attack (Symbol:Attack) to all your attacks\ntargeting this enemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When this enemy dies or another
            (ClassAbility:DS:Doom) action is played,
            discard this card`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  377: {
    id: 377,
    class: CLASS.DOOMSTALKER,
    name: 'Crippling Noose',
    level: 1,
    initiative: 57,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one 4 damage (Effect:Stun) trap\nin an adjacent empty hex.',
          className: 'small',
        },
        { action: ACTION.NOTE, value: 'Gain (XP:2) when the trap is sprung\nby an enemy.', className: 'small' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: `This enemy's Attack (Symbol:Attack), Move (Symbol:Move),
        and Range (Symbol:Range) are all reduced by 1.`,
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  378: {
    id: 378,
    class: CLASS.DOOMSTALKER,
    name: 'Felling Swoop',
    level: 1,
    initiative: 75,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.WAR_HAWK },
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
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'When this enemy dies, move\nto the hex in which it died.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  379: {
    id: 379,
    class: CLASS.DOOMSTALKER,
    name: 'Vital Charge',
    level: 1,
    initiative: 78,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.BATTLE_BOAR },
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
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'When this enemy dies, perform\na "Heal (Symbol:Heal) 5, Self" action.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  380: {
    id: 380,
    class: CLASS.DOOMSTALKER,
    name: 'Race to the Grave',
    level: 1,
    initiative: 9,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1, 2],
          bonuses: [
            { action: ACTION.RANGE, value: 5, augments: [3] },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'This enemy suffers 2 damage\nat the start of each of its turns.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  381: {
    id: 381,
    class: CLASS.DOOMSTALKER,
    name: 'Multi-pronged Assault',
    level: 1,
    initiative: 14,
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
            { action: ACTION.TARGET, value: 2, augments: [3] },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'All allies add +1 Attack (Symbol:Attack) to\nall attacks targeting this enemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  382: {
    id: 382,
    class: CLASS.DOOMSTALKER,
    name: 'Detonation',
    level: 1,
    initiative: 54,
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'Create on 3 damage trap\nin an adjacent empty hex.', className: 'small' },
        {
          action: ACTION.NOTE,
          value: 'All enemies adjacent to this trap also suffer\n2 damage when the trap is sprung.',
          className: 'small',
        },
        { action: ACTION.NOTE, value: 'Gain (XP:2) when the trap is sprung\nby an enemy.', className: 'small' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'When this enemy dies, all enemies adjacent\nto the hex in which it died suffer 3 damage.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  383: {
    id: 383,
    class: CLASS.DOOMSTALKER,
    name: 'Frightening Curse',
    level: 1,
    initiative: 37,
    top: {
      actions: [
        {
          action: ACTION.SYMBOLS,
          text: `The next three times a (ClassAbility:DS:Doomed) enemy dies
                 within 2 hexes of another enemy, transfer one
                 (ClassAbility:DS:Doom) to that enemy instead of discarding it.`,
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
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-0',
        },
        {
          action: ACTION.NOTE,
          value: `When this enemy dies, force all enemies
                  adjacent to the hex in which it died to
                  move 1 hex in any direction.`,
          className: 'small mt-0',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  384: {
    id: 384,
    class: CLASS.DOOMSTALKER,
    name: 'Foot Snare',
    level: 1,
    initiative: 61,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one 2 damage (Effect:Immobilize) trap\nin an adjacent empty hex.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.IMMOBILIZE,
          bonuses: [{ action: ACTION.NOTE, value: 'Target one adjacent enemy' }],
        },
        { action: ACTION.MOVE, value: 3, augments: [1] },
      ],
    },
  },
  385: {
    id: 385,
    class: CLASS.DOOMSTALKER,
    name: 'Solid Bow',
    level: 1,
    initiative: 31,
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
          bonuses: [{ action: ACTION.RANGE, value: 5, augments: [2] }],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 4, augments: [3] }],
    },
  },
  386: {
    id: 386,
    class: CLASS.DOOMSTALKER,
    name: "A Moment's Peace",
    level: 1,
    initiative: 88,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [{ action: ACTION.LOOT, value: 1 }],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        {
          action: ACTION.HEAL,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  387: {
    id: 387,
    class: CLASS.DOOMSTALKER,
    name: 'Swift Trickery',
    level: 1,
    initiative: 11,
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
          bonuses: [
            { action: ACTION.RANGE, value: 4, augments: [2] },
            { action: ACTION.NOTE, value: 'Add +2 Attack (Symbol:Attack) if the target is (ClassAbility:DS:Doomed)' },
          ],
        },
      ],
    },
    bottom: {
      actions: [{ action: ACTION.MOVE, value: 5, augments: [3] }],
    },
  },
  388: {
    id: 388,
    class: CLASS.DOOMSTALKER,
    name: 'Sap Life',
    level: 0,
    initiative: 14,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 3,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 4, augments: [2] }],
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.ROUND, className: 'd-inline-block mx-2' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'Each time the enemy suffers damage,\nperform a "Heal (Symbol:Heal) 2, Self" action.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  389: {
    id: 389,
    class: CLASS.DOOMSTALKER,
    name: 'The Hunt Begins',
    level: 0,
    initiative: 71,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.VICIOUS_JACKAL },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
            { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'All summoned allies add +2 Attack (Symbol:Attack)\nto all attacks targeting this enemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  390: {
    id: 390,
    class: CLASS.DOOMSTALKER,
    name: 'Fresh Kill',
    level: 0,
    initiative: 65,
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
            { action: ACTION.RANGE, value: 4, augments: [2] },
            { action: ACTION.NOTE, value: 'Add +2 Attack (Symbol:Attack) if the target is undamaged' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.MOVE,
          value: 3,
          augments: [3],
          bonuses: [{ action: ACTION.JUMP }],
        },
      ],
    },
  },
  391: {
    id: 391,
    class: CLASS.DOOMSTALKER,
    name: 'Expose',
    level: 2,
    initiative: 13,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'All enemies lose INVISIBLE (Effect:Invisible) and\nmay no longer gain INVISIBLE (Effect:Invisible).',
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
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'You and all allies gain PIERCE (Effect:Pierce) 2 on\nall attacks targeting this enemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  392: {
    id: 392,
    class: CLASS.DOOMSTALKER,
    name: 'Relentless Offensive',
    level: 2,
    initiative: 52,
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
          bonuses: [{ action: ACTION.RANGE, value: 5 }, { action: ACTION.TARGET, value: 2, augments: [2] }],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Add +2 Attack (Symbol:Attack) to all your attacks
          targeting (ClassAbility:DS:Doomed) enemies this round`,
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  393: {
    id: 393,
    class: CLASS.DOOMSTALKER,
    name: 'Darkened Skies',
    level: 3,
    initiative: 25,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
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
              value: 'Target all enemies within Range (Symbol:Range) 3\nGain (XP:1) for each two enemies targeted.',
            },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: `When this enemy dies, perform an
                  "Attack (Symbol:Attack)2, Range (Symbol:Range)3, Target (Symbol:Target)3" action.`,
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  394: {
    id: 394,
    class: CLASS.DOOMSTALKER,
    name: 'Press the Attack',
    level: 3,
    initiative: 10,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 4, augments: [2] },
            { action: ACTION.NOTE, value: 'Add +3 Attack (Symbol:Attack) if the target is (ClassAbility:DS:Doomed)' },
          ],
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.RETALIATE,
          value: 2,
          augments: [3],
          bonuses: [{ action: ACTION.RANGE, value: 2 }, { action: ACTION.ROUND }],
        },
      ],
    },
  },
  395: {
    id: 395,
    class: CLASS.DOOMSTALKER,
    name: 'Singular Focus',
    level: 4,
    initiative: 28,
    top: {
      actions: [{ action: ACTION.LOOT, value: 2 }, { action: ACTION.XP, value: 2, className: 'large' }],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'All attacks which target\nthis enemy have Advantage.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  396: {
    id: 396,
    class: CLASS.DOOMSTALKER,
    name: 'Flight of Flame',
    level: 4,
    initiative: 53,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'Create one 2 damage (Effect:Wound) trap\nin an adjacent empty hex.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: '(Effect:Wound) all enemies adjacent to this trap when the trap is sprung.',
          className: 'small',
        },
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
      ],
    },
  },
  397: {
    id: 397,
    class: CLASS.DOOMSTALKER,
    name: 'Inescapable Fate',
    level: 5,
    initiative: 97,
    top: {
      actions: [
        {
          action: ACTION.NOTE,
          value: 'You may have two (ClassAbility:DS:Dooms) active\non the same target.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: `If a third is played on the same target,
                  discard one of the others, or if a third is
                  played on a different target, discard both.`,
          className: 'small',
        },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2 mt-0' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2 mt-0' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on a\nnormal or elite enemy.',
          className: 'small',
        },
        {
          action: ACTION.NOTE,
          value: `At the start of your next three turns,
                 advance the marker on this card. After it
                 advances three times, the target dies.`,
          className: 'small mt-1',
        },
        {
          action: ACTION.SYMBOLS,
          symbols: [SYMBOL.PERSISTENT, SYMBOL.USE_SLOT, SYMBOL.USE_SLOT, SYMBOL.USE_SLOT],
          className: 'mt-0',
        },
      ],
    },
  },
  398: {
    id: 398,
    class: CLASS.DOOMSTALKER,
    name: 'Wild Command',
    level: 5,
    initiative: 46,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY },
    },
    top: {
      actions: [
        { action: ACTION.NOTE, value: 'One adjacent summoned ally performs', className: 'small' },
        { action: ACTION.MOVE, value: '+ 0' },
        { action: ACTION.ATTACK, value: '+ 0' },
        { action: ACTION.NOTE, value: 'with you controlling the actions.', className: 'small' },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [1] },
        {
          action: ACTION.ATTACK,
          value: 2,
          augments: [2],
          bonuses: [{ action: ACTION.NOTE, value: 'Target one (ClassAbility:DS:Doomed) enemy at any range' }],
        },
      ],
    },
  },
  399: {
    id: 399,
    class: CLASS.DOOMSTALKER,
    name: "Nature's Hunger",
    level: 6,
    initiative: 82,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.GIANT_TOAD },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'When this enemy dies, you and all allies\nperform a "Heal (Symbol:Heal) 2, Self" action.',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  400: {
    id: 400,
    class: CLASS.DOOMSTALKER,
    name: 'Camouflage',
    level: 6,
    initiative: 23,
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
          bonuses: [{ action: ACTION.RANGE, value: 5 }],
        },
        {
          action: ACTION.INVISIBLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.ATTACK, value: 3, augments: [2], bonuses: [] },
        {
          action: ACTION.INVISIBLE,
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  401: {
    id: 401,
    class: CLASS.DOOMSTALKER,
    name: 'Impending End',
    level: 7,
    initiative: 47,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 4, augments: [2] }],
        },
        {
          action: ACTION.NOTE,
          value: 'Kill the target if it has 2 or fewer\nhit points after the attack.',
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: `Add +3 Attack (Symbol:Attack) to all your attacks
                  targeting (ClassAbility:DS:Doomed) enemies this round`,
          className: 'small',
        },
        { action: ACTION.ROUND },
      ],
    },
  },
  402: {
    id: 402,
    class: CLASS.DOOMSTALKER,
    name: 'Crashing Wave',
    level: 7,
    initiative: 22,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
      3: { id: 3, ...AUGMENT_SLOT.ENEMY, top: true, multiple: true },
    },
    top: {
      actions: [
        { action: ACTION.MOVE, value: 4, augments: [1] },
        {
          action: ACTION.ATTACK,
          value: 3,
          augments: [2, 3],
          bonuses: [
            { action: ACTION.NOTE, value: 'Target all adjacent enemies\nGain (XP:1) for each enemy targeted.' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-1',
        },
        {
          action: ACTION.NOTE,
          value: 'All attacks which target\nthis enemy gain CURSE (Effect:Curse).',
          className: 'small mt-1',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-1',
        },
      ],
    },
  },
  403: {
    id: 403,
    class: CLASS.DOOMSTALKER,
    name: 'Rising Momentum',
    level: 8,
    initiative: 12,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 5,
          augments: [1],
          bonuses: [
            { action: ACTION.RANGE, value: 5, augments: [2] },
            { action: ACTION.PUSH, value: 3, augments: [3] },
            { action: ACTION.XP, value: 2, className: 'large' },
          ],
        },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-0',
        },
        {
          action: ACTION.NOTE,
          value: `If this enemy dies within Range (Symbol:Range) 2
                  of another enemy, transfer this and
                  any other Dooms to that enemy
                  instead of discarding them`,
          className: 'small mt-0',
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When another (ClassAbility:DS:Doom) action
                      is played, discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-0',
        },
      ],
    },
  },
  404: {
    id: 404,
    class: CLASS.DOOMSTALKER,
    name: 'Feral Instincts',
    level: 8,
    initiative: 35,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.MOVE, top: true },
      2: { id: 2, ...AUGMENT_SLOT.ENEMY, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
      4: { id: 4, ...AUGMENT_SLOT.SELF },
    },
    top: {
      actions: [
        { action: ACTION.MOVE, value: 2, augments: [1] },
        { action: ACTION.ATTACK, value: 3, augments: [2] },
        { action: ACTION.LOOT, value: 1 },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.HEAL,
          value: 5,
          augments: [4],
          bonuses: [{ action: ACTION.NOTE, value: 'Self' }],
        },
      ],
    },
  },
  405: {
    id: 405,
    class: CLASS.DOOMSTALKER,
    name: 'Predator and Prey',
    level: 9,
    initiative: 86,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.NUMERIC, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.NUMERIC, top: true },
      4: { id: 4, ...AUGMENT_SLOT.NUMERIC, top: true },
    },
    top: {
      actions: [
        { action: ACTION.SUMMON, summon: SUMMON.SPITTING_COBRA },
        { action: ACTION.XP, value: 2, className: 'large d-inline-block mx-2' },
        { action: ACTION.PERSISTENT, className: 'd-inline-block mx-2' },
      ],
      consumed: true,
    },
    bottom: {
      actions: [
        {
          action: ACTION.NOTE,
          value: '(ClassAbility:DS:Doom): Place your class token on an\nenemy.',
          className: 'small mt-0',
        },
        {
          action: ACTION.NOTE,
          value: `All ranged attacks targeting this enemy
                  add +X Attack (Symbol:Attack), where X is equal to the
                  difference between the range of the attack
                  and the number of hexes to the enemy.`,
          className: 'small mt-0',
          style: { fontSize: '0.8em', lineHeight: '0.9em' },
        },
        {
          action: ACTION.FRAGMENT,
          bonuses: [
            { action: ACTION.PERSISTENT, className: 'd-inline-block' },
            {
              action: ACTION.NOTE,
              value: `When the enemy dies or another
                      (ClassAbility:DS:Doom) action is played,
                      discard this card.`,
              className: 'd-inline-block',
            },
          ],
          className: 'mt-0',
        },
      ],
    },
  },
  406: {
    id: 406,
    class: CLASS.DOOMSTALKER,
    name: 'Lead to Slaughter',
    level: 9,
    initiative: 40,
    augmentSlots: {
      1: { id: 1, ...AUGMENT_SLOT.ENEMY, top: true },
      2: { id: 2, ...AUGMENT_SLOT.NUMERIC, top: true },
      3: { id: 3, ...AUGMENT_SLOT.MOVE },
    },
    top: {
      actions: [
        {
          action: ACTION.ATTACK,
          value: 4,
          augments: [1],
          bonuses: [{ action: ACTION.RANGE, value: 6, augments: [2] }],
        },
        {
          action: ACTION.NOTE,
          value: `Force the target to move up to three hexes
          directly toward the closest hex adjacent
          to one of your allies.`,
          className: 'small',
        },
      ],
    },
    bottom: {
      actions: [
        { action: ACTION.MOVE, value: 3, augments: [3] },
        {
          action: ACTION.NOTE,
          value: `Transfer all active (ClassAbility:DS:Dooms) from
              their current target to an enemy
              within Range (Symbol:Range) 4 of you.`,
          className: 'small',
        },
      ],
    },
  },
};

import ACTION from './';

import { CLASS, STANDARD_ATTACK_MODIFIER_DECK } from '../../../../constants';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = {
        action: ACTION.id,
        payload: { player: 1, party: 2, name: 'Bob', level: 3, class: 4, quest: 5, imported: true },
      };
      const actual = ACTION.create({ player: 1, party: 2, name: 'Bob', level: 3, class: 4, quest: 5, imported: true });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should create a character', () => {
      const campaign = {
        players: { 1: { characters: {}, retired: {} } },
        parties: { 2: { characters: {} } },
        characters: {},
      };
      const expected = {
        players: { 1: { characters: { 1: true }, retired: {} } },
        parties: { 2: { characters: { 1: true } } },
        characters: {
          1: {
            id: 1,
            player: 1,
            party: 2,
            name: 'Bob',
            xp: 0,
            class: CLASS.BRUTE,
            quest: 523,
            retirement: {
              complete: false,
              enemies: {},
              progress: 0,
            },
            hiatus: false,
            retired: false,
            level: 1,
            gold: 30,
            items: {},
            checks: 0,
            perks: [],
            maxPerks: 0,
            attackDeck: [...STANDARD_ATTACK_MODIFIER_DECK],
            abilityDeck: {
              1: { id: 1, augments: {} },
              2: { id: 2, augments: {} },
              3: { id: 3, augments: {} },
              4: { id: 4, augments: {} },
              5: { id: 5, augments: {} },
              6: { id: 6, augments: {} },
              7: { id: 7, augments: {} },
              8: { id: 8, augments: {} },
              9: { id: 9, augments: {} },
              10: { id: 10, augments: {} },
              11: { id: 11, augments: {} },
              12: { id: 12, augments: {} },
              13: { id: 13, augments: {} },
            },
            maxAbilities: 13,
            notes: '',
            donate: false,
            by: 'by',
            dt: 'dt',
            imported: true,
          },
        },
      };
      const action = ACTION.create({
        player: 1,
        party: 2,
        name: 'Bob',
        level: 1,
        class: CLASS.BRUTE,
        quest: 523,
        imported: true,
      });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

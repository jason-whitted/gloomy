import ACTION from './';

import { ATTACK_MODIFIER_CARD } from '../../../../constants';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1 } };
      const actual = ACTION.create({ character: 1 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the character', () => {
      const campaign = {
        characters: {
          123: { gold: 22, attackDeck: [], donate: true },
        },
        donations: 2,
        prosperity: 0,
      };
      const expected = {
        characters: {
          123: { gold: 12, attackDeck: [ATTACK_MODIFIER_CARD.BLESS, ATTACK_MODIFIER_CARD.BLESS], donate: false },
        },
        donations: 3,
        prosperity: 0,
      };
      const action = ACTION.create({ character: 123 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should give Envelope B', () => {
      const campaign = {
        characters: {
          123: { gold: 22, attackDeck: [], donate: true },
        },
        donations: 9,
        prosperity: 0,
      };
      const expected = {
        characters: {
          123: { gold: 12, attackDeck: [ATTACK_MODIFIER_CARD.BLESS, ATTACK_MODIFIER_CARD.BLESS], donate: false },
        },
        donations: 10,
        prosperity: 0,
        envelopes: { B: true },
      };
      const action = ACTION.create({ character: 123 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should give Envelope B bonus prosperity', () => {
      const campaign = {
        characters: {
          123: { gold: 22, attackDeck: [], donate: true },
        },
        donations: 14,
        prosperity: 8,
        envelopes: { B: true },
      };
      const expected = {
        characters: {
          123: { gold: 12, attackDeck: [ATTACK_MODIFIER_CARD.BLESS, ATTACK_MODIFIER_CARD.BLESS], donate: false },
        },
        donations: 15,
        prosperity: 9,
        envelopes: { B: true },
      };
      const action = ACTION.create({ character: 123 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

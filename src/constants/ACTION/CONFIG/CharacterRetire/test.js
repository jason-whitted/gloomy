import ACTION from './';

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
    it('should mark the character as retired, increase prosperity, sell their items and unlock a class', () => {
      const campaign = {
        prosperity: 2,
        characters: {
          1: { id: 1, party: 2, player: 3, quest: 510, items: { 1: true }, gold: 0 },
        },
        parties: {
          2: { id: 2, characters: { 1: true }, items: { 1: 0 } },
        },
        players: {
          3: { id: 3, characters: { 1: true }, retired: {} },
        },
      };
      const expected = {
        prosperity: 3,
        characters: {
          1: { id: 1, party: 2, player: 3, quest: 510, items: {}, gold: 10, retired: true },
        },
        parties: {
          2: { id: 2, characters: {}, items: { 1: 1 } },
        },
        players: {
          3: { id: 3, characters: {}, retired: { 1: true } },
        },
        classes: { PH: true },
      };
      const action = ACTION.create({ character: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should mark the character as retired and unlock an envelope', () => {
      const campaign = {
        prosperity: 1,
        characters: {
          1: { id: 1, party: 2, player: 3, quest: 513, items: {}, gold: 0 },
        },
        parties: {
          2: { id: 2, characters: { 1: true }, items: {} },
        },
        players: {
          3: { id: 3, characters: { 1: true }, retired: {} },
        },
      };
      const expected = {
        prosperity: 2,
        characters: {
          1: { id: 1, party: 2, player: 3, quest: 513, items: {}, gold: 0, retired: true },
        },
        parties: {
          2: { id: 2, characters: {}, items: {} },
        },
        players: {
          3: { id: 3, characters: {}, retired: { 1: true } },
        },
        envelopes: { X: true },
      };
      const action = ACTION.create({ character: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

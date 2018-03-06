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
    it('should update the inventory / gold', () => {
      const campaign = {
        characters: {
          1: { id: 1, party: 2, items: { 1: 1, 3: 1 }, gold: 40 },
        },
        parties: {
          2: { id: 2, items: { 1: 1, 2: 2, 3: 0 } },
        },
      };
      const expected = {
        characters: {
          1: { id: 1, party: 2, items: {}, gold: 55 },
        },
        parties: {
          2: { id: 2, items: { 1: 2, 2: 2, 3: 1 } },
        },
      };
      const action = ACTION.create({ character: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

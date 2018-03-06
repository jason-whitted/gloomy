import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1, item: 2 } };
      const actual = ACTION.create({ character: 1, item: 2 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the inventory / gold', () => {
      const campaign = {
        characters: {
          1: { id: 1, party: 2, items: {} },
        },
        items: {},
        parties: {
          2: { id: 2, items: {} },
          4: { id: 4, items: {} },
        },
      };
      const expected = {
        characters: {
          1: { id: 1, party: 2, items: { 3: 1 } },
        },
        items: { 3: 2 },
        parties: {
          2: { id: 2, items: { 3: 1 } },
          4: { id: 4, items: { 3: 2 } },
        },
      };
      const action = ACTION.create({ character: 1, item: 3 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

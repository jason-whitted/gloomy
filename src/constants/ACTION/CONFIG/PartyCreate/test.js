import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { name: 'Bob' } };
      const actual = ACTION.create({ name: 'Bob' });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should create a party', () => {
      const campaign = {
        items: { 1: 2, 2: 2, 3: 2 },
        parties: {},
      };
      const expected = {
        items: { 1: 2, 2: 2, 3: 2 },
        parties: {
          1: {
            id: 1,
            name: 'Bob',
            location: {},
            characters: {},
            reputation: 0,
            achievements: [],
            items: { 1: 2, 2: 2, 3: 2 },
            by: 'by',
            dt: 'dt',
          },
        },
      };
      const action = ACTION.create({ name: 'Bob' });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

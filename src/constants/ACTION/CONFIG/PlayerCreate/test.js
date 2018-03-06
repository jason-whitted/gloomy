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
    it('should create a player', () => {
      const campaign = {
        players: {},
      };
      const expected = {
        players: {
          1: {
            id: 1,
            name: 'Bob',
            characters: {},
            retired: {},
            parties: {},
            by: 'by',
            dt: 'dt',
          },
        },
      };
      const action = ACTION.create({ id: 4, name: 'Bob', by: 'by', dt: 'dt' });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

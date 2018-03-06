import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { event: 2 } };
      const actual = ACTION.create({ event: 2 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the road events and "shuffle"', () => {
      const campaign = {
        roadEvents: {
          top: [],
          bottom: [2, 3],
        },
      };
      const expected = {
        roadEvents: {
          top: [1, 2, 3],
          bottom: [],
        },
      };
      const action = ACTION.create({ event: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

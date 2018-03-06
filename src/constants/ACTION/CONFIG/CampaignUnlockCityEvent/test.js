import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { event: 1 } };
      const actual = ACTION.create({ event: 1 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the city events and "shuffle"', () => {
      const campaign = {
        cityEvents: {
          top: [],
          bottom: [2, 3],
        },
      };
      const expected = {
        cityEvents: {
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

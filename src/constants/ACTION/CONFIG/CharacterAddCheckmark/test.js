import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1, count: 2 } };
      const actual = ACTION.create({ character: 1, count: 2 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the checkmark', () => {
      const campaign = {
        characters: {
          123: { checks: 2, maxPerks: 0 },
          789: { checks: 3, maxPerks: 1 },
        },
      };
      const expected = {
        characters: {
          123: { checks: 4, maxPerks: 1 },
          789: { checks: 3, maxPerks: 1 },
        },
      };
      const action = ACTION.create({ character: 123, count: 2 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

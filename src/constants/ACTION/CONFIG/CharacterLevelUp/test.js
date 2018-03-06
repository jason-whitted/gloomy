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
    it('should update the level and maxPerks', () => {
      const campaign = {
        characters: {
          123: { level: 3, maxAbilities: 2, maxPerks: 4 },
        },
      };
      const expected = {
        characters: {
          123: { level: 4, maxAbilities: 3, maxPerks: 5 },
        },
      };
      const action = ACTION.create({ character: 123 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

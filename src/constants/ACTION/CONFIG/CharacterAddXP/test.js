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
    it('should update the xp', () => {
      const campaign = { characters: { 123: { gold: 1 }, 789: { xp: 10 } } };
      const expected = { characters: { 123: { gold: 1 }, 789: { xp: 13 } } };
      const action = ACTION.create({ character: 789, count: 3 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

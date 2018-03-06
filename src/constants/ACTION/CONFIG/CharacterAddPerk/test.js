import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1, perk: 2 } };
      const actual = ACTION.create({ character: 1, perk: 2 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the perks', () => {
      const campaign = { characters: { 123: { perks: [1] }, 789: { perks: [4] } } };
      const expected = { characters: { 123: { perks: [1] }, 789: { perks: [4, 2] } } };
      const action = ACTION.create({ character: 789, perk: 2 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

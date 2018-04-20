import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1, value: 2, max: 3 } };
      const actual = ACTION.create({ character: 1, value: 2, max: 3 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should return the campaign', () => {
      const campaign = {};
      const action = ACTION.create({ character: 1, value: 2, max: 3 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toBe(campaign);
    });
  });
});
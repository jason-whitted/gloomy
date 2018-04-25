import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { permissions: 3 } };
      const actual = ACTION.create({ permissions: 3 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the permissions if owned by the poster', () => {
      const campaign = { owner: 'by' };
      const expected = { owner: 'by', permissions: { 1: 2 } };
      const action = ACTION.create({ permissions: { 1: 2 } });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should not update the permissions if not owned by the poster', () => {
      const campaign = { owner: 'o.O', permissions: { 1: 2 } };
      const expected = { owner: 'o.O', permissions: { 1: 2 } };
      const action = ACTION.create({ permissions: { 3: 4 } });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

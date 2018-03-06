import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { id: 1 } };
      const actual = ACTION.create({ id: 1 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should delete the history', () => {
      const campaign = {
        history: [{ id: 1 }, { id: 2 }, { id: 3 }],
      };
      const expected = {
        history: [{ id: 1 }, { id: 2, deleted: true }, { id: 3 }],
      };
      const action = ACTION.create({ id: 2 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

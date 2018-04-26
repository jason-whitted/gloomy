import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { notes: 'Bob' } };
      const actual = ACTION.create({ notes: 'Bob' });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the notes', () => {
      const campaign = {
        notes: 'abc',
      };
      const expected = {
        notes: 'def',
      };
      const action = ACTION.create({ notes: 'def' });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

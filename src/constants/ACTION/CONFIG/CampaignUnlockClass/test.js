import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { class: 1 } };
      const actual = ACTION.create({ class: 1 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the classes', () => {
      const campaign = { classes: {} };
      const expected = { classes: { 1: true } };
      const action = ACTION.create({ class: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

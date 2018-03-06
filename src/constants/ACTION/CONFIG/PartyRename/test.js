import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { party: 1, from: 'Joe', to: 'Bob' } };
      const actual = ACTION.create({ party: 1, from: 'Joe', to: 'Bob' });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should rename a party', () => {
      const campaign = {
        parties: { 1: { name: 'Joe' } },
      };
      const expected = {
        parties: { 1: { name: 'Bob' } },
      };
      const action = ACTION.create({ party: 1, from: 'Joe', to: 'Bob' });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

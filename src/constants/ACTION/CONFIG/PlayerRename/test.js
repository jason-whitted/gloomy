import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { player: 1, from: 'Joe', to: 'Bob' } };
      const actual = ACTION.create({ player: 1, from: 'Joe', to: 'Bob' });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should rename a player', () => {
      const campaign = {
        players: { 1: { name: 'Joe' } },
      };
      const expected = {
        players: { 1: { name: 'Bob' } },
      };
      const action = ACTION.create({ player: 1, from: 'Joe', to: 'Bob' });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { player: 1, owners: ['fred'] } };
      const actual = ACTION.create({ player: 1, owners: ['fred'] });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the owner if the poster is the campaign owner', () => {
      const campaign = {
        owner: 'by',
        players: { 1: {} },
      };
      const expected = {
        owner: 'by',
        players: { 1: { owners: ['fred'] } },
      };
      const action = ACTION.create({ player: 1, owners: ['fred'] });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should not update the owner if the poster is not the campaign owner', () => {
      const campaign = {
        owner: 'o.O',
        players: { 1: { owner: ['fred'] } },
      };
      const expected = {
        owner: 'o.O',
        players: { 1: { owner: ['fred'] } },
      };
      const action = ACTION.create({ player: 1, owners: ['by'] });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

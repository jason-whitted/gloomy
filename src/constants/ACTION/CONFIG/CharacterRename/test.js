import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1, from: 'Joe', to: 'Bob' } };
      const actual = ACTION.create({ character: 1, from: 'Joe', to: 'Bob' });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the name', () => {
      const campaign = {
        characters: {
          123: { name: 'abc' },
        },
      };
      const expected = {
        characters: {
          123: { name: 'def' },
        },
      };
      const action = ACTION.create({ character: 123, from: 'abc', to: 'def' });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

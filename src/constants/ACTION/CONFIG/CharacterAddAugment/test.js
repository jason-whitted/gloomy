import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1, ability: 2, slot: 3, augment: 4 } };
      const actual = ACTION.create({ character: 1, ability: 2, slot: 3, augment: 4 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the ability augments', () => {
      const campaign = {
        characters: {
          123: { gold: 100 },
          789: { gold: 100 },
        },
        augments: {},
      };
      const expected = {
        characters: {
          123: { gold: 50 },
          789: { gold: 100 },
        },
        augments: { 2: { 3: 4 } },
      };
      const action = ACTION.create({ character: 123, ability: 2, slot: 3, augment: 4 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

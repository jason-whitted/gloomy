import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1, ability: 2 } };
      const actual = ACTION.create({ character: 1, ability: 2 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the ability', () => {
      const campaign = {
        characters: {
          123: { abilityDeck: [1] },
          789: { abilityDeck: [1] },
        },
      };
      const expected = {
        characters: {
          123: {
            abilityDeck: [1],
          },
          789: {
            abilityDeck: [1, 2],
          },
        },
      };
      const action = ACTION.create({ character: 789, ability: 2 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

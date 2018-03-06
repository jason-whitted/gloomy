import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { character: 1 } };
      const actual = ACTION.create({ character: 1 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should turn hiatus on', () => {
      const campaign = { characters: { 1: { id: 1, hiatus: false }, 2: { id: 2, hiatus: false } } };
      const expected = { characters: { 1: { id: 1, hiatus: true }, 2: { id: 2, hiatus: false } } };
      const action = ACTION.create({ character: 1, hiatus: true });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should turn hiatus off', () => {
      const campaign = { characters: { 1: { id: 1, hiatus: true }, 2: { id: 2, hiatus: false } } };
      const expected = { characters: { 1: { id: 1, hiatus: false }, 2: { id: 2, hiatus: false } } };
      const action = ACTION.create({ character: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

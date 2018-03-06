import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { count: 3 } };
      const actual = ACTION.create({ count: 3 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should increment the prosperity', () => {
      const campaign = { prosperity: 0 };
      const expected = { prosperity: 2 };
      const action = ACTION.create({ count: 2 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should unlock prosperity items', () => {
      const pros1 = { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2 };
      const pros2 = { 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 4, 21: 2 };
      const pros3 = { 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 4, 28: 2 };
      const campaign = {
        prosperity: 0,
        items: { ...pros1 },
        parties: { 1: { items: { ...pros1, 1: 0 } } },
      };
      const expected = {
        prosperity: 12,
        items: { ...pros1, ...pros2, ...pros3 },
        parties: { 1: { items: { ...pros1, 1: 0, ...pros2, ...pros3 } } },
      };
      const action = ACTION.create({ count: 12 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

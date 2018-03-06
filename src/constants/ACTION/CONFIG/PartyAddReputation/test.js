import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { party: 1, count: 2 } };
      const actual = ACTION.create({ party: 1, count: 2 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the party reputation', () => {
      const campaign = {
        parties: { 1: { reputation: 5 } },
        reputationBounds: { min: 0, max: 5 },
      };
      const expected = {
        parties: { 1: { reputation: 8 } },
        reputationBounds: { min: 0, max: 8 },
      };
      const action = ACTION.create({ party: 1, count: 3 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should unlock SK at 10 rep', () => {
      const campaign = {
        classes: {},
        parties: { 1: { reputation: 9 } },
        reputationBounds: { min: 0, max: 9 },
      };
      const expected = {
        classes: { SK: true },
        parties: { 1: { reputation: 10 } },
        reputationBounds: { min: 0, max: 10 },
      };
      const action = ACTION.create({ party: 1, count: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should unlock NS at -10 rep', () => {
      const campaign = {
        classes: {},
        parties: { 1: { reputation: -9 } },
        reputationBounds: { min: -9, max: 0 },
      };
      const expected = {
        classes: { NS: true },
        parties: { 1: { reputation: -10 } },
        reputationBounds: { min: -10, max: 0 },
      };
      const action = ACTION.create({ party: 1, count: -1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should unlock city/road events at 20 rep', () => {
      const campaign = {
        classes: { SK: true },
        parties: { 1: { reputation: 19 } },
        reputationBounds: { min: 0, max: 19 },
        cityEvents: { top: [1, 2, 3], bottom: [] },
        roadEvents: { top: [4, 5, 6], bottom: [] },
      };
      const expected = {
        classes: { SK: true },
        parties: { 1: { reputation: 20 } },
        reputationBounds: { min: 0, max: 20 },
        cityEvents: { top: [1, 2, 3, 76], bottom: [] },
        roadEvents: { top: [4, 5, 6, 67], bottom: [] },
      };
      const action = ACTION.create({ party: 1, count: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should unlock city/road events at -20 rep', () => {
      const campaign = {
        classes: { NS: true },
        parties: { 1: { reputation: -19 } },
        reputationBounds: { min: -19, max: 0 },
        cityEvents: { top: [1, 2, 3], bottom: [] },
        roadEvents: { top: [4, 5, 6], bottom: [] },
      };
      const expected = {
        classes: { NS: true },
        parties: { 1: { reputation: -20 } },
        reputationBounds: { min: -20, max: 0 },
        cityEvents: { top: [1, 2, 3, 77], bottom: [] },
        roadEvents: { top: [4, 5, 6, 68], bottom: [] },
      };
      const action = ACTION.create({ party: 1, count: -1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should should not add more city/road events if the campaign had already been above 20 rep before', () => {
      const campaign = {
        classes: { SK: true },
        parties: { 1: { reputation: 19 } },
        reputationBounds: { min: 0, max: 20 },
        cityEvents: { top: [1, 2, 3], bottom: [] },
        roadEvents: { top: [4, 5, 6], bottom: [] },
      };
      const expected = {
        classes: { SK: true },
        parties: { 1: { reputation: 20 } },
        reputationBounds: { min: 0, max: 20 },
        cityEvents: { top: [1, 2, 3], bottom: [] },
        roadEvents: { top: [4, 5, 6], bottom: [] },
      };
      const action = ACTION.create({ party: 1, count: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should should not add more city/road events if the campaign had already been below -20 rep before', () => {
      const campaign = {
        classes: { NS: true },
        parties: { 1: { reputation: -19 } },
        reputationBounds: { min: -20, max: 0 },
        cityEvents: { top: [1, 2, 3], bottom: [] },
        roadEvents: { top: [4, 5, 6], bottom: [] },
      };
      const expected = {
        classes: { NS: true },
        parties: { 1: { reputation: -20 } },
        reputationBounds: { min: -20, max: 0 },
        cityEvents: { top: [1, 2, 3], bottom: [] },
        roadEvents: { top: [4, 5, 6], bottom: [] },
      };
      const action = ACTION.create({ party: 1, count: -1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

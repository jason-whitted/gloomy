import { GLOBAL_ACHIEVEMENT } from '../../../GLOBAL_ACHIEVEMENT';
import { PARTY_ACHIEVEMENT } from '../../../PARTY_ACHIEVEMENT';
import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { party: 2, achievement: 3, remove: 4 } };
      const actual = ACTION.create({ party: 2, achievement: 3, remove: 4 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should add the achievement', () => {
      const campaign = { achievements: {}, parties: { 1: { id: 1, achievements: {} } } };
      const expected = { achievements: {}, parties: { 1: { id: 1, achievements: { 2: 1 } } } };
      const action = ACTION.create({ party: 1, achievement: 2 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should increment the achievement', () => {
      const campaign = { achievements: {}, parties: { 1: { id: 1, achievements: { 2: 1 } } } };
      const expected = { achievements: {}, parties: { 1: { id: 1, achievements: { 2: 2 } } } };
      const action = ACTION.create({ party: 1, achievement: 2 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should remove the achievement', () => {
      const campaign = { achievements: {}, parties: { 1: { id: 1, achievements: { 2: 2 } } } };
      const expected = { achievements: {}, parties: { 1: { id: 1, achievements: {} } } };
      const action = ACTION.create({ party: 1, achievement: 2, remove: true });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should unlock the Drake Aided global achievement', () => {
      const campaign = {
        achievements: {},
        parties: {
          1: { achievements: { [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1 } },
          2: { achievements: {} },
        },
        cityEvents: { top: [1, 2, 3], bottom: [] },
        roadEvents: { top: [4, 5, 6], bottom: [] },
      };
      const expected = {
        achievements: { [GLOBAL_ACHIEVEMENT.THE_DRAKE_AIDED]: 1 },
        parties: {
          1: {
            achievements: {
              [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
              [PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE]: 1,
            },
          },
          2: { achievements: {} },
        },
        cityEvents: { top: [1, 2, 3, 75], bottom: [] },
        roadEvents: { top: [4, 5, 6, 66], bottom: [] },
      };
      const action = ACTION.create({ party: 1, achievement: PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });

  it('should not unlock the Drake Aided if it had already been unlocked', () => {
    const campaign = {
      achievements: { [GLOBAL_ACHIEVEMENT.THE_DRAKE_AIDED]: 1 },
      parties: {
        1: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
          },
        },
        2: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
            [PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE]: 1,
          },
        },
      },
      cityEvents: { top: [1, 2, 3, 75], bottom: [] },
      roadEvents: { top: [4, 5, 6, 66], bottom: [] },
    };
    const expected = {
      achievements: { [GLOBAL_ACHIEVEMENT.THE_DRAKE_AIDED]: 1 },
      parties: {
        1: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
            [PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE]: 1,
          },
        },
        2: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
            [PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE]: 1,
          },
        },
      },
      cityEvents: { top: [1, 2, 3, 75], bottom: [] },
      roadEvents: { top: [4, 5, 6, 66], bottom: [] },
    };
    const action = ACTION.create({ party: 1, achievement: PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE });
    const actual = ACTION.reduce(campaign, mockGithub(action));
    expect(actual).toEqual(expected);
  });
});

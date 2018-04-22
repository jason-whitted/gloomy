import { GLOBAL_ACHIEVEMENT } from '../../../GLOBAL_ACHIEVEMENT';
import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { achievement: 3, remove: 4 } };
      const actual = ACTION.create({ achievement: 3, remove: 4 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should add the achievement', () => {
      const campaign = { achievements: {} };
      const expected = { achievements: { 1: 1 } };
      const action = ACTION.create({ achievement: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should increment the achievement', () => {
      const campaign = { achievements: { 1: 1 } };
      const expected = { achievements: { 1: 2 } };
      const action = ACTION.create({ achievement: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should remove the achievement', () => {
      const campaign = { achievements: { 1: 2 } };
      const expected = { achievements: {} };
      const action = ACTION.create({ achievement: 1, remove: true });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should unlock Envelope A', () => {
      const campaign = {
        achievements: {
          [GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY]: 4,
        },
        envelopes: {},
      };
      const expected = {
        achievements: {
          [GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY]: 5,
        },
        envelopes: {
          A: true,
        },
      };
      const action = ACTION.create({ achievement: GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

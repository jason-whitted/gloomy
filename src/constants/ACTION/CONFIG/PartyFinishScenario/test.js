import ACTION from './';

import { SCENARIO_STATUS } from '../../../../constants';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = {
        action: ACTION.id,
        payload: { party: 1, scenario: 3, characters: { 1: 1 }, level: 2, failed: true, rewards: { 1: 1 } },
      };
      const actual = ACTION.create({
        party: 1,
        scenario: 3,
        characters: { 1: 1 },
        level: 2,
        failed: true,
        rewards: { 1: 1 },
      });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should give individual xp and gold', () => {
      const campaign = {
        characters: {
          1: { id: 1, player: 1, party: 1, xp: 0, gold: 0, attackDeck: [], donate: false, checks: 0, maxPerks: 0 },
          2: { id: 1, player: 1, party: 1, xp: 0, gold: 0, attackDeck: [], donate: false, checks: 0, maxPerks: 0 },
        },
        parties: {
          1: { location: { scenario: 1, attempts: 0 } },
        },
        scenarios: {
          1: SCENARIO_STATUS.AVAILABLE,
        },
      };
      const expected = {
        characters: {
          1: { id: 1, player: 1, party: 1, xp: 5, gold: 6, attackDeck: [], donate: true, checks: 0, maxPerks: 0 },
          2: { id: 1, player: 1, party: 1, xp: 0, gold: 0, attackDeck: [], donate: false, checks: 0, maxPerks: 0 },
        },
        parties: {
          1: { location: { scenario: 1, attempts: 1 } },
        },
        scenarios: {
          1: SCENARIO_STATUS.AVAILABLE,
        },
      };
      const action = ACTION.create({
        party: 1,
        characters: { 1: { xp: 5, gold: 2 } },
        level: 2,
        failed: true,
        rewards: undefined,
      });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should give bonus xp and checkmarks if completed', () => {
      const campaign = {
        characters: {
          1: { id: 1, player: 1, party: 1, xp: 0, gold: 0, attackDeck: [], donate: false, checks: 0, maxPerks: 0 },
          2: { id: 1, player: 1, party: 1, xp: 0, gold: 0, attackDeck: [], donate: false, checks: 0, maxPerks: 0 },
        },
        parties: {
          1: { id: 1, location: { scenario: 4, attempts: 0 } },
        },
        scenarios: {
          4: SCENARIO_STATUS.AVAILABLE,
        },
      };
      const expected = {
        characters: {
          1: { id: 1, player: 1, party: 1, xp: 21, gold: 6, attackDeck: [], donate: true, checks: 0, maxPerks: 0 },
          2: { id: 1, player: 1, party: 1, xp: 0, gold: 0, attackDeck: [], donate: false, checks: 0, maxPerks: 0 },
        },
        parties: {
          1: {
            id: 1,
            location: { scenario: 4, attempts: 1 },
          },
        },
        scenarios: {
          4: SCENARIO_STATUS.COMPLETE,
          5: SCENARIO_STATUS.AVAILABLE,
          6: SCENARIO_STATUS.AVAILABLE,
        },
      };
      const action = ACTION.create({
        party: 1,
        characters: { 1: { xp: 13, gold: 2 } },
        level: 2,
        failed: false,
        rewards: undefined,
        scenario: 4,
      });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

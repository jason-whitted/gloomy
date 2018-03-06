import ACTION from './';

import { SCENARIO, SCENARIO_STATUS } from '../../../../constants';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { party: 1, scenario: 2, event: 3, casual: true, remove: true } };
      const actual = ACTION.create({ party: 1, scenario: 2, event: 3, casual: true, remove: true });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should move the road event to the bottom', () => {
      const campaign = {
        roadEvents: { top: [1, 3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: SCENARIO.BLACK_BARROW, casual: undefined, attempts: 0 },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const expected = {
        roadEvents: { top: [3], bottom: [2, 1] },
        parties: {
          1: {
            location: { scenario: SCENARIO.BLACK_BARROW, casual: undefined, attempts: 0 },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const action = ACTION.create({ party: 1, scenario: SCENARIO.BLACK_BARROW, event: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should remove the road event', () => {
      const campaign = {
        roadEvents: { top: [1, 3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: SCENARIO.BLACK_BARROW, casual: undefined, attempts: 0 },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const expected = {
        roadEvents: { top: [3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: SCENARIO.BLACK_BARROW, casual: undefined, attempts: 0 },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const action = ACTION.create({
        party: 1,
        scenario: SCENARIO.BLACK_BARROW,
        event: 1,
        remove: true,
      });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should shuffle the deck if the last card was removed from the top', () => {
      const campaign = {
        roadEvents: { top: [1], bottom: [2, 3] },
        parties: {
          1: {
            location: { scenario: SCENARIO.BLACK_BARROW, casual: undefined, attempts: 0 },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const expected = {
        roadEvents: { top: [1, 2, 3], bottom: [] },
        parties: {
          1: {
            location: { scenario: SCENARIO.BLACK_BARROW, casual: undefined, attempts: 0 },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const action = ACTION.create({ party: 1, scenario: SCENARIO.BLACK_BARROW, event: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should update the party location', () => {
      const campaign = {
        roadEvents: { top: [1, 3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: undefined, casual: true, attempts: 13 },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const expected = {
        roadEvents: { top: [1, 3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: SCENARIO.BLACK_BARROW, casual: undefined, attempts: 0 },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const action = ACTION.create({ party: 1, scenario: SCENARIO.BLACK_BARROW });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

import ACTION from './';

import { SCENARIO, SCENARIO_STATUS } from '../../../../constants';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { party: 1, event: 2, remove: true } };
      const actual = ACTION.create({ party: 1, event: 2, remove: true });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should move the city event to the bottom', () => {
      const campaign = {
        cityEvents: { top: [1, 3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: undefined, casual: undefined },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const expected = {
        cityEvents: { top: [3], bottom: [2, 1] },
        parties: {
          1: {
            location: { scenario: undefined, casual: undefined },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const action = ACTION.create({ party: 1, event: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should remove the city event', () => {
      const campaign = {
        cityEvents: { top: [1, 3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: undefined, casual: undefined },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const expected = {
        cityEvents: { top: [3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: undefined, casual: undefined },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const action = ACTION.create({ party: 1, event: 1, remove: true });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should shuffle the deck if the last card was removed from the top', () => {
      const campaign = {
        cityEvents: { top: [1], bottom: [2, 3] },
        parties: {
          1: {
            location: { scenario: undefined, casual: undefined },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const expected = {
        cityEvents: { top: [1, 2, 3], bottom: [] },
        parties: {
          1: {
            location: { scenario: undefined, casual: undefined },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const action = ACTION.create({ party: 1, event: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should update the party location', () => {
      const campaign = {
        cityEvents: { top: [1, 3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: SCENARIO.BLACK_BARROW, casual: true },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const expected = {
        cityEvents: { top: [1, 3], bottom: [2] },
        parties: {
          1: {
            location: { scenario: undefined, casual: undefined },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.COMPLETE },
      };
      const action = ACTION.create({ party: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should unlock the first scenario', () => {
      const campaign = {
        cityEvents: { top: [1, 2, 3], bottom: [] },
        parties: {
          1: {
            location: {},
          },
        },
        scenarios: {},
      };
      const expected = {
        cityEvents: { top: [1, 2, 3], bottom: [] },
        parties: {
          1: {
            location: { scenario: undefined, casual: undefined },
          },
        },
        scenarios: { [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.AVAILABLE },
      };
      const action = ACTION.create({ party: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

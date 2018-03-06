import { SCENARIO_STATUS } from '../../../../constants';
import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { scenario: 3 } };
      const actual = ACTION.create({ scenario: 3 });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should unlock the scenario', () => {
      const campaign = {
        scenarios: { 1: SCENARIO_STATUS.COMPLETE, 2: SCENARIO_STATUS.AVAILABLE },
      };
      const expected = {
        scenarios: { 1: SCENARIO_STATUS.COMPLETE, 2: SCENARIO_STATUS.AVAILABLE, 3: SCENARIO_STATUS.AVAILABLE },
      };
      const action = ACTION.create({ scenario: 3 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should not overwrite completed scenarios', () => {
      const campaign = {
        scenarios: { 1: SCENARIO_STATUS.COMPLETE, 2: SCENARIO_STATUS.AVAILABLE },
      };
      const expected = {
        scenarios: { 1: SCENARIO_STATUS.COMPLETE, 2: SCENARIO_STATUS.AVAILABLE },
      };
      const action = ACTION.create({ scenario: 1 });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});

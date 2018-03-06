import ID from '../../ID';

export default ({ scenario }) => ({
  action: ID.CAMPAIGN_UNLOCK_SCENARIO,
  payload: {
    scenario: parseInt(scenario, 10) || 0,
  },
});

import ID from '../../ID';

export default ({ party, scenario, casual, event, remove }) => ({
  action: ID.PARTY_TRAVEL_TO_SCENARIO,
  payload: {
    party: parseInt(party, 10) || 0,
    scenario: parseInt(scenario, 10) || 0,
    casual: casual || undefined,
    event: parseInt(event, 10) || 0,
    remove: remove || undefined,
  },
});

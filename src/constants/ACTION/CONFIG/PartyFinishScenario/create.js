import ID from '../../ID';

export default ({ party, scenario, characters, level, failed, rewards }) => ({
  action: ID.PARTY_FINISH_SCENARIO,
  payload: {
    party: parseInt(party, 10) || 0,
    scenario: !isNaN(scenario) ? parseInt(scenario, 10) || 0 : scenario,
    characters, // { [id]: { xp: number, gold: number, checks: number }, ... }
    level: parseInt(level, 10) || 0,
    failed: failed || undefined,
    rewards: rewards && Object.keys(rewards).length ? rewards : undefined, // { [type]: { ...}, ... }
  },
});

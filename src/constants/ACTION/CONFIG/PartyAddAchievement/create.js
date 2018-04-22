import ID from '../../ID';

export default ({ party, achievement, remove }) => ({
  action: ID.PARTY_ADD_ACHIEVEMENT,
  payload: {
    party: parseInt(party, 10) || 0,
    achievement: parseInt(achievement, 10) || 0,
    remove: remove || undefined,
  },
});

import ID from '../../ID';

export default ({ achievement, remove }) => ({
  action: ID.CAMPAIGN_ADD_ACHIEVEMENT,
  payload: {
    achievement: parseInt(achievement, 10) || 0,
    remove: remove || undefined,
  },
});

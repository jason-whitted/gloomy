import ID from '../../ID';

export default ({ class: $class }) => ({
  action: ID.CAMPAIGN_UNLOCK_CLASS,
  payload: {
    class: $class,
  },
});

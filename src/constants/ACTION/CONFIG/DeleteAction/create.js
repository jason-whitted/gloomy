import ID from '../../ID';

export default ({ id }) => ({
  action: ID.DELETE_ACTION,
  payload: {
    id: parseInt(id, 10) || 0,
  },
});

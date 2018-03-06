import ID from '../../ID';

export default ({ character, count }) => ({
  action: ID.CHARACTER_ADD_XP,
  payload: {
    character: parseInt(character, 10) || 0,
    count: parseInt(count, 10) || 0,
  },
});

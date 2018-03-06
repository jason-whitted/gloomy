import ID from '../../ID';

export default ({ character, count, self }) => ({
  action: ID.CHARACTER_EXHAUSTION,
  payload: {
    character: parseInt(character, 10) || 0,
    count: parseInt(count, 10) || 0,
    self: self || undefined,
  },
});

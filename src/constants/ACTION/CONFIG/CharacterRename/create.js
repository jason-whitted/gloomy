import ID from '../../ID';

export default ({ character, from, to }) => ({
  action: ID.CHARACTER_RENAME,
  payload: {
    character: parseInt(character, 10) || 0,
    from,
    to,
  },
});

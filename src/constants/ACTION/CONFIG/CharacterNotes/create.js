import ID from '../../ID';

export default ({ character, notes }) => ({
  action: ID.CHARACTER_NOTES,
  payload: {
    character: parseInt(character, 10) || 0,
    notes,
  },
});

import ID from '../../ID';

export default ({ character }) => ({
  action: ID.CHARACTER_RETIRE,
  payload: {
    character: parseInt(character, 10) || 0,
  },
});

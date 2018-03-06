import ID from '../../ID';

export default ({ character }) => ({
  action: ID.CHARACTER_LEVEL_UP,
  payload: {
    character: parseInt(character, 10) || 0,
  },
});

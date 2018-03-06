import ID from '../../ID';

export default ({ character }) => ({
  action: ID.CHARACTER_SANCTUARY_DONATION,
  payload: {
    character: parseInt(character, 10) || 0,
  },
});

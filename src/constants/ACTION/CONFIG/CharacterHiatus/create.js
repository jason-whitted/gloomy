import ID from '../../ID';

export default ({ character, hiatus }) => ({
  action: ID.CHARACTER_HIATUS,
  payload: {
    character: parseInt(character, 10) || 0,
    hiatus: hiatus || undefined,
  },
});

import ID from '../../ID';

export default ({ character, value, max }) => ({
  action: ID.CHARACTER_MANUAL_QUEST_PROGRESS,
  payload: {
    character: parseInt(character, 10) || 0,
    value: parseInt(value, 10) || 0,
    max: parseInt(max, 10) || 0,
  },
});

import ID from '../../ID';

export default ({ character, item }) => ({
  action: ID.CHARACTER_UNLOCK_ITEM_DESIGN,
  payload: {
    character: parseInt(character, 10) || 0,
    item: parseInt(item, 10) || 0,
  },
});

import ID from '../../ID';

export default ({ character }) => ({
  action: ID.CHARACTER_SELL_ALL_ITEMS,
  payload: {
    character: parseInt(character, 10) || 0,
  },
});

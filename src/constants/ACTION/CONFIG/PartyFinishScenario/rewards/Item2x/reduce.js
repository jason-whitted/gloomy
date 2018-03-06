import Item from '../../../CharacterReceiveItem/reduce';

export default (state, { characters, item }) =>
  characters.reduce((campaign, character) => Item(campaign, { payload: { character, item } }), state);

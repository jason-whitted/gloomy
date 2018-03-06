import ID from '../../ID';

export default ({ character, ability }) => ({
  action: ID.CHARACTER_ADD_ABILITY,
  payload: {
    character: parseInt(character, 10) || 0,
    ability: parseInt(ability, 10) || 0,
  },
});

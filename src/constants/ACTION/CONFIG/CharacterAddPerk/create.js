import ID from '../../ID';

export default ({ character, perk }) => ({
  action: ID.CHARACTER_ADD_PERK,
  payload: {
    character: parseInt(character, 10) || 0,
    perk: parseInt(perk, 10) || 0,
  },
});

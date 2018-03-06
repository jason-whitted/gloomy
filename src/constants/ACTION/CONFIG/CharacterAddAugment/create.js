import ID from '../../ID';

export default ({ character, ability, slot, augment }) => ({
  action: ID.CHARACTER_ADD_AUGMENT,
  payload: {
    character: parseInt(character, 10) || 0,
    ability: parseInt(ability, 10) || 0,
    slot: parseInt(slot, 10) || 0,
    augment: parseInt(augment, 10) || 0,
  },
});

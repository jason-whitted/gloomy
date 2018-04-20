import ID from '../../ID';

export default ({ player, party, name, level, class: $class, quest, imported }) => ({
  action: ID.CHARACTER_CREATE,
  payload: {
    player: parseInt(player, 10) || 0,
    party: parseInt(party, 10) || 0,
    name,
    level: parseInt(level, 10) || 0,
    class: $class,
    quest: parseInt(quest, 10) || 0,
    imported: imported || undefined,
  },
});

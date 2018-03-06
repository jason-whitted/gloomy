import ID from '../../ID';

export default ({ character, enemy, count, elite }) => ({
  action: ID.CHARACTER_KILL_ENEMY,
  payload: {
    character: parseInt(character, 10) || 0,
    enemy: parseInt(enemy, 10) || 0,
    count: parseInt(count, 10) || 0,
    elite: elite || undefined,
  },
});

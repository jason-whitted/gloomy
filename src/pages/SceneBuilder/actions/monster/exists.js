export default ({ scene, tileIndex, monsterIndex }) => {
  try {
    const monster = scene.tiles[tileIndex].monsters[monsterIndex];
    return !!monster;
  } catch (e) {
    return false;
  }
};

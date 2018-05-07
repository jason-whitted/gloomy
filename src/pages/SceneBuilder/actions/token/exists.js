export default ({ scene, tileIndex, tokenIndex }) => {
  try {
    const token = scene.tiles[tileIndex].tokens[tokenIndex];
    return !!token;
  } catch (e) {
    return false;
  }
};

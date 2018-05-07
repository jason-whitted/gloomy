export default (scene, { tileIndex, rotate = 0 }) => {
  const tiles = [...scene.tiles];
  const tile = tiles[tileIndex];
  if (!tile) return scene;

  tile.rotate = (tile.rotate || 0) + rotate;

  return { ...scene, tiles };
};

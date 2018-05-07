export default (scene, { tileIndex, x = 0, y = 0 }) => {
  const tiles = [...scene.tiles];
  const tile = tiles[tileIndex];
  if (!tile) return scene;

  tile.x = (tile.x || 0) + x;
  tile.y = (tile.y || 0) + y;

  return { ...scene, tiles };
};

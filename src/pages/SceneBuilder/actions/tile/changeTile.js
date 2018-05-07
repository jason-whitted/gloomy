export default (scene, { tileIndex, tile }) => {
  const tiles = [...scene.tiles];
  if (!tiles[tileIndex]) return scene;
  tiles[tileIndex].tile = tile;
  return { ...scene, tiles };
};

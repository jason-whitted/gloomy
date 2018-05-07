export default (scene, { tileIndex }) => {
  const tiles = [...scene.tiles];
  const a = scene.tiles[tileIndex];
  const b = scene.tiles[tileIndex - 1];
  if (!a || !b) return scene;

  tiles[tileIndex] = b;
  tiles[tileIndex - 1] = a;

  return {
    ...scene,
    tiles,
  };
};

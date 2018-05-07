export default (scene, { tileIndex }) => {
  const tiles = [...scene.tiles];
  const a = tiles.splice(tileIndex, 1)[0];
  if (!a) return scene;

  return {
    ...scene,
    tiles: [a, ...tiles],
  };
};

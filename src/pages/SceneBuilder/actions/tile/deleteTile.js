export default (scene, { tileIndex }) => {
  const tiles = [...scene.tiles];
  tiles.splice(tileIndex, 1);

  return {
    ...scene,
    tiles,
  };
};

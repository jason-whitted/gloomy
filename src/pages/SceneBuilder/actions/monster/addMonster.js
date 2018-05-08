export default (scene, { tileIndex, monster = 'AncientArtilleryV' } = {}) => {
  if (!scene.tiles[tileIndex]) return scene;

  const tiles = [...scene.tiles];
  const tile = { ...scene.tiles[tileIndex] };
  const monsters = tile.monsters || [];

  tiles[tileIndex] = {
    ...tile,
    monsters: [...monsters, typeof monster === 'string' ? { monster } : monster],
  };

  return {
    ...scene,
    tiles,
  };
};

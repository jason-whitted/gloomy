export default (scene, { tileIndex, token = 'Altar' } = {}) => {
  if (!scene.tiles[tileIndex]) return scene;

  const tiles = [...scene.tiles];
  const tile = { ...scene.tiles[tileIndex] };
  const tokens = tile.tokens || [];

  tiles[tileIndex] = {
    ...tile,
    tokens: [...tokens, { token }],
  };

  return {
    ...scene,
    tiles,
  };
};

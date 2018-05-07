export default (scene, { tile = 'A1a' } = {}) => ({
  ...scene,
  tiles: [...scene.tiles, { tile }],
});

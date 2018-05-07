import exists from './exists';

export default (scene, { tileIndex, tokenIndex }) => {
  if (!exists({ scene, tileIndex, tokenIndex })) return scene;

  return {
    ...scene,
    tiles: scene.tiles.map(
      (tile, i) =>
        i !== tileIndex
          ? tile
          : {
              ...tile,
              tokens: tile.tokens.filter((_, i) => i !== tokenIndex),
            },
    ),
  };
};

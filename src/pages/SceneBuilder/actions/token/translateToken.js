import exists from './exists';

export default (scene, { tileIndex, tokenIndex, x = 0, y = 0 }) => {
  if (!exists({ scene, tileIndex, tokenIndex })) return scene;

  return {
    ...scene,
    tiles: scene.tiles.map(
      (tile, i) =>
        i !== tileIndex
          ? tile
          : {
              ...tile,
              tokens: tile.tokens.map(
                (tok, j) =>
                  j !== tokenIndex
                    ? tok
                    : {
                        ...tok,
                        x: (tok.x || 0) + x,
                        y: (tok.y || 0) + y,
                      },
              ),
            },
    ),
  };
};

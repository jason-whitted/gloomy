import exists from './exists';

export default (scene, { tileIndex, tokenIndex, token }) => {
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
                        token,
                      },
              ),
            },
    ),
  };
};

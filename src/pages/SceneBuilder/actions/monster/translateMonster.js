import exists from './exists';

export default (scene, { tileIndex, monsterIndex, x = 0, y = 0 }) => {
  if (!exists({ scene, tileIndex, monsterIndex })) return scene;

  return {
    ...scene,
    tiles: scene.tiles.map(
      (tile, i) =>
        i !== tileIndex
          ? tile
          : {
              ...tile,
              monsters: tile.monsters.map(
                (monst, j) =>
                  j !== monsterIndex
                    ? monst
                    : {
                        ...monst,
                        x: (monst.x || 0) + x,
                        y: (monst.y || 0) + y,
                      },
              ),
            },
    ),
  };
};

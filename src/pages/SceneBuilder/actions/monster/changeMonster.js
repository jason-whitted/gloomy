import exists from './exists';

export default (scene, { tileIndex, monsterIndex, monster }) => {
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
                        monster,
                      },
              ),
            },
    ),
  };
};

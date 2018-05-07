import exists from './exists';

export default (scene, { tileIndex, monsterIndex }) => {
  if (!exists({ scene, tileIndex, monsterIndex })) return scene;

  return {
    ...scene,
    tiles: scene.tiles.map(
      (tile, i) =>
        i !== tileIndex
          ? tile
          : {
              ...tile,
              monsters: tile.monsters.filter((_, i) => i !== monsterIndex),
            },
    ),
  };
};

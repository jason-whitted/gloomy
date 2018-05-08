import { TILE_CONFIG } from '../../../constants';

const scale = ({ scale = 1 }) => ({ x, y }) => ({ x: x * scale, y: y * scale });
const translate = ({ x: x1 = 0, y: y1 = 0 }) => ({ x: x2, y: y2 }) => ({ x: x1 + x2, y: y1 + y2 });
const rotate = ({ rotate = 0 }) => ({ x, y }) => {
  const rad = rotate * (Math.PI / 180);
  return {
    x: x * Math.cos(rad) - y * Math.sin(rad),
    y: x * Math.sin(rad) + y * Math.cos(rad),
  };
};
const boundCoords = ({ left = 0, top = 0, right = 0, bottom = 0 }, { x, y }) => ({
  left: Math.min(left, x),
  top: Math.min(top, y),
  right: Math.max(right, x),
  bottom: Math.max(bottom, y),
});

const tileToBounds = tile => {
  const { w, h } = TILE_CONFIG[tile.tile];
  // prettier-ignore
  return [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: 0, y: h },
    { x: w, y: h }
  ]
    .map(scale(tile))
    .map(rotate(tile))
    .map(translate(tile))
    .reduce(boundCoords, {});
};

const viewbox = (
  { left: l1 = 0, top: t1 = 0, right: r1 = 0, bottom: b1 = 0 },
  { left: l2, top: t2, right: r2, bottom: b2 },
) => ({
  left: Math.min(l1, l2),
  top: Math.min(t1, t2),
  right: Math.max(r1, r2),
  bottom: Math.max(b1, b2),
});

export default scene => {
  if (!scene.tiles.length) return scene;

  const bounds = scene.tiles.map(tileToBounds).reduce(viewbox);
  bounds.width = bounds.right - bounds.left;
  bounds.height = bounds.bottom - bounds.top;

  return {
    ...scene,
    viewBox: `${Math.round(bounds.left)} ${Math.round(bounds.top)} ${Math.round(bounds.width)} ${Math.round(
      bounds.height,
    )}`,
  };
};

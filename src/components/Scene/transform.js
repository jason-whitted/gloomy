export default ({ scale, rotate, x, y }) => {
  const transforms = [];
  if (scale > 0 && scale < 1) transforms.push(`scale(${scale})`);
  if (x || y) transforms.push(`translate(${x || 0} ${y || 0})`);
  if (rotate) transforms.push(`rotate(${rotate})`);
  return transforms.length ? transforms.join(' ') : undefined;
};

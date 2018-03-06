export default map =>
  Object.keys(map)
    .filter(p => !!map[p])
    .reduce((o, p) => ({ ...o, [p]: map[p] }), {});

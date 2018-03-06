export default Array(504)
  .fill(0)
  .reduce((obj, i) => ({ ...obj, [i + 1]: i + 1 }));

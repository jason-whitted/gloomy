import ID from './ID';

const Y = true;
const N = false;

export default {
  ENEMY: { type: ID.AVAILABLE, numeric: Y, enemy: Y, self: N, move: N, main: Y, hex: N },
  HEX: { type: ID.AVAILABLE, numeric: N, enemy: N, self: N, move: N, main: N, hex: Y },
  MOVE: { type: ID.AVAILABLE, numeric: Y, enemy: N, self: N, move: Y, main: Y, hex: N },
  NUMERIC: { type: ID.AVAILABLE, numeric: Y, enemy: N, self: N, move: N, main: N, hex: N },
  SELF: { type: ID.AVAILABLE, numeric: Y, enemy: N, self: Y, move: N, main: Y, hex: N },
};

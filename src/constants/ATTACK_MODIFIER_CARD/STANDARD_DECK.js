import ID from './ID';

export default [
  ...Array(6).fill(ID.POS0),
  ...Array(5).fill(ID.POS1),
  ...Array(5).fill(ID.NEG1),
  ...Array(1).fill(ID.POS2),
  ...Array(1).fill(ID.NEG2),
  ...Array(1).fill(ID.CRIT),
  ...Array(1).fill(ID.NULL),
];

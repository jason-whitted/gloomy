import React from 'react';

import * as HEX from './hex';

export default ({ type, pattern, ...other }) => {
  const Hex = HEX[type];
  return <Hex pattern={pattern} {...other} />;
};

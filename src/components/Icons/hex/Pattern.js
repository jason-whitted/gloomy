import React from 'react';
import classNames from 'classnames';

import HexAugment from './HexAugment';
import HexGray from './HexGray';
import HexRed from './HexRed';

/*
NOTE: Pattern:
Start with a hex, G for green or R for red, A for augment.
Use the numbers 1-6 to move to a corresponding location.
 6 1
5 X 2
 4 3
Then use G or R or A to drop another hex.
Example: G1R3R4R would draw:
 R
G R
 R
*/

export default props => {
  const { pattern, className } = props;
  const { viewBox, hexes } = parse(props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={classNames(`svg svg-hex svg-hex-Pattern svg-hex-Pattern-${pattern}`, className)}
    >
      {hexes}
    </svg>
  );
};

function parse(props) {
  const { pattern } = props;
  let x = 0;
  let y = 0;
  let augmentIndex = 0;
  const hexes = pattern.split('').reduce((hexes, command) => {
    switch (command) {
      case 'G':
        hexes.push({ Hex: HexGray, x, y });
        break;
      case 'R':
        hexes.push({ Hex: HexRed, x, y });
        break;
      case 'A':
        hexes.push({ Hex: HexAugment, x, y, ...props, augmentIndex: augmentIndex++ });
        break;
      case '1':
        x += 160;
        y -= 280;
        break;
      case '2':
        x += 320;
        break;
      case '3':
        x += 160;
        y += 280;
        break;
      case '4':
        x -= 160;
        y += 280;
        break;
      case '5':
        x -= 320;
        break;
      case '6':
        x -= 160;
        y -= 280;
        break;
      default:
        // do nothing
        break;
    }
    return hexes;
  }, []);
  const bounds = hexes.reduce(
    (o, h) => ({
      minX: Math.min(o.minX, h.x),
      minY: Math.min(o.minY, h.y),
      maxX: Math.max(o.maxX, h.x + 400),
      maxY: Math.max(o.maxY, h.y + 400),
    }),
    {
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity,
    },
  );
  return {
    viewBox: `0 0 ${bounds.maxX - bounds.minX} ${bounds.maxY - bounds.minY}`,
    hexes: hexes.map(({ Hex, x, y, ...other }, i) => (
      <Hex key={i} {...other} transform={`translate(${(x -= bounds.minX)} ${(y -= bounds.minY)})`} />
    )),
  };
}

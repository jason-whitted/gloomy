import React from 'react';

import { AUGMENT } from '../../../constants';
import { HexIcon } from '../../Icons';

export default props => {
  const { action: { value, pos, className, style } } = props;
  let styles;
  if (style) styles = { ...style };
  if (pos) {
    styles = {
      ...styles,
      position: 'absolute',
      left: pos.x,
      top: pos.y,
      width: pos.w,
      height: pos.h,
    };
  }

  let pattern = value;
  if (props.action.augments) {
    const augs = props.action.augments.map(slot => (props.card.augmentSlots[slot].type === AUGMENT.HEX ? 'R' : 'A'));
    pattern = pattern.replace(/A/g, () => augs.shift());
  }

  return (
    <div className="action action-hex-pattern" style={styles}>
      <HexIcon {...props} type="Pattern" pattern={pattern} noFlyout className={className} />
    </div>
  );
};

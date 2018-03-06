import React from 'react';
import classNames from 'classnames';

import { SymbolIcon } from '../../Icons';

export default props => {
  const { action: { className, pos, style } } = props;
  const classes = classNames('action action-persistent large', className);

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

  return (
    <div className={classes} style={styles}>
      <SymbolIcon symbol="Persistent" flyout noText className="light" />
    </div>
  );
};

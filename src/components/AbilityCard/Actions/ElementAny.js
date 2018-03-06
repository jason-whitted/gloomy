import React from 'react';
import classNames from 'classnames';

import { ElementIcon } from '../../Icons';

export default props => {
  const { action: { className, style, pos } } = props;
  const classes = classNames('action action-element-any', className);

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
      <ElementIcon element="Any" noFlyout className="light" />
    </div>
  );
};

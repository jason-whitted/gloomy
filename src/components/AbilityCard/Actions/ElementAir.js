import React from 'react';
import classNames from 'classnames';

import { ElementIcon } from '../../Icons';

export default props => {
  const { action: { className, pos } } = props;
  const classes = classNames('action action-element-earth', className);

  let style;
  if (pos) {
    style = {
      position: 'absolute',
      left: pos.x,
      top: pos.y,
      width: pos.w,
      height: pos.h,
    };
  }

  return (
    <div className={classes} style={style}>
      <ElementIcon element="Air" noFlyout className="light" />
    </div>
  );
};

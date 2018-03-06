import React from 'react';
import classNames from 'classnames';

import { ElementIcon } from '../../Icons';

export default props => {
  const { action: { condition, className, pos, style }, children } = props;
  const classes = classNames('action action-element-ice-consume', className, { condition });

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

  const element = <ElementIcon element="Ice" consume noFlyout className="light" />;

  return (
    <div className={classes} style={styles}>
      {!condition && element}
      {condition && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="mr-1">
            {element}
            {condition && <span className="colon">:</span>}
          </div>
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

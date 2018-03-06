import React from 'react';
import classNames from 'classnames';

import { ElementIcon } from '../../Icons';

export default props => {
  const { action: { elements, className, pos, style }, children } = props;
  const classes = classNames('action action-consume-elements condition', className);

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
      <div className="d-flex justify-content-center align-items-center">
        <div className="mr-1">
          {elements.map((id, i) => <ElementIcon key={i} element={id} consume noFlyout />)}
          <span className="colon">:</span>
        </div>
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
};

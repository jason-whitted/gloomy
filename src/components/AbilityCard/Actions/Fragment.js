import React from 'react';
import classNames from 'classnames';

export default props => {
  const { action: { className, style }, children } = props;
  if (!className && !style) return children;

  const classes = classNames('action action-fragment', className);

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

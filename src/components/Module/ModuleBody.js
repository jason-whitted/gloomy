import React from 'react';
import classNames from 'classnames';

export default ({ className, children, ...other }) => (
  <div className={classNames('card-body', className)} {...other}>
    {children}
  </div>
);

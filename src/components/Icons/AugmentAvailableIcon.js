import React from 'react';
import classNames from 'classnames';

import './styles.css';

export default ({ className, style, ...other }) => (
  <span className={classNames('icon icon-augment icon-augment-available', className)} style={style} {...other}>
    &bull;
  </span>
);

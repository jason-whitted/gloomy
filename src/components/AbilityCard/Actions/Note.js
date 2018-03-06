import React from 'react';
import classNames from 'classnames';

import { RichText } from '../../RichText';

export default props => {
  const { action: { value, className, style }, children } = props;
  const classes = classNames('action action-note', className);

  return (
    <div className={classes} style={style}>
      <RichText text={value} light />
      {children}
    </div>
  );
};

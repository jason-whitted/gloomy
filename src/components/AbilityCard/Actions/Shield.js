import React from 'react';
import classNames from 'classnames';

import { SymbolIcon } from '../../Icons';

export default props => {
  const { action: { value, style, className }, augments, children } = props;
  const classes = classNames('action action-shield', className);

  return (
    <div className={classes} style={style}>
      Shield <SymbolIcon symbol="Shield" noText className="light" /> {value} {augments}
      {children}
    </div>
  );
};

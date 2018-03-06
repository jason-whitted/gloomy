import React from 'react';
import classNames from 'classnames';

import { SymbolIcon } from '../../Icons';

export default props => {
  const { action: { value, className, style }, augments, children } = props;
  const classes = classNames('action action-heal', className);

  return (
    <div className={classes} style={style}>
      Heal <SymbolIcon symbol="Heal" noText className="light" /> {value} {augments}
      {children}
    </div>
  );
};

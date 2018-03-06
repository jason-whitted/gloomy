import React from 'react';
import classNames from 'classnames';

import { Polarity } from '../../Common';
import { SymbolIcon } from '../../Icons';

export default props => {
  const { action: { value, style, className }, augments, children } = props;
  const classes = classNames('action action-modify-attack', className);

  return (
    <div className={classes} style={style}>
      <Polarity number={value} /> Attack <SymbolIcon symbol="Attack" noText className="light" />
      {augments}
      {children}
    </div>
  );
};

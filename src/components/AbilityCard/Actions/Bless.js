import React from 'react';
import classNames from 'classnames';

import { EffectIcon } from '../../Icons';

export default props => {
  const { action: { className, style }, augments, children } = props;
  const classes = classNames('action action-bless', className);

  return (
    <div className={classes} style={style}>
      BLESS <EffectIcon effect="Bless" noFlyout className="light" />
      {augments}
      {children}
    </div>
  );
};

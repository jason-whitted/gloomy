import React from 'react';
import classNames from 'classnames';

import { EffectIcon } from '../../Icons';

export default props => {
  const { action: { value, className, style }, augments, children } = props;
  const classes = classNames('action action-push', className);

  return (
    <div className={classes} style={style}>
      PUSH <EffectIcon effect="Push" noFlyout className="light" /> {value} {augments}
      {children}
    </div>
  );
};

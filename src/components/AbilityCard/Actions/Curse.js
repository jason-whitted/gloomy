import React from 'react';
import classNames from 'classnames';

import { EffectIcon } from '../../Icons';

export default props => {
  const { action: { className, style }, augments, children } = props;
  const classes = classNames('action action-curse', className);

  return (
    <div className={classes} style={style}>
      CURSE <EffectIcon effect="Curse" noFlyout className="light" />
      {augments}
      {children}
    </div>
  );
};

import React from 'react';
import classNames from 'classnames';

import { EffectIcon } from '../../Icons';

export default props => {
  const { action: { className, style }, augments, children } = props;
  const classes = classNames('action action-strengthen', className);

  return (
    <div className={classes} style={style}>
      STRENGTHEN <EffectIcon effect="Strengthen" noFlyout className="light" />
      {augments}
      {children}
    </div>
  );
};

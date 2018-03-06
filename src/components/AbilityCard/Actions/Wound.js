import React from 'react';
import classNames from 'classnames';

import { EffectIcon } from '../../Icons';

export default props => {
  const { action: { style, className }, augments, children } = props;
  const classes = classNames('action action-wound', className);

  return (
    <div className={classes} style={style}>
      WOUND <EffectIcon effect="Wound" noFlyout className="light" />
      {augments}
      {children}
    </div>
  );
};

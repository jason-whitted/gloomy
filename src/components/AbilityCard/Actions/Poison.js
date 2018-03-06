import React from 'react';

import { EffectIcon } from '../../Icons';

export default props => {
  const { children } = props;
  return (
    <div className="action action-poison">
      POISON <EffectIcon effect="Poison" noFlyout className="light" />
      {children}
    </div>
  );
};

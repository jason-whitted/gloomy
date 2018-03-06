import React from 'react';

import { EffectIcon } from '../../Icons';

export default props => {
  const { children } = props;
  return (
    <div className="action action-muddle">
      MUDDLE <EffectIcon effect="Muddle" noFlyout className="light" />
      {children}
    </div>
  );
};

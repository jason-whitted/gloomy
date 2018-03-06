import React from 'react';

import { EffectIcon } from '../../Icons';

export default props => {
  const { action: { value }, augments, children } = props;
  return (
    <div className="action action-pull">
      PULL <EffectIcon effect="Pull" noFlyout className="light" /> {value} {augments}
      {children}
    </div>
  );
};

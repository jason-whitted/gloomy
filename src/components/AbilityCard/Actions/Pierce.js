import React from 'react';

import { EffectIcon } from '../../Icons';

export default props => {
  const { action: { value }, augments } = props;
  return (
    <div className="action action-pierce">
      PIERCE <EffectIcon effect="Pierce" noFlyout className="light" /> {value} {augments}
    </div>
  );
};

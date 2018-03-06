import React from 'react';

import { SymbolIcon } from '../../Icons';

export default props => {
  const { action: { value }, augments } = props;
  return (
    <div className="action action-target">
      Target <SymbolIcon symbol="Target" noText className="light" /> {value} {augments}
    </div>
  );
};

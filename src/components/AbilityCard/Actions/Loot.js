import React from 'react';

import { SymbolIcon } from '../../Icons';

export default props => {
  const { action: { value }, augments, children } = props;
  return (
    <div className="action action-loot">
      Loot <SymbolIcon symbol="Loot" noText className="light" /> {value} {augments}
      {children}
    </div>
  );
};

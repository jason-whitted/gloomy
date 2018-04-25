import React from 'react';

import { Campaign } from '../../Common';

export default ({ campaign, action }) => {
  return (
    <span>
      <Campaign campaign={campaign} /> updated permissions
    </span>
  );
};

import React from 'react';

import { Scenario } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { scenario } } = action;
  return (
    <span>
      Unlocked Scenario <Scenario scenario={scenario} />
    </span>
  );
};

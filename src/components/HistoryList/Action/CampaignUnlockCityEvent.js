import React from 'react';

import { CityEvent } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { cityEvent } } = action;
  return (
    <span>
      Unlocked <CityEvent cityEvent={cityEvent} />
    </span>
  );
};

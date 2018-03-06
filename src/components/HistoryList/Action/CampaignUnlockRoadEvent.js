import React from 'react';

import { RoadEvent } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { roadEvent } } = action;
  return (
    <span>
      Unlocked <RoadEvent roadEvent={roadEvent} />
    </span>
  );
};

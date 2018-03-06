import React from 'react';

import { Campaign, Polarity } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { count } } = action;
  return (
    <span>
      <Campaign campaign={campaign} /> <Polarity number={count} /> prosperity
    </span>
  );
};

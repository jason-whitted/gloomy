import React from 'react';

import { Campaign, GlobalAchievement } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { achievement, remove } } = action;
  return (
    <span>
      <Campaign campaign={campaign} /> {remove ? 'lost' : 'earned'} achievement{' '}
      <GlobalAchievement achievement={achievement} />
    </span>
  );
};

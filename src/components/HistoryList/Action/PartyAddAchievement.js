import React from 'react';

import { Party, PartyAchievement } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { party: id, achievement, remove } } = action;
  const party = campaign.parties.find(c => c.id === id);

  return (
    <span>
      <Party party={party} /> {remove ? 'lost' : 'earned'} achievement <PartyAchievement achievement={achievement} />
    </span>
  );
};

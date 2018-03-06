import React from 'react';

import { Party } from '../../Common';

export default ({ campaign, action }) => {
  const { id } = action;
  const party = campaign.parties.find(p => p.id === id);
  return (
    <span>
      <Party party={party} /> created
    </span>
  );
};

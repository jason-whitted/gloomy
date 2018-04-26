import React from 'react';

import { Party } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { party: id } } = action;
  const party = campaign.parties.find(c => c.id === id);
  return (
    <span>
      <Party party={party} /> updated notes
    </span>
  );
};

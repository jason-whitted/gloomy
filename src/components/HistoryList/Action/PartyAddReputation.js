import React from 'react';

import { Party, Polarity } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { party: id, reputation } } = action;
  const party = campaign.parties.find(c => c.id === id);
  return (
    <span>
      <Party party={party} /> <Polarity number={reputation} /> reputation
    </span>
  );
};

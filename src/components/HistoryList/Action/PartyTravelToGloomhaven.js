import React from 'react';

import { CityEvent, Party } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { party: id, cityEvent } } = action;
  const party = campaign.parties.find(c => c.id === id);
  return (
    <span>
      <Party party={party} /> completed <CityEvent cityEvent={cityEvent} />
    </span>
  );
};

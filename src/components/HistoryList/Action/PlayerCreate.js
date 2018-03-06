import React from 'react';

import { Player } from '../../Common';

export default ({ campaign, action }) => {
  const { id } = action;
  const player = campaign.players.find(p => p.id === id);
  return (
    <span>
      <Player player={player} /> created
    </span>
  );
};

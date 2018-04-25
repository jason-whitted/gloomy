import React from 'react';

import { Player } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { player: id } } = action;
  const player = campaign.players.find(c => c.id === id);
  return (
    <span>
      <Player player={player} /> updated owners
    </span>
  );
};

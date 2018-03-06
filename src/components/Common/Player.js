import React from 'react';

import { PlayerIcon } from '../Icons';

export default ({ player }) => (
  <span>
    <PlayerIcon /> {player.name}
  </span>
);

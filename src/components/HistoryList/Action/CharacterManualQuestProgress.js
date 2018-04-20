import React from 'react';

import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: id, value, max } } = action;
  const character = campaign.characters.find(c => c.id === id);
  return (
    <span>
      <Character character={character} /> manual quest progress ({Math.round(value / max)}%)
    </span>
  );
};

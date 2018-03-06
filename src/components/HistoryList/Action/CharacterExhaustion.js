import React from 'react';

import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: characterID, count, self } } = action;
  const character = campaign.characters.find(c => c.id === characterID);
  return (
    <span>
      <Character character={character} /> experienced {self ? 'self-' : ''}exhaustion ({count}x)
    </span>
  );
};

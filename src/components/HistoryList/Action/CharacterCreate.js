import React from 'react';

import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const character = campaign.characters.find(c => c.id === action.id);
  return (
    <span>
      <Character character={character} /> created
    </span>
  );
};

import React from 'react';

import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: id } } = action;
  const character = campaign.characters.find(c => c.id === id);
  return (
    <span>
      <Character character={character} /> retired!
    </span>
  );
};

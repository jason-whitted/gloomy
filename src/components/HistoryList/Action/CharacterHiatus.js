import React from 'react';

import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: id, hiatus } } = action;
  const character = campaign.characters.find(c => c.id === id);
  return (
    <span>
      <Character character={character} /> {hiatus ? 'went on' : 'returned from'} Hiatus
    </span>
  );
};

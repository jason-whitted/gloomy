import React from 'react';

import { Character } from '../../Common';
import { ItemPopover } from '../../Item';

export default ({ campaign, action }) => {
  const { payload: { character: characterID, item: itemID } } = action;
  const character = campaign.characters.find(c => c.id === characterID);
  const item = campaign.items.find(i => i.id === itemID);
  return (
    <span>
      <Character character={character} /> received <ItemPopover item={item} />
    </span>
  );
};

import React from 'react';

import { ItemPopover } from '../../Item';
import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: characterID, item: itemID } } = action;
  const character = campaign.characters.find(c => c.id === characterID);
  const item = campaign.items.find(i => i.id === itemID);
  return (
    <span>
      <Character character={character} /> bought <ItemPopover item={item} />
    </span>
  );
};

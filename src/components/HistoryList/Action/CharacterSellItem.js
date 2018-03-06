import React from 'react';

import { ItemPopover } from '../../Item';
import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: id, item: itemID } } = action;
  const character = campaign.characters.find(c => c.id === id);
  const item = campaign.items.find(i => i.id === itemID);
  return (
    <span>
      <Character character={character} /> sold <ItemPopover item={item} />
    </span>
  );
};

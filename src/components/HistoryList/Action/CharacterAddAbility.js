import React from 'react';

import { ABILITY_CARD_CONFIG } from '../../../constants';
import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: id, ability } } = action;
  const character = campaign.characters.find(c => c.id === id);
  return (
    <span>
      <Character className="strong" character={character} /> learned {ABILITY_CARD_CONFIG[ability].name}
    </span>
  );
};

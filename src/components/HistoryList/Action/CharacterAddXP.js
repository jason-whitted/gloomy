import React from 'react';

import { Character, Polarity } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: id, count } } = action;
  const character = campaign.characters.find(c => c.id === id);
  return (
    <span>
      <Character character={character} /> <Polarity number={count} /> xp
    </span>
  );
};

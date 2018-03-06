import React from 'react';

import { Character, Polarity } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: id, count } } = action;
  const character = campaign.characters.find(c => c.id === id);
  const checkmarks = `checkmark${count === 2 ? '' : 's'}`;
  return (
    <span>
      <Character className="strong" character={character} /> <Polarity number={count} /> {checkmarks}
    </span>
  );
};

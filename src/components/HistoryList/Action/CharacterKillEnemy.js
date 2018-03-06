import React from 'react';

import { ENEMY_CONFIG } from '../../../constants';
import { Character } from '../../Common';

export default ({ campaign, action }) => {
  const { payload: { character: id, enemy, elite, count } } = action;
  const character = campaign.characters.find(c => c.id === id);
  const enemyName = `${elite ? 'elite' : ''} ${ENEMY_CONFIG[enemy].name} (x${count})`;
  return (
    <span>
      <Character className="strong" character={character} /> killed {enemyName}
    </span>
  );
};

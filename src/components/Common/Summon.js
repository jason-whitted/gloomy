import React from 'react';

import { ABILITY_CARD_ACTION as ACTION, SUMMON_CONFIG } from '../../constants';
import { Flyout } from '../Flyout';
import { Action } from '../AbilityCard';

export default ({ summon: id }) => {
  const summon = SUMMON_CONFIG[id.id || id];
  return (
    <Flyout text={summon.name}>
      <div className="summon-flyout bg-dark">
        <Action type={ACTION.SUMMON} summon={summon.id} />
      </div>
    </Flyout>
  );
};

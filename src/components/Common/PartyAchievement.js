import React from 'react';

import { PARTY_ACHIEVEMENT_CONFIG } from '../../constants';
import { PartyAchievementIcon } from '../Icons';

export default ({ achievement: id }) => {
  const achievement = PARTY_ACHIEVEMENT_CONFIG[id.id || id];

  return (
    <span className="party-achievement">
      <PartyAchievementIcon /> {achievement.name}
    </span>
  );
};

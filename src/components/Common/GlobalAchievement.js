import React from 'react';

import { GLOBAL_ACHIEVEMENT_CONFIG } from '../../constants';
import { GlobalAchievementIcon } from '../Icons';

export default props => {
  const { achievement } = props;
  const name = achievement.name || GLOBAL_ACHIEVEMENT_CONFIG[achievement.id || achievement].name;

  return (
    <span className="global-achievement">
      <GlobalAchievementIcon /> {name}
    </span>
  );
};

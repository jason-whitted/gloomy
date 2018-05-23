import React from 'react';

import { CLASS_CONFIG, REGION_CONFIG, SCENARIO_CONFIG } from '../../constants';

export default ({ scenario: id, showRegion }) => {
  const scenario = SCENARIO_CONFIG[id.id || id];
  const region = REGION_CONFIG[scenario.region];

  return (
    <span>
      {scenario.solo ? `${CLASS_CONFIG[scenario.id].name} Solo` : scenario.id} - {scenario.name}
      {showRegion && !region.unknown && `, ${region.name}`}
    </span>
  );
};

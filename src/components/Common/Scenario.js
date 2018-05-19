import React from 'react';

import { CLASS_CONFIG, SCENARIO_CONFIG } from '../../constants';

export default ({ scenario: id }) => {
  const scenario = SCENARIO_CONFIG[id.id || id];

  return (
    <span>
      {scenario.solo ? `${CLASS_CONFIG[scenario.id].name} Solo` : scenario.id} - {scenario.name}
    </span>
  );
};

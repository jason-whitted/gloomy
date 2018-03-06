import React from 'react';

import { SCENARIO_CONFIG } from '../../constants';

export default ({ scenario: id }) => {
  const scenario = SCENARIO_CONFIG[id.id || id];

  return (
    <span>
      {scenario.id} - {scenario.name}
    </span>
  );
};

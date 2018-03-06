import React from 'react';

import { BugIcon } from '../../Icons';

export default ({ action }) => (
  <span>
    <BugIcon />
    {action.action}
  </span>
);

import React from 'react';

import { PartyIcon } from '../Icons';

export default ({ party }) => (
  <span>
    <PartyIcon /> {party.name}
  </span>
);

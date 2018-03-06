import React from 'react';

import { CampaignIcon } from '../Icons';

export default ({ campaign }) => (
  <span>
    <CampaignIcon /> {campaign.name}
  </span>
);

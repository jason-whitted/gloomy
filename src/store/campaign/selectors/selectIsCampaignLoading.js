import { createSelector } from 'reselect';

import selectRawCampaign from './selectRawCampaign';

export default createSelector(selectRawCampaign, campaign => campaign.loading);

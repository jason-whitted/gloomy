import { createSelector } from 'reselect';

import { SCENARIO } from '../../../constants';
import selectCampaign from './selectCampaign';

export default party =>
  createSelector(selectCampaign, campaign => {
    return [{ scenario: SCENARIO.BLACK_BORROW, campaign: true }];
    // TODO: Implement this
  });

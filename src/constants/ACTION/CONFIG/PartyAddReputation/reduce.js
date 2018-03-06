import { CLASS } from '../../../CLASS';
import { default as CampaignUnlockClass } from '../CampaignUnlockClass/reduce';
import { default as CampaignUnlockCityEvent } from '../CampaignUnlockCityEvent/reduce';
import { default as CampaignUnlockRoadEvent } from '../CampaignUnlockRoadEvent/reduce';

export default (state, { payload: { party, count } }) => {
  let campaign = state;

  const { min, max } = campaign.reputationBounds;

  const reputation = Math.max(-20, Math.min(20, campaign.parties[party].reputation + count));

  if (reputation >= 10) {
    campaign = CampaignUnlockClass(campaign, { payload: { class: CLASS.SUNKEEPER } });
  }

  if (reputation <= -10) {
    campaign = CampaignUnlockClass(campaign, { payload: { class: CLASS.NIGHTSHROUD } });
  }

  if (reputation >= 20 && campaign.reputationBounds.max < 20) {
    campaign = CampaignUnlockCityEvent(campaign, { payload: { event: 76 } });
    campaign = CampaignUnlockRoadEvent(campaign, { payload: { event: 67 } });
  }

  if (reputation <= -20 && campaign.reputationBounds.min > -20) {
    campaign = CampaignUnlockCityEvent(campaign, { payload: { event: 77 } });
    campaign = CampaignUnlockRoadEvent(campaign, { payload: { event: 68 } });
  }

  if (reputation < min || reputation > max) {
    campaign = {
      ...campaign,
      reputationBounds: {
        ...campaign.reputationBounds,
        min: Math.min(reputation, min),
        max: Math.max(reputation, max),
      },
    };
  }

  campaign = {
    ...campaign,
    // prettier-ignore
    parties: {
      ...campaign.parties,
      [party]: {
        ...campaign.parties[party],
        reputation,
      },
    }
  };

  return campaign;
};

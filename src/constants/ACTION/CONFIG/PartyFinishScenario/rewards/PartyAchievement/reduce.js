import { GLOBAL_ACHIEVEMENT } from '../../../../../GLOBAL_ACHIEVEMENT';
import { PARTY_ACHIEVEMENT } from '../../../../../PARTY_ACHIEVEMENT';
import { GlobalAchievement } from '../GlobalAchievement';
import CampaignUnlockCityEvent from '../../../CampaignUnlockCityEvent';
import CampaignUnlockRoadEvent from '../../../CampaignUnlockRoadEvent';

const aided = campaign =>
  campaign.achievements[GLOBAL_ACHIEVEMENT.DRAKE_AIDED] ||
  Object.values(campaign.parties).some(
    p => p.achievements[PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND] && p.achievements[PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE],
  );

export default (state, { party, achievement }) => {
  let campaign = state;

  campaign = {
    ...campaign,
    parties: {
      ...campaign.parties,
      [party]: {
        ...campaign.parties[party],
        achievements: {
          ...campaign.parties[party].achievements,
          [achievement]: (campaign.parties[party].achievements[achievement] || 0) + 1,
        },
      },
    },
  };

  if (!aided(state) && aided(campaign)) {
    campaign = GlobalAchievement(campaign, { achievement: GLOBAL_ACHIEVEMENT.THE_DRAKE_AIDED });
    campaign = CampaignUnlockCityEvent.reduce(campaign, { payload: { event: 75 } });
    campaign = CampaignUnlockRoadEvent.reduce(campaign, { payload: { event: 66 } });
  }

  return campaign;
};

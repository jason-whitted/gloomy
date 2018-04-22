import { GLOBAL_ACHIEVEMENT } from '../../../GLOBAL_ACHIEVEMENT';
import { PARTY_ACHIEVEMENT } from '../../../PARTY_ACHIEVEMENT';
import { default as CampaignAddAchievement } from '../CampaignAddAchievement/reduce';
import { default as CampaignUnlockCityEvent } from '../CampaignUnlockCityEvent/reduce';
import { default as CampaignUnlockRoadEvent } from '../CampaignUnlockRoadEvent/reduce';

const aided = campaign =>
  campaign.achievements[GLOBAL_ACHIEVEMENT.DRAKE_AIDED] ||
  Object.values(campaign.parties).some(
    p => p.achievements[PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND] && p.achievements[PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE],
  );

export default (state, { payload: { party, achievement, remove } }) => {
  let campaign = state;

  const curParty = campaign.parties[party];

  if (remove) {
    return {
      ...campaign,
      parties: {
        ...campaign.parties,
        [party]: {
          ...curParty,
          achievements: Object.entries(curParty.achievements).reduce(
            (obj, [key, val]) =>
              achievement == key // eslint-disable-line eqeqeq
                ? obj
                : {
                    ...obj,
                    [key]: [val],
                  },
            {},
          ),
        },
      },
    };
  }

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
    campaign = CampaignAddAchievement(campaign, { payload: { achievement: GLOBAL_ACHIEVEMENT.THE_DRAKE_AIDED } });
    campaign = CampaignUnlockCityEvent(campaign, { payload: { event: 75 } });
    campaign = CampaignUnlockRoadEvent(campaign, { payload: { event: 66 } });
  }

  return campaign;
};

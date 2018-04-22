import { GlobalAchievement } from '../GlobalAchievement';

export default (campaign, { condition, achievement }) => {
  if (!!campaign.achievements[condition.achievement] === !!condition.complete) {
    return GlobalAchievement(campaign, { payload: { achievement } });
  }
  return campaign;
};

import { ENVELOPE } from '../../../../../ENVELOPE';
import { GLOBAL_ACHIEVEMENT } from '../../../../../GLOBAL_ACHIEVEMENT';

export default (campaign, { achievement }) => {
  const achievements = {
    ...campaign.achievements,
    [achievement]: (campaign.achievements[achievement] || 0) + 1,
  };

  const tech = achievements[GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY] || 0;

  return {
    ...campaign,
    achievements,
    // prettier-ignore
    envelopes: tech < 5 ? campaign.envelopes : {
      ...campaign.envelopes,
      [ENVELOPE.A]: true,
    }
  };
};

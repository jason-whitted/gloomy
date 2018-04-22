import { ENVELOPE } from '../../../ENVELOPE';
import { GLOBAL_ACHIEVEMENT } from '../../../GLOBAL_ACHIEVEMENT';

export default (campaign, { payload: { achievement, remove } }) => {
  if (remove) {
    return {
      ...campaign,
      achievements: Object.entries(campaign.achievements).reduce(
        (obj, [key, val]) =>
          achievement == key // eslint-disable-line eqeqeq
            ? obj
            : {
                ...obj,
                [key]: [val],
              },
        {},
      ),
    };
  }

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

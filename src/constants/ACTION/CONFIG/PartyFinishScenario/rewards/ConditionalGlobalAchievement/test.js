import { ConditionalGlobalAchievement } from './';

import { GLOBAL_ACHIEVEMENT } from '../../../../../../constants';

describe('ConditionalGlobalAchievement', () => {
  it('should unlock the global achievement', () => {
    const campaign = {
      achievements: {
        [GLOBAL_ACHIEVEMENT.CITY_RULE_MILITARISTIC]: 1,
      },
    };
    const expected = {
      achievements: {
        [GLOBAL_ACHIEVEMENT.CITY_RULE_MILITARISTIC]: 1,
        [GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY]: 1,
      },
    };
    const actual = ConditionalGlobalAchievement(campaign, {
      condition: { achievement: GLOBAL_ACHIEVEMENT.CITY_RULE_MILITARISTIC, complete: true },
      achievement: GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY,
    });
    expect(actual).toEqual(expected);
  });

  it('should not unlock the global achievement', () => {
    const campaign = { achievements: {} };
    const expected = { achievements: {} };
    const actual = ConditionalGlobalAchievement(campaign, {
      condition: { achievement: GLOBAL_ACHIEVEMENT.CITY_RULE_MILITARISTIC, complete: true },
      achievement: GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY,
    });
    expect(actual).toEqual(expected);
  });
});

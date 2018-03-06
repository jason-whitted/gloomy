import { GlobalAchievement } from './';

import { GLOBAL_ACHIEVEMENT } from '../../../../../../constants';

describe('ScenarioGlobalAchievement', () => {
  it('should unlock the global achievement', () => {
    const campaign = {
      achievements: {},
    };
    const expected = {
      achievements: {
        [GLOBAL_ACHIEVEMENT.CITY_RULE_MILITARISTIC]: 1,
      },
    };
    const actual = GlobalAchievement(campaign, { achievement: GLOBAL_ACHIEVEMENT.CITY_RULE_MILITARISTIC });
    expect(actual).toEqual(expected);
  });

  it('should track multiple ancient technology achievements', () => {
    const campaign = {
      achievements: {},
    };
    const expected = {
      achievements: {
        [GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY]: 3,
      },
    };
    const actual = [
      { achievement: GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY },
      { achievement: GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY },
      { achievement: GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY },
    ].reduce(GlobalAchievement, campaign);
    expect(actual).toEqual(expected);
  });

  it('should unlock Envelope A', () => {
    const campaign = {
      achievements: {
        [GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY]: 4,
      },
      envelopes: {},
    };
    const expected = {
      achievements: {
        [GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY]: 5,
      },
      envelopes: {
        A: true,
      },
    };
    const actual = GlobalAchievement(campaign, { achievement: GLOBAL_ACHIEVEMENT.ANCIENT_TECHNOLOGY });
    expect(actual).toEqual(expected);
  });
});

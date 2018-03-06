import { LostPartyAchievement } from './';

import { PARTY_ACHIEVEMENT } from '../../../../../../constants';

describe('ScenarioPartyAchievement', () => {
  it('should unlock the party achievement', () => {
    const campaign = {
      parties: {
        1: { achievements: { [PARTY_ACHIEVEMENT.ACROSS_THE_DIVIDE]: true } },
        2: { achievements: {} },
      },
    };
    const expected = {
      parties: {
        1: { achievements: {} },
        2: { achievements: {} },
      },
    };
    const actual = LostPartyAchievement(campaign, { party: 1, achievement: PARTY_ACHIEVEMENT.ACROSS_THE_DIVIDE });
    expect(actual).toEqual(expected);
  });
});

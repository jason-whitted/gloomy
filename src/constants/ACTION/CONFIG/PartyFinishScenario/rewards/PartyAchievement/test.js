import { PartyAchievement } from './';

import { GLOBAL_ACHIEVEMENT } from '../../../../../GLOBAL_ACHIEVEMENT';
import { PARTY_ACHIEVEMENT } from '../../../../../../constants';

describe('ScenarioPartyAchievement', () => {
  it('should unlock the party achievement', () => {
    const campaign = {
      achievements: {},
      parties: {
        1: { achievements: {} },
        2: { achievements: {} },
      },
    };
    const expected = {
      achievements: {},
      parties: {
        1: { achievements: { [PARTY_ACHIEVEMENT.ACROSS_THE_DIVIDE]: 1 } },
        2: { achievements: {} },
      },
    };
    const actual = PartyAchievement(campaign, { party: 1, achievement: PARTY_ACHIEVEMENT.ACROSS_THE_DIVIDE });
    expect(actual).toEqual(expected);
  });

  it('should unlocked the Drake Aided global achievement', () => {
    const campaign = {
      parties: {
        1: { achievements: { [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1 } },
        2: { achievements: {} },
      },
      achievements: {},
      cityEvents: { top: [1, 2, 3], bottom: [] },
      roadEvents: { top: [4, 5, 6], bottom: [] },
    };
    const expected = {
      parties: {
        1: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
            [PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE]: 1,
          },
        },
        2: { achievements: {} },
      },
      achievements: {
        [GLOBAL_ACHIEVEMENT.THE_DRAKE_AIDED]: 1,
      },
      cityEvents: { top: [1, 2, 3, 75], bottom: [] },
      roadEvents: { top: [4, 5, 6, 66], bottom: [] },
    };
    const actual = PartyAchievement(campaign, { party: 1, achievement: PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE });
    expect(actual).toEqual(expected);
  });

  it('should not unlock the Drake Aided if it had already been unlocked', () => {
    const campaign = {
      parties: {
        1: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
          },
        },
        2: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
            [PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE]: 1,
          },
        },
      },
      achievements: {
        [GLOBAL_ACHIEVEMENT.THE_DRAKE_AIDED]: 1,
      },
      cityEvents: { top: [1, 2, 3, 75], bottom: [] },
      roadEvents: { top: [4, 5, 6, 66], bottom: [] },
    };
    const expected = {
      parties: {
        1: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
            [PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE]: 1,
          },
        },
        2: {
          achievements: {
            [PARTY_ACHIEVEMENT.THE_DRAKES_COMMAND]: 1,
            [PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE]: 1,
          },
        },
      },
      achievements: {
        [GLOBAL_ACHIEVEMENT.THE_DRAKE_AIDED]: 1,
      },
      cityEvents: { top: [1, 2, 3, 75], bottom: [] },
      roadEvents: { top: [4, 5, 6, 66], bottom: [] },
    };
    const actual = PartyAchievement(campaign, { party: 1, achievement: PARTY_ACHIEVEMENT.THE_DRAKES_TREASURE });
    expect(actual).toEqual(expected);
  });
});

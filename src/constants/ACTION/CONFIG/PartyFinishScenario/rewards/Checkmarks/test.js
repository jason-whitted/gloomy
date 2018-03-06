import { Checkmarks } from './';

describe('ScenarioRewardCheckmarks', () => {
  it('should update the character checks/maxPerks', () => {
    const campaign = {
      characters: {
        1: { checks: 2, maxPerks: 0 },
        2: { checks: 3, maxPerks: 1 },
        3: { checks: 2, maxPerks: 0 },
      },
    };
    const expected = {
      characters: {
        1: { checks: 4, maxPerks: 1 },
        2: { checks: 5, maxPerks: 1 },
        3: { checks: 2, maxPerks: 0 },
      },
    };
    const actual = Checkmarks(campaign, { characters: { 1: {}, 2: {} }, count: 2 });
    expect(actual).toEqual(expected);
  });
});

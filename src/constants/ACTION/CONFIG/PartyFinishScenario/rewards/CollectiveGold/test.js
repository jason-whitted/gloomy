import { CollectiveGold } from './';

describe('ScenarioRewardCollectiveGold', () => {
  it('should update the character gold', () => {
    const campaign = {
      characters: {
        1: { gold: 10 },
        2: { gold: 10 },
        3: { gold: 10 },
      },
    };
    const expected = {
      characters: {
        1: { gold: 15 },
        2: { gold: 25 },
        3: { gold: 10 },
      },
    };
    const actual = CollectiveGold(campaign, { characters: { 1: 5, 2: 15 } });
    expect(actual).toEqual(expected);
  });
});

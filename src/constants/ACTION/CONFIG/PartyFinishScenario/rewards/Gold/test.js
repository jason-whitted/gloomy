import { Gold } from './';

describe('ScenarioGold', () => {
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
        2: { gold: 15 },
        3: { gold: 10 },
      },
    };
    const actual = Gold(campaign, { characters: { 1: {}, 2: {} }, count: 5 });
    expect(actual).toEqual(expected);
  });
});

import { XP } from './';

describe('ScenarioXP', () => {
  it('should update the character xp', () => {
    const campaign = {
      characters: {
        1: { xp: 2 },
        2: { xp: 3 },
        3: { xp: 2 },
      },
    };
    const expected = {
      characters: {
        1: { xp: 7 },
        2: { xp: 8 },
        3: { xp: 2 },
      },
    };
    const actual = XP(campaign, { characters: { 1: {}, 2: {} }, count: 5 });
    expect(actual).toEqual(expected);
  });
});

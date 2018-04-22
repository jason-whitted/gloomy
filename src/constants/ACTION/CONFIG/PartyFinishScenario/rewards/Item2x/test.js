import { Item2x } from './';

describe('Item2x', () => {
  it('should update items for both characters', () => {
    const campaign = {
      characters: {
        1: { party: 1, items: {}, gold: 0 },
        2: { party: 1, items: { 1: 1 }, gold: 0 },
        3: { party: 1, items: { 2: 1 }, gold: 0 },
      },
      parties: { 1: { items: { 1: 1, 2: 3 } } },
      items: { 1: 2, 2: 4 },
    };
    const expected = {
      characters: {
        1: { party: 1, items: { 3: 1 }, gold: 0 },
        2: { party: 1, items: { 1: 1, 3: 1 }, gold: 0 },
        3: { party: 1, items: { 2: 1 }, gold: 0 },
      },
      parties: { 1: { items: { 1: 1, 2: 3, 3: 0 } } },
      items: { 1: 2, 2: 4, 3: 2 },
    };
    const actual = Item2x(campaign, { characters: [1, 2], item: 3 });
    expect(actual).toEqual(expected);
  });
});

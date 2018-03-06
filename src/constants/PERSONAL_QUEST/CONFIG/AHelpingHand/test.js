import { ACTION, ACTION_CONFIG } from '../../../ACTION';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const any = () => mockGithub({});

describe('PQ:AHelpingHand', () => {
  const campaign = { characters: {} };
  const character = { id: 1, retirement: config.initialState };
  const reduce = (character, ...history) => history.reduce(config.reduce(campaign), character);

  it('should be incomplete', () => {
    const result = reduce(character, any());
    expect(result.retirement).toMatchObject({ complete: false, progress: 0 });
  });

  it('should progress', () => {
    campaign.characters = {
      1: { id: 1, retirement: { complete: false } },
      2: { id: 2, retirement: { complete: false } },
    };
    let result = reduce(character, any());
    campaign.characters[2].retirement.complete = true;
    result = reduce(result, any());
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 2 });
  });

  it('should not count characters that were retired before the character was created', () => {
    campaign.characters = {
      1: { id: 2, retirement: { complete: false } },
      2: { id: 2, retirement: { complete: true } }, // already completed quest
      3: { id: 3, retirement: { complete: false } },
    };
    let result = reduce(character, any());
    campaign.characters[4] = { id: 4, retirement: { complete: false } }; // new character created
    result = reduce(result, any());
    campaign.characters[4].retirement.complete = true; // character retired
    result = reduce(result, any());
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 2, ignored: [2], characters: [4] });
  });

  it('should complete', () => {
    campaign.characters = {
      1: { id: 1, retirement: { complete: false } },
      3: { id: 3, retirement: { complete: false } },
      2: { id: 2, retirement: { complete: false } },
    };
    let result = reduce(character, any());
    campaign.characters[2].retirement.complete = true;
    result = reduce(result, any());
    campaign.characters[3].retirement.complete = true;
    result = reduce(result, any());
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

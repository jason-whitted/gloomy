import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { SCENARIO } from '../../../SCENARIO';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const any = () => mockGithub({});

describe('PQ:ElementalSamples', () => {
  const character = { id: 1, checks: 0, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toBe(config.initialState);
  });

  it('should progress', () => {
    character.checks = 1;
    const result = reduce(any());
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 15 });
  });

  it('should complete', () => {
    character.checks = 15;
    const result = reduce(any());
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

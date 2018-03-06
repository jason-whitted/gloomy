import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { ITEM } from '../../../ITEM';
import { SLOT } from '../../../SLOT';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const exhaustion = ({ character = 1, count = 1, self = true }) =>
  mockGithub(ACTION_CONFIG[ACTION.CHARACTER_EXHAUSTION].create({ character, count, self }));

describe('PQ:ZealotOfTheBloodGod', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toMatchObject({ complete: false, progress: 0 });
  });

  it('should track progress', () => {
    const result = reduce(exhaustion({}));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 12 });
  });

  it('should not count party-exhaustion', () => {
    const result = reduce(exhaustion({}), exhaustion({ self: false }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 12 });
  });

  it('should complete', () => {
    const history = Array(12)
      .fill(0)
      .map(() => exhaustion({}));
    const result = reduce(...history);
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

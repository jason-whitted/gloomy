import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { ENEMY } from '../../../ENEMY';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const addAugment = ({ character = 1, ability = 1, slot = 1, augment = 1 }) =>
  mockGithub(ACTION_CONFIG[ACTION.CHARACTER_ADD_AUGMENT].create({ character, ability, slot, augment }));

describe('PQ:AugmentedAbilities', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toBe(config.initialState);
  });

  it('should progress', () => {
    const result = reduce(addAugment({}));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 4 });
  });

  it('should complete', () => {
    const result = reduce(addAugment({}), addAugment({}), addAugment({}), addAugment({}));
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

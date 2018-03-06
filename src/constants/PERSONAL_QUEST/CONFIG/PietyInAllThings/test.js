import { ACTION, ACTION_CONFIG } from '../../../ACTION';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const sanctuaryDonation = ({ character = 1 }) =>
  mockGithub(ACTION_CONFIG[ACTION.CHARACTER_SANCTUARY_DONATION].create({ character }));

describe('PQ:PietyInAllThings', () => {
  const character = { id: 1, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toMatchObject({ complete: false, progress: 0 });
  });

  it('should progress', () => {
    const result = reduce(sanctuaryDonation({}));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 12 });
  });

  it('should not count donations by other characters', () => {
    const result = reduce(sanctuaryDonation({}), sanctuaryDonation({ character: 2 }));
    expect(result.retirement).toMatchObject({ complete: false, progress: 1 / 12 });
  });

  it('should complete', () => {
    const history = Array(12)
      .fill(0)
      .map(() => sanctuaryDonation({}));
    const result = reduce(...history);
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

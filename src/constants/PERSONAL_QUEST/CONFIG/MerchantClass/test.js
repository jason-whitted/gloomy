import { ACTION, ACTION_CONFIG } from '../../../ACTION';
import { ITEM } from '../../../ITEM';
import { SLOT } from '../../../SLOT';

import config from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });
const any = () => mockGithub({});

describe('PQ:MerchantClass', () => {
  const character = { id: 1, items: {}, retirement: config.initialState };
  const reduce = (...history) => history.reduce(config.reduce({}), character);

  it('should be incomplete', () => {
    const result = reduce({});
    expect(result.retirement).toMatchObject({ complete: false, progress: 0 });
  });

  it('should track progress', () => {
    character.items = {
      [ITEM.BOOTS_OF_STRIDING]: true,
      [ITEM.WINGED_SHOES]: true,
    };
    const result = reduce(any());
    expect(result.retirement).toMatchObject({ complete: false, progress: 2 / 13 });
  });

  it('should not count duplicates or more than the slot cap', () => {
    character.items = {
      [ITEM.BOOTS_OF_STRIDING]: true,
      [ITEM.BOOTS_OF_STRIDING]: true,
      [ITEM.WINGED_SHOES]: true,
      [ITEM.BOOTS_OF_SPEED]: true,
    };
    const result = reduce(any());
    expect(result.retirement).toMatchObject({ complete: false, progress: 2 / 13 });
  });

  it('should complete', () => {
    character.items = {
      [ITEM.EAGLE_EYE_GOGGLES]: true,
      [ITEM.IRON_HELMET]: true,
      [ITEM.HIDE_ARMOR]: true,
      [ITEM.LEATHER_ARMOR]: true,
      [ITEM.BOOTS_OF_STRIDING]: true,
      [ITEM.BOOTS_OF_SPEED]: true,
      [ITEM.PIERCING_BOW]: true,
      [ITEM.WAR_HAMMER]: true,
      [ITEM.POISON_DAGGER]: true,
      [ITEM.MINOR_HEALING_POTION]: true,
      [ITEM.MINOR_STAMINA_POTION]: true,
      [ITEM.MINOR_POWER_POTION]: true,
      [ITEM.MINOR_MANA_POTION]: true,
    };
    const result = reduce(any());
    expect(result.retirement).toMatchObject({ complete: true, progress: 1 });
  });
});

import ID from '../../ID';

import config from './';

describe('ScenarioRequirement: OneOf', () => {
  const eligibility = {
    campaign: { achievements: [{ id: 1 }] },
    party: { achievements: [{ id: 2 }] },
    scenario: {},
    eligible: true,
  };

  it('should be eligible', () => {
    expect(
      config.reduce(eligibility, {
        type: config.id,
        condition: [
          { type: ID.GLOBAL_ACHIEVEMENT, achievement: 2, complete: true }, // false
          { type: ID.PARTY_ACHIEVEMENT, achievement: 2, complete: true }, // true
        ],
      }).eligible,
    ).toBe(true);
  });
});

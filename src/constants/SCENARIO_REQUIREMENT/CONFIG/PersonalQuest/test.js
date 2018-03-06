import config from './';

describe('ScenarioRequirement: ItemEquipped', () => {
  const eligibility = {
    campaign: {},
    party: { characters: [{ quest: { id: 1 } }] },
    scenario: {},
    eligible: true,
  };

  it('should be eligible', () => {
    expect(config.reduce(eligibility, { type: config.id, quest: 1 }).eligible).toBe(true);
  });

  it('should be ineligible', () => {
    expect(config.reduce(eligibility, { type: config.id, quest: 2 }).eligible).toBe(false);
  });

  it('should be ineligible if previously ineligible', () => {
    eligibility.eligible = false;
    expect(config.reduce(eligibility, { type: config.id, quest: 1 }).eligible).toBe(false);
  });
});

import config from './';

describe('ScenarioRequirement: GlobalAchievement', () => {
  const eligibility = {
    campaign: { achievements: [{ id: 1 }] },
    party: {},
    scenario: {},
    eligible: true,
  };

  it('should be eligible', () => {
    const requirements = [
      { type: config.id, achievement: 1, complete: true },
      { type: config.id, achievement: 2, complete: false },
    ];
    const eligible = requirements.reduce(config.reduce, eligibility).eligible;
    expect(eligible).toBe(true);
  });

  it('should not be eligible if previously ineligible', () => {
    const requirements = [
      { type: config.id, achievement: 1, complete: true },
      { type: config.id, achievement: 2, complete: false },
    ];
    eligibility.eligible = false;
    const eligible = requirements.reduce(config.reduce, eligibility).eligible;
    expect(eligible).toBe(false);
  });

  it('should be ineligible', () => {
    expect(config.reduce(eligibility, { type: config.id, achievement: 1, complete: false }).eligible).toBe(false);
    expect(config.reduce(eligibility, { type: config.id, achievement: 2, complete: true }).eligible).toBe(false);
  });
});

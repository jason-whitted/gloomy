import config from './';

describe('ScenarioRequirement: Bravery', () => {
  it('should always return the previous eligibility', () => {
    const eligibility = {};
    const requirement = Math.random();
    expect(config.reduce(eligibility, requirement)).toBe(eligibility);
  });
});

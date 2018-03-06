import GlobalAchievement from '../GlobalAchievement';
import PartyAchievement from '../PartyAchievement';

export default (eligibility, requirement) => ({
  ...eligibility,
  eligible:
    eligibility.eligible &&
    requirement.condition.some(c => {
      if (c.type === GlobalAchievement.id) return GlobalAchievement.reduce(eligibility, c).eligible;
      if (c.type === PartyAchievement.id) return PartyAchievement.reduce(eligibility, c).eligible;
      return false;
    }),
});

export default (eligibility, requirement) => ({
  ...eligibility,
  eligible: eligibility.eligible && eligibility.party.characters.some(c => c.quest.id === requirement.quest),
});

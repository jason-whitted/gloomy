export default (eligibility, requirement) => ({
  ...eligibility,
  eligible:
    eligibility.eligible && eligibility.party.characters.some(c => c.items.some(i => i.id === requirement.item)),
});

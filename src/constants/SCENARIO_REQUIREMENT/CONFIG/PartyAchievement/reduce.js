export default (eligibility, { achievement, complete }) => ({
  ...eligibility,
  eligible: eligibility.eligible && complete === eligibility.party.achievements.some(a => a.id === achievement),
});

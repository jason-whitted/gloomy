export default (eligibility, { achievement, complete }) => ({
  ...eligibility,
  eligible: eligibility.eligible && complete === eligibility.campaign.achievements.some(a => a.id === achievement),
});

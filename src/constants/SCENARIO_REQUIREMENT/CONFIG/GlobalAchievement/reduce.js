export default (eligibility, { achievement, complete, min = 1 }) => {
  const chiev = eligibility.campaign.achievements.find(a => a.id === achievement);
  let eligible = eligibility.eligible && complete === !!chiev;
  if (complete && min > 1) {
    eligible = eligible && chiev.count >= min;
  }

  return {
    ...eligibility,
    eligible,
  };
};

export default state => {
  const campaign = state.campaign.data;
  if (!campaign) return false;

  const user = state.user.data;
  if (!user) return false;

  return !campaign.contributors.length || campaign.contributors.some(c => c.toLowerCase() === user.login.toLowerCase());
};

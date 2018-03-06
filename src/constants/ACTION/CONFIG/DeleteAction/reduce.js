export default (campaign, { payload: { id } }) => ({
  ...campaign,
  history: campaign.history.map(h => (h.id !== id ? h : { ...h, deleted: true })),
});

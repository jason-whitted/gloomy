export default (campaign, { payload: { event } }) => ({
  ...campaign,
  cityEvents: {
    ...campaign.cityEvents,
    top: [...campaign.cityEvents.top, ...campaign.cityEvents.bottom, event].sort((a, b) => a - b),
    bottom: [],
  },
});

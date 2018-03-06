export default (campaign, { payload: { event } }) => ({
  ...campaign,
  roadEvents: {
    ...campaign.roadEvents,
    top: [...campaign.roadEvents.top, ...campaign.roadEvents.bottom, event].sort((a, b) => a - b),
    bottom: [],
  },
});

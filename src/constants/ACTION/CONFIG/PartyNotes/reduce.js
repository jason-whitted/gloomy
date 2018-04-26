export default (campaign, { payload: { party, notes } }) => ({
  ...campaign,
  parties: {
    ...campaign.parties,
    [party]: {
      ...campaign.parties[party],
      notes,
    },
  },
});

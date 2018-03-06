export default (campaign, { payload: { party, from, to } }) => ({
  ...campaign,
  parties: {
    ...campaign.parties,
    [party]: {
      ...campaign.parties[party],
      name: to,
    },
  },
});

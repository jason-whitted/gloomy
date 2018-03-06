export default (campaign, { envelope }) => ({
  ...campaign,
  envelopes: {
    ...campaign.envelopes,
    [envelope]: true,
  },
});

export default (campaign, { payload: { contributors }, by }) =>
  campaign.owner !== by
    ? campaign
    : {
        ...campaign,
        contributors,
      };

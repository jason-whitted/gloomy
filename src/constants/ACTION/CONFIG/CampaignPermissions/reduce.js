export default (campaign, { payload: { permissions }, by }) =>
  campaign.owner !== by
    ? campaign
    : {
        ...campaign,
        permissions,
      };

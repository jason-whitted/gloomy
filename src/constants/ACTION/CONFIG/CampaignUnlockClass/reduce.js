export default (campaign, { payload: { class: $class } }) => ({
  ...campaign,
  classes: {
    ...campaign.classes,
    [$class]: true,
  },
});

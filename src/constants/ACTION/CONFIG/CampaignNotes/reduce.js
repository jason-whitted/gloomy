export default (campaign, { payload: { notes } }) => ({
  ...campaign,
  notes,
});

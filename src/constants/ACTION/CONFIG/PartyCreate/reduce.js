export default (campaign, { payload: { name }, id, by, dt }) => ({
  ...campaign,
  parties: {
    ...campaign.parties,
    [id]: {
      id,
      name,
      location: {},
      characters: {},
      reputation: 0,
      achievements: [],
      // New party gets all available campaign items from the start
      items: { ...campaign.items },
      notes: '',
      by,
      dt,
    },
  },
});

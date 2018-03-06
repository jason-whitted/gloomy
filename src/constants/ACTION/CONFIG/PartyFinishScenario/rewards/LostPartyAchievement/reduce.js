export default (campaign, { party, achievement }) => ({
  ...campaign,
  parties: {
    ...campaign.parties,
    [party]: {
      ...campaign.parties[party],
      achievements: Object.keys(campaign.parties[party].achievements).reduce(
        (obj, key) =>
          key == achievement // eslint-disable-line eqeqeq
            ? obj
            : {
                ...obj,
                [key]: true,
              },
        {},
      ),
    },
  },
});

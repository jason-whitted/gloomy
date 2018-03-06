export default (campaign, { payload: { party, scenario, casual, event, remove } }) => {
  const roadEvents = !event
    ? campaign.roadEvents
    : {
        ...campaign.roadEvents,
        // Take the city event out of the top
        top: campaign.roadEvents.top.filter(ce => ce !== event),
        // If the city event is not being removed, place it in the bottom
        bottom: remove ? campaign.roadEvents.bottom : [...campaign.roadEvents.bottom, event],
      };
  return {
    ...campaign,
    // Top deck is empty?  "Shuffle" the bottom back into the top
    roadEvents: roadEvents.top.length
      ? roadEvents
      : {
          ...roadEvents,
          top: [...roadEvents.bottom].sort((a, b) => a - b),
          bottom: [],
        },
    parties: {
      ...campaign.parties,
      [party]: {
        ...campaign.parties[party],
        location: {
          ...campaign.parties[party].location,
          scenario,
          casual,
          attempts: 0,
        },
      },
    },
  };
};

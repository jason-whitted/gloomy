import { SCENARIO, SCENARIO_STATUS } from '../../../../constants';

export default (campaign, { payload: { party, event, remove } }) => {
  const cityEvents = !event
    ? campaign.cityEvents
    : {
        ...campaign.cityEvents,
        // Take the city event out of the top
        top: campaign.cityEvents.top.filter(ce => ce !== event),
        // If the city event is not being removed, place it in the bottom
        bottom: remove ? campaign.cityEvents.bottom : [...campaign.cityEvents.bottom, event],
      };

  return {
    ...campaign,
    // Top deck is empty?  "Shuffle" the bottom back into the top
    cityEvents: cityEvents.top.length
      ? cityEvents
      : {
          ...cityEvents,
          top: [...cityEvents.bottom].sort((a, b) => a - b),
          bottom: [],
        },
    parties: {
      ...campaign.parties,
      [party]: {
        ...campaign.parties[party],
        location: {
          ...campaign.parties[party].location,
          scenario: undefined,
          casual: undefined,
        },
      },
    },
    // First time in Gloomhaven in a new campaign?  Unlock first scenario.
    scenarios: campaign.scenarios[SCENARIO.BLACK_BARROW]
      ? campaign.scenarios
      : {
          ...campaign.scenarios,
          [SCENARIO.BLACK_BARROW]: SCENARIO_STATUS.AVAILABLE,
        },
  };
};

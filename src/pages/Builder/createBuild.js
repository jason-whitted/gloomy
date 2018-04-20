import { ACTION, ACTION_CONFIG } from '../../constants';

export default () => {
  const campaign = ACTION_CONFIG[ACTION.CAMPAIGN_CREATE].reduce({}, { payload: { gist: { owner: {} }, history: [] } });
  const {
    classes,
    cityEvents: { top: cityEvents },
    roadEvents: { top: roadEvents },
    scenarios,
    achievements,
    envelopes,
    donations,
  } = campaign;

  return {
    players: [],
    parties: [],
    classes,
    characters: [],
    cityEvents,
    roadEvents,
    scenarios,
    globalAchievements: achievements,
    partyAchievements: {},
    envelopes,
    items: [],
    donations,
  };
};

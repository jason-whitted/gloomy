import { createSelector } from 'reselect';

import { PERSONAL_QUEST_CONFIG } from '../../../constants';

import selectCampaign from './selectCampaign';

export default createSelector(selectCampaign, campaign =>
  Object.values(PERSONAL_QUEST_CONFIG).filter(q => !campaign.characters.some(c => c.quest.id === q.id)),
);

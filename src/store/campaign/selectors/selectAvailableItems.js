import { createSelector } from 'reselect';

import { ITEM_CONFIG, ITEM_TYPE } from '../../../constants';
import selectCampaign from './selectCampaign';

export default state =>
  createSelector(selectCampaign, campaign => {
    return Object.keys(ITEM_CONFIG).reduce((items, item) => {
      if (item.type === ITEM_TYPE.PROSPERITY && campaign.prosperity >= item.prosperity) {
        items.push(item.id);
      }
      // TODO: Random item unlocks
      // TODO: Solo mission unlocks
      return items;
    }, []);
  });

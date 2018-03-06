import { createSelector } from 'reselect';

import { CLASS, CLASS_CONFIG } from '../../../constants';
import selectCampaign from './selectCampaign';

export default createSelector(selectCampaign, campaign => {
  const classes = {};
  const addEntry = (dict, $class) => {
    dict[$class.id] = $class;
    return dict;
  };

  // Add all of the starter classes
  const addStarter = (dict, id) => {
    const $class = CLASS_CONFIG[id];
    if ($class.starter) addEntry(dict, $class);
    return dict;
  };
  Object.values(CLASS).reduce(addStarter, classes);

  // TODO: Look through completed personal quests and add unlocked classes

  // Turn the classes hash into an array
  return Object.keys(classes).reduce((a, k) => [...a, classes[k]], []);
});

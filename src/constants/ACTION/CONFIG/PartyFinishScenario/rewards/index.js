import * as Diff from 'deep-object-diff';
import reduce from './reduce';

export const reduceScenarioReward = (campaign, action) => {
  const result = reduce(campaign, action);

  if (process.env.NODE_ENV === 'development') {
    console.groupCollapsed('reduce', 'reward', action.reward.type);
    console.log('diff', Diff.detailedDiff(campaign, result));
    console.log('before', campaign);
    console.log('after', result);
    console.log('action', action);
    console.groupEnd();
  }

  return result;
};

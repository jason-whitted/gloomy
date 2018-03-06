import { SCENARIO_STATUS } from '../../../../constants';

export default (campaign, { payload: { scenario } }) => ({
  ...campaign,
  scenarios: {
    ...campaign.scenarios,
    [scenario]: campaign.scenarios[scenario] || SCENARIO_STATUS.AVAILABLE,
  },
});

import { appendCampaignAction, getCampaign, selectCampaign, selectIsCampaignLoading } from '../../store/campaign';

const select = state => ({
  campaign: selectCampaign(state),
  loading: selectIsCampaignLoading(state),
});

const boundActions = {
  appendCampaignAction,
  getCampaign,
};

export default [select, boundActions];

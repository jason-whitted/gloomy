import {
  appendCampaignAction,
  getCampaign,
  renameCampaign,
  selectCampaign,
  selectIsCampaignLoading,
} from '../../store/campaign';

const select = state => ({
  campaign: selectCampaign(state),
  loading: selectIsCampaignLoading(state),
});

const boundActions = {
  appendCampaignAction,
  getCampaign,
  renameCampaign,
};

export default [select, boundActions];

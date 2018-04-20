import {
  appendCampaignAction,
  createCampaign,
  deleteCampaign,
  getCampaign,
  selectIsCampaignLoading,
} from '../../store/campaign';
import {
  addConfig,
  createConfig,
  getConfig,
  removeConfig,
  selectIsConfigLoading,
  selectConfig,
} from '../../store/config';
import { getUser, selectIsUserLoading, selectUser } from '../../store/user';

const select = state => ({
  config: selectConfig(state),
  loading: selectIsUserLoading(state) || selectIsConfigLoading(state) || selectIsCampaignLoading(state),
  user: selectUser(state),
});

const boundActions = {
  addConfig,
  appendCampaignAction,
  createCampaign,
  createConfig,
  deleteCampaign,
  getCampaign,
  getConfig,
  getUser,
  removeConfig,
};

export default [select, boundActions];

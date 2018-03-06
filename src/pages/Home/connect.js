import { selectCampaign } from '../../store/campaign';
import { selectUserToken } from '../../store/user';

const select = state => ({
  authenticated: !!selectUserToken(state),
  campaign: selectCampaign(state),
});

const boundActions = {};

export default [select, boundActions];

import { ACTION, ACTION_CONFIG } from '../../../constants/ACTION/';

export default {
  id: '',
  data: ACTION_CONFIG[ACTION.CAMPAIGN_CREATE].reduce({}, { payload: { gist: { owner: {} }, history: [] } }),
  error: '',
  expires: 0,
  loading: false,
};

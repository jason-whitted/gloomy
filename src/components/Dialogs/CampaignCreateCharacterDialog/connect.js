import { selectAvailablePersonalQuests } from '../../../store/campaign';

const select = state => ({
  availableQuests: selectAvailablePersonalQuests(state),
});

const boundActions = {};

export default [select, boundActions];

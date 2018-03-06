import { selectAvailablePersonalQuests } from '../../../store/campaign';

const sortByName = (a, b) => a.name.localeCompare(b.name);

const select = state => ({
  availableQuests: selectAvailablePersonalQuests(state).sort(sortByName),
});

const boundActions = {};

export default [select, boundActions];

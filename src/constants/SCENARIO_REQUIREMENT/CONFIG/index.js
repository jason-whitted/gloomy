import ID from '../ID';

import Bravery from './Bravery';
import GlobalAchievement from './GlobalAchievement';
import ItemEquipped from './ItemEquipped';
import OneOf from './OneOf';
import PartyAchievement from './PartyAchievement';
import PersonalQuest from './PersonalQuest';

const config = {
  [ID.BRAVERY]: Bravery,
  [ID.GLOBAL_ACHIEVEMENT]: GlobalAchievement,
  [ID.ITEM_EQUIPPED]: ItemEquipped,
  [ID.ONE_OF]: OneOf,
  [ID.PARTY_ACHIEVEMENT]: PartyAchievement,
  [ID.PERSONAL_QUEST]: PersonalQuest,
};

Object.defineProperty(config, 'eligible', {
  enumerable: false,
  value({ campaign, party, scenario }) {
    const initialState = {
      campaign,
      party,
      eligible: true,
    };

    const eligibility = scenario.requirements.reduce((result, requirement) => {
      const ret = config[requirement.type].reduce(result, requirement);
      return ret;
    }, initialState);

    return eligibility.eligible;
  },
});

export default config;

import { SCENARIO_REWARD_TYPE as REWARD } from '../../../../../constants';

import { Checkmarks } from './Checkmarks';
import { CityEvent } from './CityEvent';
import { Class } from './Class';
import { CollectiveGold } from './CollectiveGold';
import { ConditionalGlobalAchievement } from './ConditionalGlobalAchievement';
import { Envelope } from './Envelope';
import { GlobalAchievement } from './GlobalAchievement';
import { Gold } from './Gold';
import { Item } from './Item';
import { Item2x } from './Item2x';
import { ItemDesign } from './ItemDesign';
import { PartyAchievement } from './PartyAchievement';
import { Prosperity } from './Prosperity';
import { Reputation } from './Reputation';
import { Retire } from './Retire';
import { Scenario } from './Scenario';
import { XP } from './XP';

const reduceScenarioReward = (campaign, config) => {
  const { payload: { party, characters, rewards }, reward } = config;

  switch (reward.type) {
    case REWARD.CHECKMARKS:
      return Checkmarks(campaign, { characters, count: reward.count });
    case REWARD.CHOOSE_1_SCENARIO:
      return Scenario(campaign, { payload: { scenario: rewards[REWARD.CHOOSE_1_SCENARIO] } });
    case REWARD.CITY_EVENT:
      return CityEvent(campaign, {
        ...config,
        payload: {
          ...config.payload,
          event: reward.event,
        },
      });
    case REWARD.CLASS:
      return Class(campaign, { payload: { class: reward.class } });
    case REWARD.COLLECTIVE_GOLD:
      return CollectiveGold(campaign, { characters: rewards[REWARD.COLLECTIVE_GOLD] });
    case REWARD.CONDITIONAL_GLOBAL_ACHIEVEMENT:
      return ConditionalGlobalAchievement(campaign, { condition: reward.condition, achievement: reward.achievement });
    case REWARD.EITHER:
      return reward[rewards[REWARD.EITHER]].reduce(
        (c, reward) => reduceScenarioReward(c, { ...config, reward }),
        campaign,
      );
    case REWARD.ENVELOPE:
      return Envelope(campaign, { envelope: reward.envelope });
    case REWARD.GLOBAL_ACHIEVEMENT:
      return GlobalAchievement(campaign, { payload: { achievement: reward.achievement } });
    case REWARD.GOLD:
      return Gold(campaign, { characters, count: reward.count });
    case REWARD.ITEM:
      return Item(campaign, {
        ...config,
        payload: {
          ...config.payload,
          character: rewards[REWARD.ITEM],
          item: reward.item,
        },
      });
    case REWARD.ITEM_2X:
      return Item2x(campaign, { characters: rewards[REWARD.ITEM_2X], item: reward.item });
    case REWARD.ITEM_DESIGN:
      return ItemDesign(campaign, {
        ...config,
        payload: {
          ...config.payload,
          item: reward.item,
        },
      });
    case REWARD.LOST_PARTY_ACHIEVEMENT:
      return PartyAchievement(campaign, { payload: { party, achievement: reward.achievement, remove: true } });
    case REWARD.PARTY_ACHIEVEMENT:
      return PartyAchievement(campaign, { payload: { party, achievement: reward.achievement } });
    case REWARD.PROSPERITY:
      return Prosperity(campaign, {
        ...config,
        payload: {
          ...config.payload,
          count: reward.count,
        },
      });
    case REWARD.REPUTATION:
      return Reputation(campaign, {
        ...config,
        payload: {
          ...config.payload,
          count: reward.count,
        },
      });
    case REWARD.RETIRE:
      return Retire(campaign, {
        ...config,
        payload: {
          ...config.payload,
          character: rewards[REWARD.RETIRE],
        },
      });
    case REWARD.SCENARIO:
      return Scenario(campaign, {
        ...config,
        payload: {
          ...config.payload,
          scenario: reward.scenario,
        },
      });
    case REWARD.XP:
      return XP(campaign, { characters, count: reward.count });
    default:
      console.warn(`Unsupported ScenarioReward: ${reward.type}`, reward);
      return campaign;
  }
};

export default reduceScenarioReward;

import { ATTACK_MODIFIER_CARD, SCENARIO_CONFIG, SCENARIO_STATUS } from '../../../../constants';
import { Convert } from '../../../../common/Convert';

import { reduceScenarioReward } from './rewards';

export default (state, action) => {
  let campaign = state;

  const { party, characters, level, failed, scenario } = action.payload;
  const curParty = campaign.parties[party];
  const curScenario = { ...SCENARIO_CONFIG[scenario], status: campaign.scenarios[scenario] };
  const casual = curScenario.solo ? false : curParty.location.casual;
  const completedCampaignScenario = !casual && !failed;

  if (completedCampaignScenario) {
    // process scenario rewards
    campaign = curScenario.rewards.reduce((c, reward) => reduceScenarioReward(c, { ...action, reward }), campaign);
  }

  if (!failed) {
    campaign = {
      ...campaign,
      characters: Object.entries(campaign.characters).reduce((obj, [key, value]) => {
        if (!characters[key]) return { ...obj, [key]: value };
        return {
          ...obj,
          [key]: {
            ...value,
            // Add battle goal checkmarks
            ...Convert.offsetChecks(value, characters[key].checks),
            // Add bonus xp
            xp: value.xp + Convert.scenarioLevelToXP(level),
          },
        };
      }, {}),
    };
  }

  campaign = {
    ...campaign,
    characters: Object.entries(campaign.characters).reduce((obj, [key, value]) => {
      if (!characters[key]) return { ...obj, [key]: value };
      return {
        ...obj,
        [key]: {
          ...value,
          // Add gold that they looted * level
          gold: value.gold + Convert.scenarioLevelToGold(level) * (characters[key].gold || 0),
          // Add xp they earned during the level
          xp: value.xp + (characters[key].xp || 0),
          // remove blessings (sanctuary donations)
          attackDeck: value.attackDeck.filter(c => c !== ATTACK_MODIFIER_CARD.BLESS),
          // Update sanctuary donation status
          donate: completedCampaignScenario,
        },
      };
    }, {}),
    parties: {
      ...campaign.parties,
      [party]: {
        ...campaign.parties[party],
        location: {
          ...curParty.location,
          // Update the attempt counter
          attempts: curParty.location.attempts + 1,
        },
      },
    },
    scenarios: {
      ...campaign.scenarios,
      // Update the scenario status
      [scenario]: !casual && !failed ? SCENARIO_STATUS.COMPLETE : curScenario.status,
    },
  };

  return campaign;
};

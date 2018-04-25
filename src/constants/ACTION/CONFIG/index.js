import * as Diff from 'deep-object-diff';
import { PERSONAL_QUEST_CONFIG } from '../../PERSONAL_QUEST';
import ID from '../ID';

import CampaignAddAchievement from './CampaignAddAchievement';
import CampaignAddProsperity from './CampaignAddProsperity';
import CampaignContributors from './CampaignContributors';
import CampaignCreate from './CampaignCreate';
import CampaignPatch from './CampaignPatch';
import CampaignPermissions from './CampaignPermissions';
import CampaignUnlockClass from './CampaignUnlockClass';
import CampaignUnlockCityEvent from './CampaignUnlockCityEvent';
import CampaignUnlockRoadEvent from './CampaignUnlockRoadEvent';
import CampaignUnlockScenario from './CampaignUnlockScenario';
import CharacterAddAbility from './CharacterAddAbility';
import CharacterAddAugment from './CharacterAddAugment';
import CharacterAddCheckmark from './CharacterAddCheckmark';
import CharacterAddGold from './CharacterAddGold';
import CharacterAddPerk from './CharacterAddPerk';
import CharacterAddXP from './CharacterAddXP';
import CharacterBuyItem from './CharacterBuyItem';
import CharacterCreate from './CharacterCreate';
import CharacterExhaustion from './CharacterExhaustion';
import CharacterHiatus from './CharacterHiatus';
import CharacterKillEnemy from './CharacterKillEnemy';
import CharacterLevelUp from './CharacterLevelUp';
import CharacterManualQuestProgress from './CharacterManualQuestProgress';
import CharacterNotes from './CharacterNotes';
import CharacterReceiveItem from './CharacterReceiveItem';
import CharacterRename from './CharacterRename';
import CharacterRetire from './CharacterRetire';
import CharacterSanctuaryDonation from './CharacterSanctuaryDonation';
import CharacterSellItem from './CharacterSellItem';
import CharacterSellAllItems from './CharacterSellAllItems';
import CharacterUnlockItemDesign from './CharacterUnlockItemDesign';
import DeleteAction from './DeleteAction';
import PartyAddAchievement from './PartyAddAchievement';
import PartyAddReputation from './PartyAddReputation';
import PartyCreate from './PartyCreate';
import PartyFinishScenario from './PartyFinishScenario';
import PartyRename from './PartyRename';
import PartyTravelToGloomhaven from './PartyTravelToGloomhaven';
import PartyTravelToScenario from './PartyTravelToScenario';
import PlayerCreate from './PlayerCreate';
import PlayerOwners from './PlayerOwners';
import PlayerRename from './PlayerRename';

const config = {
  [ID.CAMPAIGN_ADD_ACHIEVEMENT]: CampaignAddAchievement,
  [ID.CAMPAIGN_ADD_PROSPERITY]: CampaignAddProsperity,
  [ID.CAMPAIGN_CONTRIBUTORS]: CampaignContributors,
  [ID.CAMPAIGN_CREATE]: CampaignCreate,
  [ID.CAMPAIGN_PATCH]: CampaignPatch,
  [ID.CAMPAIGN_PERMISSIONS]: CampaignPermissions,
  [ID.CAMPAIGN_UNLOCK_CLASS]: CampaignUnlockClass,
  [ID.CAMPAIGN_UNLOCK_CITY_EVENT]: CampaignUnlockCityEvent,
  [ID.CAMPAIGN_UNLOCK_ROAD_EVENT]: CampaignUnlockRoadEvent,
  [ID.CAMPAIGN_UNLOCK_SCENARIO]: CampaignUnlockScenario,
  [ID.CHARACTER_ADD_ABILITY]: CharacterAddAbility,
  [ID.CHARACTER_ADD_AUGMENT]: CharacterAddAugment,
  [ID.CHARACTER_ADD_CHECKMARK]: CharacterAddCheckmark,
  [ID.CHARACTER_ADD_GOLD]: CharacterAddGold,
  [ID.CHARACTER_ADD_PERK]: CharacterAddPerk,
  [ID.CHARACTER_ADD_XP]: CharacterAddXP,
  [ID.CHARACTER_BUY_ITEM]: CharacterBuyItem,
  [ID.CHARACTER_CREATE]: CharacterCreate,
  [ID.CHARACTER_EXHAUSTION]: CharacterExhaustion,
  [ID.CHARACTER_HIATUS]: CharacterHiatus,
  [ID.CHARACTER_KILL_ENEMY]: CharacterKillEnemy,
  [ID.CHARACTER_LEVEL_UP]: CharacterLevelUp,
  [ID.CHARACTER_MANUAL_QUEST_PROGRESS]: CharacterManualQuestProgress,
  [ID.CHARACTER_NOTES]: CharacterNotes,
  [ID.CHARACTER_RECEIVE_ITEM]: CharacterReceiveItem,
  [ID.CHARACTER_RENAME]: CharacterRename,
  [ID.CHARACTER_RETIRE]: CharacterRetire,
  [ID.CHARACTER_SANCTUARY_DONATION]: CharacterSanctuaryDonation,
  [ID.CHARACTER_SELL_ITEM]: CharacterSellItem,
  [ID.CHARACTER_SELL_ALL_ITEMS]: CharacterSellAllItems,
  [ID.CHARACTER_UNLOCK_ITEM_DESIGN]: CharacterUnlockItemDesign,
  [ID.DELETE_ACTION]: DeleteAction,
  [ID.PARTY_ADD_ACHIEVEMENT]: PartyAddAchievement,
  [ID.PARTY_ADD_REPUTATION]: PartyAddReputation,
  [ID.PARTY_CREATE]: PartyCreate,
  [ID.PARTY_FINISH_SCENARIO]: PartyFinishScenario,
  [ID.PARTY_RENAME]: PartyRename,
  [ID.PARTY_TRAVEL_TO_GLOOMHAVEN]: PartyTravelToGloomhaven,
  [ID.PARTY_TRAVEL_TO_SCENARIO]: PartyTravelToScenario,
  [ID.PLAYER_CREATE]: PlayerCreate,
  [ID.PLAYER_OWNERS]: PlayerOwners,
  [ID.PLAYER_RENAME]: PlayerRename,
};

Object.defineProperty(config, 'reduce', {
  enumerable: false,
  value(campaign, action) {
    const { reduce } = config[action.action] || {};
    if (!reduce) {
      console.warn(`Action not found: ${action.action}`);
      return campaign;
    }

    const contributors = campaign.contributors || [];
    if (action.by && contributors.length && !contributors.some(c => c.toLowerCase() === action.by.toLowerCase())) {
      console.warn(`Action ${action.id}-${action.action} skipped because ${action.by} was not a contributor.`);
      return campaign;
    }

    let result = config[action.action].reduce(campaign, action);
    result = PERSONAL_QUEST_CONFIG.reduce(result, action);

    if (process.env.NODE_ENV === 'development') {
      console.groupCollapsed('reduce', 'action', action.action);
      console.log('diff', Diff.detailedDiff(campaign, result));
      console.log('before', campaign);
      console.log('after', result);
      console.log('action', action);
      console.groupEnd();
    }

    return result;
  },
});

export default config;

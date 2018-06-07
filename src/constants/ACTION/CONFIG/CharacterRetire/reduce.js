import { PERSONAL_QUEST_CONFIG, PERSONAL_QUEST_REWARD_TYPE } from '../../../PERSONAL_QUEST';
import CharacterSellAllItems from '../CharacterSellAllItems';
import CampaignAddProsperity from '../CampaignAddProsperity';

export default (state, { payload: { character } }) => {
  let campaign = state;
  campaign = CharacterSellAllItems.reduce(campaign, { payload: { character } });
  campaign = CampaignAddProsperity.reduce(campaign, { payload: { count: 1 } });

  const curChar = campaign.characters[character];
  const curParty = campaign.parties[curChar.party];
  const curPlayer = campaign.players[curChar.player];

  campaign = {
    ...campaign,
    characters: {
      ...campaign.characters,
      [curChar.id]: {
        ...curChar,
        // Mark the character as retired
        retired: true,
      },
    },
    parties: {
      ...campaign.parties,
      [curParty.id]: {
        ...curParty,
        // Remove the character from the party
        characters: Object.keys(curParty.characters).reduce(
          (obj, k) => (k == curChar.id ? obj : { ...obj, [k]: true }), // eslint-disable-line eqeqeq
          {},
        ),
      },
    },
    players: {
      ...campaign.players,
      [curPlayer.id]: {
        ...curPlayer,
        // Remove the character from the player's active list
        characters: Object.keys(curPlayer.characters).reduce(
          (obj, k) => (k == curChar.id ? obj : { ...obj, [k]: true }), // eslint-disable-line eqeqeq
          {},
        ),
        // Add the character to the player's retired list
        retired: {
          ...curPlayer.retired,
          [curChar.id]: true,
        },
      },
    },
  };

  const { reward } = PERSONAL_QUEST_CONFIG[curChar.quest];
  switch (reward.type) {
    case PERSONAL_QUEST_REWARD_TYPE.CLASS:
      return {
        ...campaign,
        classes: {
          ...campaign.classes,
          [reward.class]: true,
        },
      };
    case PERSONAL_QUEST_REWARD_TYPE.ENVELOPE:
      return {
        ...campaign,
        envelopes: {
          ...campaign.envelopes,
          [reward.envelope]: true,
        },
      };
    default:
      console.warn(`Unsupported RewardType '${reward.type}' for PersonalQuest ${curChar.quest}`);
      return campaign;
  }
};

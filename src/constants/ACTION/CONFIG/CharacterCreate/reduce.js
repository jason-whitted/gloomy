import { ABILITY_CARD_CONFIG, STANDARD_ATTACK_MODIFIER_DECK, PERSONAL_QUEST_CONFIG } from '../../../../constants';
import { Convert } from '../../../../common/Convert';

export default (campaign, { payload: { player, party, name, level, class: $class, quest, imported }, id, by, dt }) => {
  const abilityDeck = Object.values(ABILITY_CARD_CONFIG).reduce(
    (obj, card) =>
      card.class !== $class || card.level > 1
        ? obj
        : {
            ...obj,
            [card.id]: {
              id: card.id,
              augments: {},
            },
          },
    {},
  );

  return {
    ...campaign,
    players: {
      ...campaign.players,
      [player]: {
        ...campaign.players[player],
        characters: {
          ...campaign.players[player].characters,
          // Associate the character to the player
          [id]: true,
        },
      },
    },
    parties: {
      ...campaign.parties,
      [party]: {
        ...campaign.parties[party],
        characters: {
          ...campaign.parties[party].characters,
          // Associate the character to the party
          [id]: true,
        },
      },
    },
    characters: {
      ...campaign.characters,
      [id]: {
        id,
        player,
        party,
        name,
        xp: Convert.levelToXP(level),
        class: $class,
        quest,
        retirement: PERSONAL_QUEST_CONFIG[quest].initialState,
        hiatus: false,
        retired: false,
        level,
        gold: Convert.levelToGold(level),
        items: {},
        checks: 0,
        // perks is not a map because duplicates are allowed
        perks: [],
        // Start with one perk for each character the player has retired
        maxPerks: Object.keys(campaign.players[player].retired).length + (level - 1),
        // deck is not a map because duplicates are allowed,
        attackDeck: [...STANDARD_ATTACK_MODIFIER_DECK],
        abilityDeck,
        // Start with 1/X cards + 1 new card for each new character level
        maxAbilities: Object.keys(abilityDeck).length + (level - 1),
        notes: '',
        donate: false,
        by,
        dt,
        imported,
      },
    },
  };
};

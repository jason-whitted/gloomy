import { ATTACK_MODIFIER_CARD, ENVELOPE } from '../../../../constants';
import CampaignAddProsperity from '../CampaignAddProsperity/reduce';

const PROSPERITY_BONUSES = [15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];

export default (state, { payload: { character } }) => {
  let campaign = state;

  const curChar = campaign.characters[character];
  const donations = campaign.donations + 1;

  campaign = {
    ...campaign,
    characters: {
      ...campaign.characters,
      [character]: {
        ...curChar,
        gold: curChar.gold - 10,
        attackDeck: [...curChar.attackDeck, ATTACK_MODIFIER_CARD.BLESS, ATTACK_MODIFIER_CARD.BLESS],
        donate: false,
      },
    },
    donations,
    // prettier-ignore
    envelopes: donations < 10 ? campaign.envelopes : {
      ...campaign.envelopes,
      [ENVELOPE.B]: true,
    }
  };

  const bonus = PROSPERITY_BONUSES.indexOf(donations) < 0 ? 0 : 1;
  if (bonus) {
    campaign = CampaignAddProsperity(campaign, { payload: { count: bonus } });
  }

  return campaign;
};

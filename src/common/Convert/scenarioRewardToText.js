import {
  CLASS_CONFIG,
  ENVELOPE_CONFIG,
  GLOBAL_ACHIEVEMENT_CONFIG,
  ITEM_CONFIG,
  PARTY_ACHIEVEMENT_CONFIG,
  SCENARIO_CONFIG,
  SCENARIO_REWARD_TYPE,
} from '../../constants';

const scenarioRewardToText = reward => {
  switch ((reward || {}).type) {
    case SCENARIO_REWARD_TYPE.CHECKMARKS:
      return `Receive ${reward.count} checkmarks`;
    case SCENARIO_REWARD_TYPE.CHOOSE_1_SCENARIO:
      return `Choose 1 scenario from: ${reward.scenarios
        .map(id => SCENARIO_CONFIG[id])
        .map(s => `${s.id} ${s.name}`)
        .join(', ')}`;
    case SCENARIO_REWARD_TYPE.CITY_EVENT:
      return `City event ${reward.event}`;
    case SCENARIO_REWARD_TYPE.CLASS:
      return `Unlock class: ${CLASS_CONFIG[reward.class].name}`;
    case SCENARIO_REWARD_TYPE.COLLECTIVE_GOLD:
      return `Receive ${reward.count} collective gold`;
    case SCENARIO_REWARD_TYPE.EITHER:
      return `Receive either: '${reward.a.map(r => scenarioRewardToText(r).join(', '))}' or '${reward.b.map(r =>
        scenarioRewardToText(r).join(', '),
      )}'`;
    case SCENARIO_REWARD_TYPE.ENVELOPE:
      return `Open ${ENVELOPE_CONFIG[reward.envelope].name}`;
    case SCENARIO_REWARD_TYPE.GLOBAL_ACHIEVEMENT:
      return `Global Achievement: ${GLOBAL_ACHIEVEMENT_CONFIG[reward.achievement]}`;
    case SCENARIO_REWARD_TYPE.GOLD:
      return `Receive ${reward.count} gold each`;
    case SCENARIO_REWARD_TYPE.ITEM:
      return `Receive Item: ${reward.item} ${ITEM_CONFIG[reward.item].name}`;
    case SCENARIO_REWARD_TYPE.ITEM_DESIGN:
      return `Unlock Item Design: ${reward.item} ${ITEM_CONFIG[reward.item].name}`;
    case SCENARIO_REWARD_TYPE.LOST_PARTY_ACHIEVEMENT:
      return `Lose Party Achievement: ${PARTY_ACHIEVEMENT_CONFIG[reward.achievement]}`;
    case SCENARIO_REWARD_TYPE.PARTY_ACHIEVEMENT:
      return `Party Achievement: ${PARTY_ACHIEVEMENT_CONFIG[reward.achievement]}`;
    case SCENARIO_REWARD_TYPE.PROSPERITY:
      return `Receive ${reward.count} prosperity`;
    case SCENARIO_REWARD_TYPE.SCENARIO:
      return `Unlock Scenario: ${reward.scenario} ${SCENARIO_CONFIG[reward.scenario].name}`;
    case SCENARIO_REWARD_TYPE.REPUTATION:
      return `Receive ${reward.count} reputation`;
    case SCENARIO_REWARD_TYPE.RETIRE:
      return `Retire: ${reward.notes}`;
    case SCENARIO_REWARD_TYPE.XP:
      return `Receive ${reward.count} xp each`;
    default:
      return '??';
  }
};

export default scenarioRewardToText;

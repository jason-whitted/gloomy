import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { ACTION, ACTION_CONFIG, SCENARIO_REWARD_TYPE, SCENARIO_STATUS } from '../../../constants';
import { ResultForm } from './ResultForm';
import { createCharacterForm } from './CharacterForm';
import { RequireAttendeeForm } from './RequireAttendeeForm';
import { LevelForm } from './LevelForm';
import { RewardChoose1ScenarioForm } from './RewardChoose1ScenarioForm';
import { RewardCollectiveGoldForm } from './RewardCollectiveGoldForm';
import { RewardEitherForm } from './RewardEitherForm';
import { RewardItemForm } from './RewardItemForm';
import { RewardItem2xForm } from './RewardItem2xForm';
import { RewardRetireForm } from './RewardRetireForm';

const STEP = {
  RESULT: 'Result',
  CHARACTER: 'Character',
  REQUIRE_ATTENDEE: 'RequireAttendee',
  LEVEL: 'Level',
  REWARD: 'Reward',
};

const REWARD_TYPES = [
  SCENARIO_REWARD_TYPE.CHOOSE_1_SCENARIO,
  SCENARIO_REWARD_TYPE.COLLECTIVE_GOLD,
  SCENARIO_REWARD_TYPE.ITEM,
  SCENARIO_REWARD_TYPE.ITEM_2X,
  SCENARIO_REWARD_TYPE.RETIRE,
  SCENARIO_REWARD_TYPE.EITHER,
];

class PartyFinishScenarioDialog extends Component {
  componentWillMount() {
    const { campaign, party, character, solo } = this.props;

    const scenario = solo
      ? campaign.scenarios.find(s => s.solo && s.class === character.class.id)
      : party.location.scenario;

    this.setState({
      scenario,
      stepIndex: 0,
      steps: [
        { type: STEP.RESULT },
        ...(solo ? [character] : party.characters.filter(c => !c.hiatus)).map(character => ({
          type: STEP.CHARACTER,
          character,
          CharacterForm: createCharacterForm(character),
        })),
        { type: STEP.REQUIRE_ATTENDEE },
        { type: STEP.LEVEL },
        ...scenario.rewards.filter(reward => REWARD_TYPES.includes(reward.type)).map(reward => ({
          type: STEP.REWARD + reward.type,
          reward,
        })),
      ],
    });
  }

  submit = values => {
    const { appendCampaignAction, party } = this.props;
    const { characters, level, failed, rewards } = values;
    const action = ACTION_CONFIG[ACTION.PARTY_FINISH_SCENARIO].create({
      party: party.id,
      characters,
      scenario: this.state.scenario.id,
      level,
      failed,
      rewards,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  next = values => {
    // update the current step's values
    let stepIndex = this.state.stepIndex;
    const steps = this.state.steps.map((s, i) => (i === stepIndex ? { ...s, values } : s));
    this.setState({ steps }, () => {
      // Increment the stepIndex
      stepIndex++;

      const next = steps[stepIndex];
      if (next) {
        // Skip this step?
        if (next.type === STEP.REQUIRE_ATTENDEE && this.getAttendees().length) {
          stepIndex++;
        }
      }

      this.setState({ stepIndex }, next ? undefined : this.complete);
    });
  };

  back = () => {
    let stepIndex = this.state.stepIndex;
    stepIndex--;

    const prev = this.state.steps[stepIndex];
    if (prev.type === STEP.REQUIRE_ATTENDEE) stepIndex--;

    stepIndex = Math.max(0, stepIndex);
    this.setState({ stepIndex });
  };

  complete = () => {
    const { steps } = this.state;
    const findStep = type => steps.find(s => s.type === type);

    const level = parseInt(findStep(STEP.LEVEL).values.level, 10);
    const failed = findStep(STEP.RESULT).values.result === SCENARIO_STATUS.AVAILABLE || undefined;

    const characters = steps.filter(s => s.type === STEP.CHARACTER && s.values.attended === 'yes').reduce(
      (obj, step) => ({
        ...obj,
        [step.character.id]: {
          xp: parseInt(step.values.xp, 10) || 0,
          gold: parseInt(step.values.gold, 10) || 0,
          checks: !failed ? parseInt(step.values.checks, 10) || 0 : undefined,
        },
      }),
      {},
    );

    const rewards = {};
    let reward;
    if ((reward = findStep(STEP.REWARD + SCENARIO_REWARD_TYPE.CHOOSE_1_SCENARIO))) {
      rewards[SCENARIO_REWARD_TYPE.CHOOSE_1_SCENARIO] = parseInt(reward.values.scenario, 10);
    }
    if ((reward = findStep(STEP.REWARD + SCENARIO_REWARD_TYPE.COLLECTIVE_GOLD))) {
      rewards[SCENARIO_REWARD_TYPE.COLLECTIVE_GOLD] = Object.entries(reward.values.characters).reduce(
        (obj, [k, v]) => ({
          ...obj,
          [k.slice(1)]: parseInt(v, 10) || 0,
        }),
        {},
      );
    }
    if ((reward = findStep(STEP.REWARD + SCENARIO_REWARD_TYPE.ITEM))) {
      rewards[SCENARIO_REWARD_TYPE.ITEM] = parseInt(reward.values.character, 10);
    }
    if ((reward = findStep(STEP.REWARD + SCENARIO_REWARD_TYPE.ITEM_2X))) {
      rewards[SCENARIO_REWARD_TYPE.ITEM_2X] = [
        parseInt(reward.values.character1, 10),
        parseInt(reward.values.character2, 10),
      ];
    }
    if ((reward = findStep(STEP.REWARD + SCENARIO_REWARD_TYPE.RETIRE))) {
      rewards[SCENARIO_REWARD_TYPE.RETIRE] = parseInt(reward.values.character, 10);
    }
    if ((reward = findStep(STEP.REWARD + SCENARIO_REWARD_TYPE.EITHER))) {
      rewards[SCENARIO_REWARD_TYPE.EITHER] = reward.values.option;
    }

    this.submit({
      level,
      failed,
      characters,
      rewards,
    });
  };

  cancel = error => this.props.onClose();

  getAttendees = () =>
    this.state.steps
      .filter(s => s.type === STEP.CHARACTER && s.values && s.values.attended === 'yes')
      .map(s => s.character);

  render() {
    const { party } = this.props;
    const { stepIndex, steps } = this.state;
    const step = steps[stepIndex] || {};
    const attendees = this.getAttendees();

    return (
      <Fragment>
        <ResultForm isOpen={step.type === STEP.RESULT} onNext={this.next} onCancel={this.cancel} />
        {steps.filter(s => s.type === STEP.CHARACTER).map(({ character, CharacterForm }) => {
          const isOpen = step.type === STEP.CHARACTER && step.character === character;
          return (
            <CharacterForm
              key={character.id}
              isOpen={isOpen}
              onBack={this.back}
              onNext={this.next}
              onCancel={this.cancel}
            />
          );
        })}
        <RequireAttendeeForm
          isOpen={step.type === STEP.REQUIRE_ATTENDEE}
          characters={party.characters}
          onBack={this.back}
          onCancel={this.cancel}
        />
        <LevelForm
          isOpen={step.type === STEP.LEVEL}
          attendees={attendees}
          onBack={this.back}
          onNext={this.next}
          onCancel={this.cancel}
        />
        <RewardChoose1ScenarioForm
          isOpen={step.type === STEP.REWARD + SCENARIO_REWARD_TYPE.CHOOSE_1_SCENARIO}
          scenarios={(step.reward || {}).scenarios || []}
          onBack={this.back}
          onNext={this.next}
          onCancel={this.cancel}
        />
        <RewardCollectiveGoldForm
          isOpen={step.type === STEP.REWARD + SCENARIO_REWARD_TYPE.COLLECTIVE_GOLD}
          count={500}
          attendees={attendees}
          onBack={this.back}
          onNext={this.next}
          onCancel={this.cancel}
        />
        <RewardItemForm
          isOpen={step.type === STEP.REWARD + SCENARIO_REWARD_TYPE.ITEM}
          item={(step.reward || {}).item || 0}
          attendees={attendees}
          onBack={this.back}
          onNext={this.next}
          onCancel={this.cancel}
        />
        <RewardItem2xForm
          isOpen={step.type === STEP.REWARD + SCENARIO_REWARD_TYPE.ITEM_2X}
          item={(step.reward || {}).item || 0}
          attendees={attendees}
          onBack={this.back}
          onNext={this.next}
          onCancel={this.cancel}
        />
        <RewardRetireForm
          isOpen={step.type === STEP.REWARD + SCENARIO_REWARD_TYPE.RETIRE}
          note={(step.reward || {}).note || 0}
          attendees={attendees}
          onBack={this.back}
          onNext={this.next}
          onCancel={this.cancel}
        />
        <RewardEitherForm
          isOpen={step.type === STEP.REWARD + SCENARIO_REWARD_TYPE.EITHER}
          rewardA={(step.reward || {}).a}
          rewardB={(step.reward || {}).b}
          onBack={this.back}
          onNext={this.next}
          onCancel={this.cancel}
        />
      </Fragment>
    );
  }
}

PartyFinishScenarioDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  party: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

PartyFinishScenarioDialog.defaultProps = {};

export default PartyFinishScenarioDialog;

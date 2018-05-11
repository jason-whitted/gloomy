import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import clone from 'clone';

import { AUGMENT, ACTION, ACTION_CONFIG } from '../../../constants';
import { Convert } from '../../../common';
import { SelectField } from '../../Fields';
import { AbilityCard } from '../../AbilityCard';

import connectConfig from './connect';
import formConfig from './form';
import './styles.css';

class CharacterAddAbilityDialog extends Component {
  state = { abilities: [] };

  componentWillMount() {
    const { campaign, character } = this.props;

    const augmentableAbilities = character.abilityDeck.reduce((arr, ability) => {
      if (!ability.augmentSlots) return arr;
      const slots = Object.values(ability.augmentSlots).filter(a => !a.readonly);
      const augmented = slots.some(a => a.type !== AUGMENT.AVAILABLE);
      const augmentedFully = slots.every(a => a.type !== AUGMENT.AVAILABLE);
      const augs = slots.filter(a => a.type === AUGMENT.AVAILABLE).map(a => a.id);
      return [...arr, { ...clone(ability), augmented, augmentedFully, augs }];
    }, []);
    const prosperity = Convert.prosperityToProsperityLevel(campaign.prosperity);
    const augmentedCount = augmentableAbilities.filter(c => c.augmented).length;
    const abilities = augmentableAbilities.filter(c => !c.augmentedFully);
    this.setState({
      abilities: augmentedCount < prosperity ? abilities : abilities.filter(c => c.augmented),
    });
  }

  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const { ability, slot, augment } = values;
    const action = ACTION_CONFIG[ACTION.CHARACTER_ADD_AUGMENT].create({
      character: character.id,
      ability,
      slot,
      augment,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  onSelectAugment = selection => {
    const { card, slot, augment } = selection;
    this.submit({
      ability: card.id,
      slot: slot.id,
      augment: augment.id,
    });
  };

  render() {
    const { character, formValues, handleSubmit } = this.props;
    const { abilities } = this.state;

    const card = abilities.find(a => a.id == formValues.ability); // eslint-disable-line eqeqeq

    return (
      <Modal isOpen toggle={this.cancel} className="CharacterAddAbilityDialog">
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Augment Ability</ModalHeader>
          <ModalBody>
            <SelectField name="ability" label="Ability:" autoFocus>
              <option />
              {abilities.map(ability => (
                <option key={ability.id} value={ability.id}>
                  Level {ability.level || 'X'} - {ability.name}
                </option>
              ))}
            </SelectField>
            {card && <AbilityCard card={card} noFlip onSelectAugment={this.onSelectAugment} maxCost={character.gold} />}
          </ModalBody>
        </form>
      </Modal>
    );
  }
}

CharacterAddAbilityDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  formValues: PropTypes.object.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
};

CharacterAddAbilityDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(CharacterAddAbilityDialog);

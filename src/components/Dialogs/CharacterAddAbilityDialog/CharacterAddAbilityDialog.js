import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ABILITY_CARD_CONFIG, ACTION, ACTION_CONFIG } from '../../../constants';
import { SelectField } from '../../Fields';
import { AbilityCard } from '../../AbilityCard';

import connectConfig from './connect';
import formConfig from './form';

class CharacterAddAbilityDialog extends Component {
  state = { abilities: [] };

  componentWillMount() {
    const { character } = this.props;

    const abilitiesAvailable = character.maxAbilities - character.abilityDeck.length;
    const maxLevel = character.level - (abilitiesAvailable - 1);
    const abilities = Object.values(ABILITY_CARD_CONFIG)
      .filter(c => c.class === character.class.id && c.level <= maxLevel) // current class and level
      .filter(c => !character.abilityDeck.some(d => d.id === c.id)); // only cards they don't already have
    this.setState({ abilities });
  }

  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const ability = parseInt(values.ability, 10);
    const action = ACTION_CONFIG[ACTION.CHARACTER_ADD_ABILITY].create({
      character: character.id,
      ability,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { abilityID, handleSubmit, submitting } = this.props;
    const { abilities } = this.state;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Select New Ability</ModalHeader>
          <ModalBody>
            <SelectField name="ability" label="Ability:" autoFocus>
              <option />
              {abilities.map(ability => (
                <option key={ability.id} value={ability.id}>
                  Level {ability.level} - {ability.name}
                </option>
              ))}
            </SelectField>
            {abilityID && <AbilityCard card={ABILITY_CARD_CONFIG[abilityID]} />}
          </ModalBody>
          <ModalFooter>
            <Button color="success" disabled={submitting}>
              Submit
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

CharacterAddAbilityDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  abilityID: PropTypes.string.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterAddAbilityDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(CharacterAddAbilityDialog);

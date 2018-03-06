import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { AbilityCard } from '../../AbilityCard';

class CharacterAddAbilityDialog extends Component {
  cancel = error => this.props.onClose();

  render() {
    const { character } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <ModalHeader toggle={this.cancel}>Ability Deck</ModalHeader>
        <ModalBody>{character.abilityDeck.map(ability => <AbilityCard key={ability.id} card={ability} />)}</ModalBody>
        <ModalFooter>
          <Button type="button" color="success" onClick={this.cancel}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

CharacterAddAbilityDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CharacterAddAbilityDialog.defaultProps = {};

export default CharacterAddAbilityDialog;

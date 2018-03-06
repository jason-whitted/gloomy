import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';

class CharacterSanctuaryDonationDialog extends Component {
  static text = 'Sanctuary Donation';

  submit = event => {
    event.preventDefault();
    const { appendCampaignAction, character } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_SANCTUARY_DONATION].create({
      character: character.id,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={this.submit}>
          <ModalHeader toggle={this.cancel}>Sanctuary Donation</ModalHeader>
          <ModalBody>Donate 10 gold to the Sanctuary?</ModalBody>
          <ModalFooter>
            <Button color="success" autoFocus>
              Yes
            </Button>
            <Button type="button" onClick={this.cancel}>
              No
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

CharacterSanctuaryDonationDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CharacterSanctuaryDonationDialog.defaultProps = {};

export default CharacterSanctuaryDonationDialog;

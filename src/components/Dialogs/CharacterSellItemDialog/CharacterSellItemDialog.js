import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { Convert } from '../../../common';

class CharacterSellItemDialog extends Component {
  submit = event => {
    event.preventDefault();
    const { appendCampaignAction, character, item } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_SELL_ITEM].create({
      character: character.id,
      item: item.id,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { item } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={this.submit} onReset={this.cancel}>
          <ModalHeader toggle={this.cancel}>Sell Item</ModalHeader>
          <ModalBody>
            Sell {item.name} for {Convert.itemToSellPrice(item.id)} gold?
          </ModalBody>
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

CharacterSellItemDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CharacterSellItemDialog.defaultProps = {};

export default CharacterSellItemDialog;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class PlayerRenameDialog extends Component {
  componentWillMount() {
    const { name } = this.props.player;
    this.props.initialize({ name });
  }

  submit = values => {
    const { appendCampaignAction, player } = this.props;
    const { name } = values;
    if (name !== player.name) {
      const action = ACTION_CONFIG[ACTION.PLAYER_RENAME].create({
        player: player.id,
        from: player.name,
        to: name,
      });
      appendCampaignAction({ action });
    }
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Rename Player</ModalHeader>
          <ModalBody>
            <TextField name="name" label="Name:" autoFocus />
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

PlayerRenameDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

PlayerRenameDialog.defaultProps = {};

export default reduxForm(formConfig)(PlayerRenameDialog);

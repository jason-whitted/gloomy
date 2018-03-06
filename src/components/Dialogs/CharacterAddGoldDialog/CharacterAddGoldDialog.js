import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class CharacterAddGoldDialog extends Component {
  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const count = parseInt(values.gold, 10);
    if (count) {
      const action = ACTION_CONFIG[ACTION.CHARACTER_ADD_GOLD].create({
        character: character.id,
        count,
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
          <ModalHeader toggle={this.cancel}>Add Gold</ModalHeader>
          <ModalBody>
            <TextField name="gold" label="Amount:" type="number" min="-500" max="500" autoFocus />
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

CharacterAddGoldDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterAddGoldDialog.defaultProps = {};

export default reduxForm(formConfig)(CharacterAddGoldDialog);

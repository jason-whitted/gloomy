import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class CharacterAddCheckmarkDialog extends Component {
  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const count = parseInt(values.checks, 10);
    if (count) {
      const action = ACTION_CONFIG[ACTION.CHARACTER_ADD_CHECKMARK].create({
        character: character.id,
        count,
      });
      appendCampaignAction({ action });
    }
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { character, handleSubmit, submitting } = this.props;
    const min = -(character.checks % 3);
    const max = 18 - character.checks;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Add / Remove Checkmarks</ModalHeader>
          <ModalBody>
            <TextField name="checks" label="Number:" type="number" min={min} max={max} autoFocus />
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

CharacterAddCheckmarkDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterAddCheckmarkDialog.defaultProps = {};

export default reduxForm(formConfig)(CharacterAddCheckmarkDialog);

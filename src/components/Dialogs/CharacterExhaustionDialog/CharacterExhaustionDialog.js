import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { SelectField, TextField } from '../../Fields';
import formConfig from './form';

class CharacterExhaustionDialog extends Component {
  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_EXHAUSTION].create({
      character: character.id,
      count: parseInt(values.count, 10),
      self: values.target === 'self',
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Experience Exhaustion</ModalHeader>
          <ModalBody>
            <TextField name="count" label="How many times?" type="number" min="1" max="15" autoFocus />
            <SelectField name="target" label="Who was exhausted?">
              <option />
              <option value="self">Self</option>
              <option value="party">Party Member</option>
            </SelectField>
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

CharacterExhaustionDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterExhaustionDialog.defaultProps = {};

export default reduxForm(formConfig)(CharacterExhaustionDialog);

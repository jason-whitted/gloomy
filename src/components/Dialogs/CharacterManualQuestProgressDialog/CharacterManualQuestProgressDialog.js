import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class CharacterManualQuestProgressDialog extends Component {
  componentWillMount() {
    const { character: { retirement: { value, max } } } = this.props;
    if (max) {
      this.props.initialize({ value, max });
    }
  }

  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_MANUAL_QUEST_PROGRESS].create({
      character: character.id,
      value: parseInt(values.value, 10),
      max: parseInt(values.max, 10),
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
          <ModalHeader toggle={this.cancel}>Manual Quest Progress</ModalHeader>
          <ModalBody>
            <TextField name="value" label="Current Value:" type="number" min="0" autoFocus />
            <TextField name="max" label="Maximum Value:" type="number" min="1" />
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

CharacterManualQuestProgressDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterManualQuestProgressDialog.defaultProps = {};

export default reduxForm(formConfig)(CharacterManualQuestProgressDialog);

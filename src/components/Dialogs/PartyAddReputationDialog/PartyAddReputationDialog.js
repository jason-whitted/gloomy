import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class PartyAddReputationDialog extends Component {
  submit = values => {
    const { appendCampaignAction, party } = this.props;
    const count = parseInt(values.reputation, 10);
    if (count) {
      const action = ACTION_CONFIG[ACTION.PARTY_ADD_REPUTATION].create({
        party: party.id,
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
          <ModalHeader toggle={this.cancel}>Add / Remove Reputation</ModalHeader>
          <ModalBody>
            <TextField name="reputation" label="Amount:" type="number" min="-20" max="20" autoFocus />
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

PartyAddReputationDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  party: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

PartyAddReputationDialog.defaultProps = {};

export default reduxForm(formConfig)(PartyAddReputationDialog);

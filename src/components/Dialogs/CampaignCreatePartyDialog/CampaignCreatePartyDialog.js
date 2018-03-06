import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class CampaignCreatePartyDialog extends Component {
  submit = values => {
    const { appendCampaignAction } = this.props;
    const { name } = values;
    const action = ACTION_CONFIG[ACTION.PARTY_CREATE].create({ name });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Add Party</ModalHeader>
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

CampaignCreatePartyDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignCreatePartyDialog.defaultProps = {};

export default reduxForm(formConfig)(CampaignCreatePartyDialog);

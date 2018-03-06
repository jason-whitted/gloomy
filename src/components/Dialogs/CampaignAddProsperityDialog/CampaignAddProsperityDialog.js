import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class CampaignAddProsperityDialog extends Component {
  submit = values => {
    const { appendCampaignAction } = this.props;
    const count = parseInt(values.prosperity, 10);
    if (count) {
      const action = ACTION_CONFIG[ACTION.CAMPAIGN_ADD_PROSPERITY].create({ count });
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
          <ModalHeader toggle={this.cancel}>Add / Remove Prosperity</ModalHeader>
          <ModalBody>
            <TextField name="prosperity" label="Amount:" type="number" min="-68" max="68" autoFocus />
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

CampaignAddProsperityDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignAddProsperityDialog.defaultProps = {};

export default reduxForm(formConfig)(CampaignAddProsperityDialog);

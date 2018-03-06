import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { TextField } from '../../Fields';
import formConfig from './form';

class CampaignRenameDialog extends Component {
  componentWillMount() {
    const { name } = this.props.campaign;
    this.props.initialize({ name });
  }

  submit = values => {
    const { campaign, renameCampaign } = this.props;
    const { name } = values;
    renameCampaign({ id: campaign.id, name });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Rename Campaign</ModalHeader>
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

CampaignRenameDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignRenameDialog.defaultProps = {};

export default reduxForm(formConfig)(CampaignRenameDialog);

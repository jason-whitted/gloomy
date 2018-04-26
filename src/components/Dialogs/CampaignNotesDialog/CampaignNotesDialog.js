import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextAreaField } from '../../Fields';
import formConfig from './form';

class CampaignNotesDialog extends Component {
  componentWillMount() {
    const { notes } = this.props.campaign;
    this.props.initialize({ notes });
  }

  submit = values => {
    const { appendCampaignAction, campaign } = this.props;
    const { notes } = values;
    if (notes !== campaign.notes) {
      const action = ACTION_CONFIG[ACTION.CAMPAIGN_NOTES].create({
        notes,
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
          <ModalHeader toggle={this.cancel}>Campaign Notes</ModalHeader>
          <ModalBody>
            <TextAreaField name="notes" label="Notes:" autoFocus />
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

CampaignNotesDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignNotesDialog.defaultProps = {};

export default reduxForm(formConfig)(CampaignNotesDialog);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class CampaignUnlockCityEventDialog extends Component {
  componentWillMount() {
    const { campaign, change } = this.props;
    change('events', [...campaign.cityEvents.top, ...campaign.cityEvents.bottom]);
  }

  submit = values => {
    const { appendCampaignAction } = this.props;
    const action = ACTION_CONFIG[ACTION.CAMPAIGN_UNLOCK_CITY_EVENT].create({
      event: parseInt(values.event, 10),
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
          <ModalHeader toggle={this.cancel}>Unlock City Event</ModalHeader>
          <ModalBody>
            <TextField
              name="event"
              label="City Event:"
              type="number"
              min="1"
              max="81"
              onChange={this.search}
              autoFocus
            />
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

CampaignUnlockCityEventDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  change: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignUnlockCityEventDialog.defaultProps = {};

export default reduxForm(formConfig)(CampaignUnlockCityEventDialog);

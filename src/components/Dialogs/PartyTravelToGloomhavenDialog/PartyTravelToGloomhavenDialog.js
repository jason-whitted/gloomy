import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { SelectField, TextField } from '../../Fields';
import formConfig from './form';

class PartyTravelToGloomhavenDialog extends Component {
  state = { randomized: false };

  componentWillMount() {
    const { campaign, change } = this.props;
    // Casual? Do not perform a road event
    if (this.props.party.location.casual) return this.submit({});
    change('cityEvents', campaign.cityEvents.top);
  }

  submit = values => {
    const { appendCampaignAction, party } = this.props;
    const { cityEvent, remove } = values;
    const action = ACTION_CONFIG[ACTION.PARTY_TRAVEL_TO_GLOOMHAVEN].create({
      party: party.id,
      event: cityEvent,
      remove,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  skip = event => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to skip the City Event?')) {
      this.submit({});
    }
  };

  randomCityEvent = event => {
    const { campaign } = this.props;
    const cityEvents = campaign.cityEvents.top;
    const r = Math.abs(~~(Math.random() * 1000000000000)) % cityEvents.length;
    this.props.change('cityEvent', cityEvents[r]);
    this.setState({ randomized: true });
  };

  render() {
    const { campaign, party, handleSubmit, submitting } = this.props;

    if (party.location.casual) return 'Traveling to Gloomhaven...';

    const cityEvents = campaign.cityEvents.top;
    const min = Math.min(...cityEvents);
    const max = Math.max(...cityEvents);
    const randomCityEvent = !this.state.randomized ? this.randomCityEvent : undefined;

    return (
      <Modal isOpen toggle={this.props.onClose}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Travel to Gloomhaven</ModalHeader>
          <ModalBody>
            <TextField
              name="cityEvent"
              label="City Event:"
              autoFocus
              type="number"
              min={min}
              max={max}
              onRandom={randomCityEvent}
            />
            <SelectField name="eventStatus" label="Card Status:">
              <option />
              <option value="return">Return to bottom of deck</option>
              <option value="remove">Remove from the game</option>
            </SelectField>
          </ModalBody>
          <ModalFooter>
            <Button color="success" disabled={submitting}>
              Submit
            </Button>
            <Button color="warning" type="button" onClick={this.skip}>
              Skip Event
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

PartyTravelToGloomhavenDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  party: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

PartyTravelToGloomhavenDialog.defaultProps = {};

export default reduxForm(formConfig)(PartyTravelToGloomhavenDialog);

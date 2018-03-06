import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { SelectField } from '../../Fields';
import connectConfig from './connect';
import formConfig from './form';

class PartyTravelToCasualScenarioDialog extends Component {
  submit = values => {
    const { appendCampaignAction, party } = this.props;
    const scenario = parseInt(values.scenario, 10);
    const action = ACTION_CONFIG[ACTION.PARTY_TRAVEL_TO_SCENARIO].create({
      party: party.id,
      scenario,
      casual: true,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { campaign, formValues, handleSubmit, submitting } = this.props;
    const scenario = campaign.scenarios.find(s => s.id == formValues.scenario); // eslint-disable-line eqeqeq

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Travel to Scenario (casual)</ModalHeader>
          <ModalBody>
            <SelectField name="scenario" label="Scenario:" autoFocus>
              <option />
              {campaign.scenarios.map(s => (
                <option key={s.id} value={s.id}>
                  {s.id} - {s.name}
                  {!s.region.unknown && `, ${s.region.name}`}
                  {s.linked && ` 🖇️`}
                </option>
              ))}
            </SelectField>
            {scenario &&
              !scenario.complete && (
                <div className="alert alert-warning">
                  It is <b>strongly recommended</b> that a party not undertake a scenario in casual mode that they
                  haven't yet experienced in campaign mode.
                </div>
              )}
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

PartyTravelToCasualScenarioDialog.propTypes = {
  campaign: PropTypes.object.isRequired,
  appendCampaignAction: PropTypes.func.isRequired,
  party: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  formValues: PropTypes.object.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

PartyTravelToCasualScenarioDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(PartyTravelToCasualScenarioDialog);

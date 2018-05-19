import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG, SCENARIO_REQUIREMENT_CONFIG } from '../../../constants';
import { SelectField, TextField } from '../../Fields';
import connectConfig from './connect';
import formConfig from './form';

class PartyTravelToCampaignScenarioDialog extends Component {
  state = { randomized: false, scenarios: [] };

  componentWillMount() {
    const { campaign, party } = this.props;
    const scenarios = campaign.scenarios
      .filter(
        scenario =>
          scenario.available && !scenario.solo && SCENARIO_REQUIREMENT_CONFIG.eligible({ campaign, party, scenario }),
      )
      .map(scenario => {
        const from = party.location.scenario || {};
        const linked = from.links && from.links.includes(scenario.id);
        let roadEventRequired = !!scenario.id;
        if (linked) roadEventRequired = false;
        if (party.location.gloomhaven && scenario.linksGloomhaven) roadEventRequired = false;
        return {
          ...scenario,
          linked,
          roadEventRequired,
        };
      });
    this.setState({ scenarios });
    this.props.change('roadEvents', campaign.roadEvents.top);
    this.props.change('roadEventRequired', scenarios.filter(s => s.roadEventRequired).map(s => s.id));
  }

  submit = values => {
    const { appendCampaignAction, party } = this.props;
    const scenario = parseInt(values.scenario, 10);
    const event = parseInt(values.roadEvent, 10);
    const remove = values.eventStatus === 'remove';
    const action = ACTION_CONFIG[ACTION.PARTY_TRAVEL_TO_SCENARIO].create({
      party: party.id,
      scenario,
      casual: false,
      event,
      remove,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  randomRoadEvent = event => {
    const { campaign } = this.props;
    const roadEvents = campaign.roadEvents.top;
    const r = Math.abs(~~(Math.random() * 1000000000000)) % roadEvents.length;
    this.props.change('roadEvent', roadEvents[r]);
    this.setState({ randomized: true });
  };

  render() {
    const { campaign, formValues, handleSubmit, submitting } = this.props;
    const { scenarios } = this.state;

    const scenario = scenarios.find(s => s.id == formValues.scenario); // eslint-disable-line eqeqeq
    const roadEvents = campaign.roadEvents.top;

    const min = Math.min(...roadEvents);
    const max = Math.max(...roadEvents);

    const randomRoadEvent = !this.state.randomized ? this.randomRoadEvent : undefined;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Travel to Scenario</ModalHeader>
          <ModalBody>
            <SelectField name="scenario" label="Scenario:" autoFocus>
              <option />
              {scenarios.map(s => (
                <option key={s.id} value={s.id}>
                  {s.id} - {s.name}
                  {!s.region.unknown && `, ${s.region.name}`}
                  {s.linked && ` 🖇️`}
                </option>
              ))}
            </SelectField>
            {scenario &&
              scenario.roadEventRequired && (
                <Fragment>
                  <TextField
                    name="roadEvent"
                    label="Road Event:"
                    type="number"
                    min={min}
                    max={max}
                    onRandom={randomRoadEvent}
                  />
                  <SelectField name="eventStatus" label="Card Status:">
                    <option />
                    <option value="return">Return to bottom of deck</option>
                    <option value="remove">Remove from the game</option>
                  </SelectField>
                </Fragment>
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

PartyTravelToCampaignScenarioDialog.propTypes = {
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

PartyTravelToCampaignScenarioDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(PartyTravelToCampaignScenarioDialog);

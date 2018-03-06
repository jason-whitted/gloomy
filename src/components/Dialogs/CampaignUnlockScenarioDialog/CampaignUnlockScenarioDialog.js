import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG, SCENARIO_CONFIG } from '../../../constants';
import { Scenario } from '../../Common';
import { TextField } from '../../Fields';
import connectConfig from './connect';
import formConfig from './form';

class CampaignUnlockScenarioDialog extends Component {
  state = { scenarios: [] };

  componentWillMount() {
    const { campaign } = this.props;
    const scenarios = Object.values(SCENARIO_CONFIG).filter(scenario => !campaign[scenario.id] && !scenario.solo);
    this.setState({ scenarios });
  }

  submit = values => {
    const { appendCampaignAction } = this.props;
    const scenario = parseInt(values.scenario, 10);
    if (scenario) {
      const action = ACTION_CONFIG[ACTION.CAMPAIGN_UNLOCK_SCENARIO].create({
        scenario,
      });
      appendCampaignAction({ action });
    }
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  search = event => {
    const { change } = this.props;
    const { scenarios } = this.state;
    const value = event.target.value;
    const id = parseInt(value, 10);
    const filtered = scenarios.filter(scenario => scenario.name.toLowerCase().includes(value.toLowerCase()));
    // prettier-ignore
    const scenario = id ? scenarios.find(scenario => scenario.id === id)
     : filtered.length === 1 ? filtered[0]
     : undefined;
    change('scenario', scenario ? scenario.id : 0);
  };

  render() {
    const { scenarioID, handleSubmit, submitting } = this.props;
    const scenario = this.state.scenarios.find(i => i.id === scenarioID);

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Unlock Scenario</ModalHeader>
          <ModalBody>
            <TextField
              name="search"
              label="Scenario:"
              autoFocus
              onChange={this.search}
              placeholder="Scenario # or name"
            />
            {scenario && <Scenario scenario={scenario} />}
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

CampaignUnlockScenarioDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  scenarioID: PropTypes.number.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignUnlockScenarioDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(CampaignUnlockScenarioDialog);

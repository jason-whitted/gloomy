import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { SCENARIO_CONFIG } from '../../../../constants';
import { SelectField } from '../../../Fields';
import formConfig from './form';

class RewardChoose1ScenarioForm extends Component {
  render() {
    const { scenarios, isOpen, onBack, onNext, onCancel, handleSubmit } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={onCancel}>
        <form onSubmit={handleSubmit(onNext)}>
          <ModalHeader toggle={onCancel}>Finish Scenario</ModalHeader>
          <ModalBody>
            <div className="alert alert-info">
              <h5 className="alert-heading">Scenario Reward:</h5>
              Choose to unlock one of the following:
            </div>
            <SelectField name="scenario" label="Scenario:" autoFocus>
              <option />
              {scenarios.map(id => (
                <option key={id} value={id}>
                  {id} - {SCENARIO_CONFIG[id].name}
                </option>
              ))}
            </SelectField>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="button" onClick={onBack}>
              <i className="fa fa-fw fa-caret-left" /> Back
            </Button>
            <Button color="success">
              Next <i className="fa fa-fw fa-caret-right" />
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default reduxForm(formConfig)(RewardChoose1ScenarioForm);

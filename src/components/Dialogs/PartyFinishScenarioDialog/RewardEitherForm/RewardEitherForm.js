import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Convert } from '../../../../common';
import { SelectField } from '../../../Fields';
import formConfig from './form';

class RewardEitherForm extends Component {
  render() {
    const { rewardA, rewardB, isOpen, onBack, onNext, onCancel, handleSubmit } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={onCancel}>
        <form onSubmit={handleSubmit(onNext)}>
          <ModalHeader toggle={onCancel}>Finish Scenario</ModalHeader>
          <ModalBody>
            <div className="alert alert-info">
              <h5 className="alert-heading">Scenario Reward:</h5>
              Choose to unlock one of the following:
            </div>
            <SelectField name="option" label="Scenario:" autoFocus>
              <option />
              {rewardA && (
                <option value="a">Condition A: {rewardA.map(r => Convert.scenarioRewardToText(r)).join(', ')}</option>
              )}
              {rewardB && (
                <option value="b">Condition B: {rewardB.map(r => Convert.scenarioRewardToText(r)).join(', ')}</option>
              )}
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

export default reduxForm(formConfig)(RewardEitherForm);

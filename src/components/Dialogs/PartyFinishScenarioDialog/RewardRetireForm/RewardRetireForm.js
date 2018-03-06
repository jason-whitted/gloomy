import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { SelectField } from '../../../Fields';
import formConfig from './form';

class RewardRetireForm extends Component {
  render() {
    const { note, attendees, isOpen, onBack, onNext, onCancel, handleSubmit } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={onCancel}>
        <form onSubmit={handleSubmit(onNext)}>
          <ModalHeader toggle={onCancel}>Finish Scenario</ModalHeader>
          <ModalBody>
            <div className="alert alert-info">
              <h5 className="alert-heading">Scenario Reward:</h5>
              {note}
            </div>
            <SelectField name="character" label="Character:" autoFocus>
              <option />
              {attendees.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
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

export default reduxForm(formConfig)(RewardRetireForm);

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { TextField } from '../../../Fields';
import formConfig from './form';

class LevelForm extends Component {
  render() {
    const { isOpen, attendees, onBack, onNext, onCancel, handleSubmit } = this.props;

    const avgLevel = attendees.reduce((t, c) => t + c.level, 0) / attendees.length;
    const suggestedLevel = Math.ceil(avgLevel / 2);
    const placeholder = `Suggested Level: ${suggestedLevel}`;

    return (
      <Modal isOpen={isOpen} toggle={onCancel}>
        <form onSubmit={handleSubmit(onNext)}>
          <ModalHeader toggle={onCancel}>Finish Scenario</ModalHeader>
          <ModalBody>
            <TextField name="level" label="Level:" type="number" min="0" max="7" autoFocus placeholder={placeholder} />
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

export default reduxForm(formConfig)(LevelForm);

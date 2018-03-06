import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class RequireAttendeeForm extends Component {
  render() {
    const { isOpen, onBack, onCancel } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={onCancel}>
        <ModalHeader toggle={onCancel}>Finish Scenario</ModalHeader>
        <ModalBody>
          <div className="alert alert-danger">
            <h5 className="alert-header">What? Did the scenario complete itself?</h5>
            <hr />
            At least one character must attend the scenario in order to complete it.
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="success" autoFocus onClick={onBack}>
            <i className="fa fa-fw fa-caret-left" /> Back
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default RequireAttendeeForm;

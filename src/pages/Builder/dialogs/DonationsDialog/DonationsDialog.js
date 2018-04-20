import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { TextField } from '../../../../components/Fields';
import formConfig from './form';

class DonationsDialog extends Component {
  componentWillMount() {
    const { build } = this.props;
    this.props.initialize({ donations: build.donations });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    this.props.onSubmit(build => ({
      ...build,
      donations: parseInt(values.donations, 10) || 0,
    }));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Sanctuary Donations</ModalHeader>
          <ModalBody>
            <Alert color="info">Enter the number of times the sanctuary received donations.</Alert>
            <TextField name="donations" label="Sanctuary Donations:" type="number" min="0" max="100" autoFocus />
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default reduxForm(formConfig)(DonationsDialog);

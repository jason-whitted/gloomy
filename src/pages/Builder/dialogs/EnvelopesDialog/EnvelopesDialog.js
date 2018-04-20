import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Alert, Badge, ButtonGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Envelope from './Envelope';
import formConfig from './form';

class EnvelopesDialog extends Component {
  componentWillMount() {
    const { build } = this.props;
    this.props.initialize({
      A: build.envelopes.A ? 'Complete' : '',
      B: build.envelopes.B ? 'Complete' : '',
      X: build.envelopes.X ? 'Complete' : '',
    });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    this.props.onSubmit(build => ({
      ...build,
      envelopes: {
        A: !!values.A || undefined,
        B: !!values.B || undefined,
        X: !!values.X || undefined,
      },
    }));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Envelopes</ModalHeader>
          <ModalBody>
            <Alert color="info">
              Mark the status of the envelopes.
              <ul className="mb-0">
                <li>
                  <Badge color="info">Complete</Badge>
                </li>
                <li>
                  <Badge color="danger">Incomplete</Badge>
                </li>
              </ul>
            </Alert>
            <ButtonGroup className="flex-wrap">
              <Envelope envelope="A" />
              <Envelope envelope="B" />
              <Envelope envelope="X" />
            </ButtonGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default reduxForm(formConfig)(EnvelopesDialog);

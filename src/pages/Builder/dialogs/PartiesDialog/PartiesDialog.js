import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { TextField } from '../../../../components/Fields';
import connectConfig from './connect';
import formConfig from './form';

class PartiesDialog extends Component {
  componentWillMount() {
    const { build: { parties } } = this.props;
    this.props.initialize({
      partyCount: parties.length || 1,
      parties,
    });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    const count = parseInt(values.partyCount, 10) || 1;
    const parties = (values.parties || []).slice(0, count);

    this.props.onSubmit(build => ({
      ...build,
      parties,
    }));
  };

  render() {
    const { formValues, handleSubmit } = this.props;

    const partyCount = parseInt(formValues.partyCount, 10) || 1;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Parties</ModalHeader>
          <ModalBody>
            <TextField name="partyCount" label="# of Parties:" type="number" min="1" autoFocus />
            {Array(partyCount)
              .fill(0)
              .map((_, i) => <TextField key={i} name={`parties[${i}]`} label="Party Name:" required />)}
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default compose(connect(...connectConfig), reduxForm(formConfig))(PartiesDialog);

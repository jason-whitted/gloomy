import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { SCENARIO_STATUS } from '../../../../constants';
import { SelectField } from '../../../Fields';
import formConfig from './form';

class ResultForm extends Component {
  render() {
    const { isOpen, onNext, onCancel, handleSubmit } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={onCancel}>
        <form onSubmit={handleSubmit(onNext)}>
          <ModalHeader toggle={onCancel}>Finish Scenario</ModalHeader>
          <ModalBody>
            <SelectField name="result" label="Result:" autoFocus>
              <option />
              <option value={SCENARIO_STATUS.COMPLETE}>Completed</option>
              <option value={SCENARIO_STATUS.AVAILABLE}>Failed</option>
            </SelectField>
          </ModalBody>
          <ModalFooter>
            <Button color="success">
              Next <i className="fa fa-fw fa-caret-right" />
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default reduxForm(formConfig)(ResultForm);

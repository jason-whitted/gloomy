import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { SelectField, TextField } from '../../../Fields';
import { ClassIcon } from '../../../Icons';
import getConnectConfig from './connect';
import getFormConfig from './form';

export default character => {
  class CharacterForm extends Component {
    render() {
      const { isOpen, attended, completed, onNext, onBack, onCancel, handleSubmit } = this.props;
      return (
        <Modal isOpen={isOpen} toggle={onCancel}>
          <form className="CharacterForm" onSubmit={handleSubmit(onNext)}>
            <ModalHeader toggle={onCancel}>Finish Scenario</ModalHeader>
            <ModalBody>
              <table className="table table-sm border">
                <tbody>
                  <tr>
                    <td className="align-middle p-2" style={{ backgroundColor: character.class.color }}>
                      <ClassIcon class={character.class} />
                    </td>
                    <td className="bg-light w-100 p-2">{character.name}</td>
                  </tr>
                </tbody>
              </table>
              <SelectField name="attended" label="Did this character attend?" autoFocus>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </SelectField>
              {attended === 'yes' && (
                <Fragment>
                  <TextField name="xp" label="Individual XP earned:" type="number" min="0" max="500" />
                  <TextField name="gold" label="Money tokens looted:" type="number" min="0" max="100" />
                  {completed && (
                    <TextField name="checks" label="Battle goal checkmarks:" type="number" min="0" max="2" />
                  )}
                </Fragment>
              )}
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

  const connectConfig = getConnectConfig(character);
  const formConfig = getFormConfig(character);
  return compose(connect(...connectConfig), reduxForm(formConfig))(CharacterForm);
};

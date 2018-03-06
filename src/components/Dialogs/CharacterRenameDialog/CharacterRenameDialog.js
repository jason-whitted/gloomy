import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import formConfig from './form';

class CharacterRenameDialog extends Component {
  componentWillMount() {
    const { name } = this.props.character;
    this.props.initialize({ name });
  }

  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const { name } = values;
    if (name !== character.name) {
      const action = ACTION_CONFIG[ACTION.CHARACTER_RENAME].create({
        character: character.id,
        from: character.name,
        to: name,
      });
      appendCampaignAction({ action });
    }
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Rename Character</ModalHeader>
          <ModalBody>
            <TextField name="name" label="Name:" autoFocus />
          </ModalBody>
          <ModalFooter>
            <Button color="success" disabled={submitting}>
              Submit
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

CharacterRenameDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterRenameDialog.defaultProps = {};

export default reduxForm(formConfig)(CharacterRenameDialog);

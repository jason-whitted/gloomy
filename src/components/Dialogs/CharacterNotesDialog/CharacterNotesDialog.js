import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextAreaField } from '../../Fields';
import formConfig from './form';

class CharacterRenameDialog extends Component {
  componentWillMount() {
    const { notes } = this.props.character;
    this.props.initialize({ notes });
  }

  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const { notes } = values;
    if (notes !== character.notes) {
      const action = ACTION_CONFIG[ACTION.CHARACTER_NOTES].create({
        character: character.id,
        notes,
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
          <ModalHeader toggle={this.cancel}>Character Notes</ModalHeader>
          <ModalBody>
            <TextAreaField name="notes" label="Notes:" autoFocus />
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

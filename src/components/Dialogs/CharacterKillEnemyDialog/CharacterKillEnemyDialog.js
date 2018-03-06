import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG, ENEMY_CONFIG } from '../../../constants';
import { SelectField, TextField } from '../../Fields';
import formConfig from './form';
import getEnemies from './getEnemies';

class CharacterKillEnemyDialog extends Component {
  state = { enemies: [] };

  componentWillMount() {
    const { character } = this.props;

    this.setState({
      enemies: getEnemies(character.quest.id)
        .map(id => ENEMY_CONFIG[id])
        .filter(e => !e.boss),
    });
  }

  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_KILL_ENEMY].create({
      character: character.id,
      enemy: parseInt(values.enemy, 10),
      count: parseInt(values.count, 10),
      elite: values.elite === 'elite',
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { handleSubmit, submitting } = this.props;
    const { enemies } = this.state;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Kill Enemy</ModalHeader>
          <ModalBody>
            <SelectField name="enemy" label="Enemy:" autoFocus>
              <option />
              {enemies.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </SelectField>
            <SelectField name="elite" label="Type:">
              <option value="normal">Normal</option>
              <option value="elite">Elite</option>
            </SelectField>
            <TextField name="count" label="How Many?" type="number" min="1" max="10" />
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

CharacterKillEnemyDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterKillEnemyDialog.defaultProps = {};

export default reduxForm(formConfig)(CharacterKillEnemyDialog);

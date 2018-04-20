import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { TextField } from '../../../../components/Fields';
import connectConfig from './connect';
import formConfig from './form';

class PlayersDialog extends Component {
  componentWillMount() {
    const { build: { players } } = this.props;
    this.props.initialize({
      playerCount: players.length || 1,
      players,
    });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    const count = parseInt(values.playerCount, 10) || 1;
    const players = (values.players || []).slice(0, count);

    this.props.onSubmit(build => ({
      ...build,
      players,
    }));
  };

  render() {
    const { formValues, handleSubmit } = this.props;

    const playerCount = parseInt(formValues.playerCount, 10) || 1;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Players</ModalHeader>
          <ModalBody>
            <TextField name="playerCount" label="# of Players:" type="number" min="1" autoFocus />
            {Array(playerCount)
              .fill(0)
              .map((_, i) => <TextField key={i} name={`players[${i}]`} label="Player Name:" required />)}
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default compose(connect(...connectConfig), reduxForm(formConfig))(PlayersDialog);

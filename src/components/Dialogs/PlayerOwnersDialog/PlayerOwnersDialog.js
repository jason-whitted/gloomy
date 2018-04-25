import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import { Player } from '../../Common';
import connectConfig from './connect';
import formConfig from './form';

class PlayerOwnersDialog extends Component {
  state = { suggestions: [] };

  componentWillMount() {
    const { campaign, player } = this.props;
    const suggestions = Object.keys(
      campaign.history.reduce(
        (obj, hist) => ({
          ...obj,
          [hist.by]: true,
        }),
        {},
      ),
    ).sort();
    this.setState({ suggestions });

    const owners = player.owners || [];
    this.props.initialize({
      ownerCount: owners.length,
      owners,
    });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    const { appendCampaignAction, player } = this.props;
    const { owners } = values;
    const action = ACTION_CONFIG[ACTION.PLAYER_OWNERS].create({
      player: player.id,
      owners: owners.length ? owners : undefined,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  render() {
    const { player, formValues, handleSubmit } = this.props;
    const { suggestions } = this.state;
    const ownerCount = parseInt(formValues.ownerCount, 10) || 0;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Owners</ModalHeader>
          <ModalBody>
            <Alert color="info">
              Specify the Github usernames for the owner(s) of{' '}
              <span className="d-inline-block">
                <Player player={player} />
              </span>
              <hr className="m-0" />
              <div className="small">Suggestions: {suggestions.join(', ')}</div>
            </Alert>
            {!ownerCount && (
              <Alert color="warning">
                No owners are specified. All contributors can update this player's characters.
              </Alert>
            )}
            <TextField name="ownerCount" label="# of Owners:" type="number" min="1" autoFocus />
            {Array(ownerCount)
              .fill(0)
              .map((_, i) => <TextField key={i} name={`owners[${i}]`} label="Owner:" required />)}
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

PlayerOwnersDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  formValues: PropTypes.object.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default compose(connect(...connectConfig), reduxForm(formConfig))(PlayerOwnersDialog);

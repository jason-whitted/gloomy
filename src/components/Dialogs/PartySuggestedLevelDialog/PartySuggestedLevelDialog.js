import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Alert, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { Character } from '../../Common';
import { CheckboxField } from '../../Fields';
import connectConfig from './connect';
import formConfig from './form';

class PartySuggestedLevelDialog extends Component {
  state = { characters: [] };

  componentDidMount() {
    const { initialize, party } = this.props;
    const characters = party.characters.filter(c => !c.hiatus);
    this.setState({ characters });
    initialize({
      characters: characters.map(v => true),
    });
  }

  cancel = error => this.props.onClose();

  render() {
    const { formValues } = this.props;
    const { characters } = this.state;

    const attendees = characters.filter((c, i) => formValues.characters[i]);
    const avgLevel = attendees.reduce((t, c) => t + c.level, 0) / attendees.length;
    const suggestedLevel = Math.round(avgLevel / 2);

    return (
      <Modal isOpen toggle={this.cancel}>
        <ModalHeader toggle={this.cancel}>Suggested Level</ModalHeader>
        <ModalBody>
          <Alert color="info">
            {!attendees.length && <div>Is the scenario going to complete itself?</div>}
            {!!attendees.length && (
              <div>
                <div className="row">
                  <div className="col-5">Average Level:</div>
                  <div className="col-7">{avgLevel.toFixed(1)}</div>
                </div>
                <div className="row">
                  <div className="col-5">Suggested Level:</div>
                  <div className="col-7">{suggestedLevel}</div>
                </div>
              </div>
            )}
          </Alert>
          <h5>Attendees:</h5>
          {characters.map((c, i) => (
            <CheckboxField
              key={c.id}
              name={`characters[${i}]`}
              label={<Character character={c} noLink noLevelUp level class />}
            />
          ))}
        </ModalBody>
      </Modal>
    );
  }
}

PartySuggestedLevelDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  party: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  formValues: PropTypes.object.isRequired,
};

PartySuggestedLevelDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(PartySuggestedLevelDialog);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { ClassIcon } from '../../Icons';
import { RichSelectField, SelectField, TextField } from '../../Fields';
import connectConfig from './connect';
import formConfig from './form';

class CampaignCreateCharacterDialog extends Component {
  componentWillMount() {
    const { campaign, change } = this.props;
    const partiesInGloomhaven = campaign.parties
      .filter(p => p.location.gloomhaven || !p.location.scenario.id)
      .map(p => p.id);
    change('partiesInGloomhaven', partiesInGloomhaven);
  }

  submit = values => {
    const { appendCampaignAction } = this.props;
    const { player, party, name, level, class: $class, quest } = values;
    const action = ACTION_CONFIG[ACTION.CHARACTER_CREATE].create({
      player,
      party,
      name,
      level,
      class: $class,
      quest,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { campaign, availableQuests, handleSubmit, submitting } = this.props;
    const { classes, parties, players, prosperityLevel } = campaign;

    const Class = ({ option: $class }) => (
      <div>
        <ClassIcon class={$class.id} /> {$class.race.name} {$class.name}
      </div>
    );

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Create Character</ModalHeader>
          <ModalBody>
            <SelectField name="player" label="Player:" autoFocus>
              <option value="" />
              {players.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </SelectField>
            <SelectField name="party" label="Party:">
              <option value="" />
              {parties.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </SelectField>
            <RichSelectField name="class" label="Class:" options={classes} selectValue={c => c.id} render={Class} />
            <TextField name="name" label="Name:" />
            <SelectField name="level" label="Level:">
              <option value="" />
              {Array(prosperityLevel)
                .fill(0)
                .map((_, i) => i + 1)
                .map(level => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
            </SelectField>
            <SelectField name="quest" label="Personal Quest:">
              <option value="" />
              {availableQuests.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </SelectField>
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

CampaignCreateCharacterDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  availableQuests: PropTypes.array.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignCreateCharacterDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(CampaignCreateCharacterDialog);

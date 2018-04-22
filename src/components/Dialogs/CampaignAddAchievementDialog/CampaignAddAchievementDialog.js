import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG, GLOBAL_ACHIEVEMENT_CONFIG } from '../../../constants';
import { GlobalAchievement } from '../../Common';
import { TextField } from '../../Fields';
import connectConfig from './connect';
import formConfig from './form';

class CampaignAddAchievementDialog extends Component {
  state = { achievements: [] };

  componentWillMount() {
    this.setState({ achievements: Object.values(GLOBAL_ACHIEVEMENT_CONFIG) });
  }

  submit = values => {
    const { appendCampaignAction } = this.props;
    const achievement = parseInt(values.achievement, 10);
    const action = ACTION_CONFIG[ACTION.CAMPAIGN_ADD_ACHIEVEMENT].create({
      achievement,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  search = event => {
    const { change } = this.props;
    const { achievements } = this.state;
    const value = event.target.value;
    const filtered = achievements.filter(achievement => achievement.name.toLowerCase().includes(value.toLowerCase()));
    change('achievement', filtered.length === 1 ? filtered[0].id : 0);
  };

  render() {
    const { formValues, handleSubmit, submitting } = this.props;
    const achievement = this.state.achievements.find(i => i.id === formValues.achievement);

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Add Global Achievement</ModalHeader>
          <ModalBody>
            <TextField
              name="search"
              label="Global Achievement:"
              autoFocus
              onChange={this.search}
              placeholder="Achievement name"
            />
            {achievement && <GlobalAchievement achievement={achievement} />}
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

CampaignAddAchievementDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  formValues: PropTypes.object.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignAddAchievementDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(CampaignAddAchievementDialog);

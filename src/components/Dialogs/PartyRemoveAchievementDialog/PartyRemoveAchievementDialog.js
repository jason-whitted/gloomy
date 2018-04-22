import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION, ACTION_CONFIG } from '../../../constants';

class PartyRemoveAchievementDialog extends Component {
  componentDidMount() {
    const { appendCampaignAction, achievement, party } = this.props;
    const action = ACTION_CONFIG[ACTION.PARTY_ADD_ACHIEVEMENT].create({
      party: party.id,
      achievement: achievement.id,
      remove: true,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  }

  render() {
    return <div>Removing party achievement...</div>;
  }
}

PartyRemoveAchievementDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  party: PropTypes.object.isRequired,
  achievement: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

PartyRemoveAchievementDialog.defaultProps = {};

export default PartyRemoveAchievementDialog;

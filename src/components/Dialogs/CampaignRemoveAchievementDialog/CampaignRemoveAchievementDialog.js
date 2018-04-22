import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION, ACTION_CONFIG } from '../../../constants';

class CampaignRemoveAchievementDialog extends Component {
  componentDidMount() {
    const { appendCampaignAction, achievement } = this.props;
    const action = ACTION_CONFIG[ACTION.CAMPAIGN_ADD_ACHIEVEMENT].create({
      achievement: achievement.id,
      remove: true,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  }

  render() {
    return <div>Removing global achievement...</div>;
  }
}

CampaignRemoveAchievementDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  achievement: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CampaignRemoveAchievementDialog.defaultProps = {};

export default CampaignRemoveAchievementDialog;

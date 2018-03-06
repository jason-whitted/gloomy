import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION, ACTION_CONFIG } from '../../../constants';

class CharacterLevelUpDialog extends Component {
  componentDidMount() {
    const { appendCampaignAction, character } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_LEVEL_UP].create({
      character: character.id,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  }

  render() {
    return <div>Leveling up...</div>;
  }
}

CharacterLevelUpDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CharacterLevelUpDialog.defaultProps = {};

export default CharacterLevelUpDialog;

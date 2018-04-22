import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION, ACTION_CONFIG } from '../../../constants';

class CharacterAddPerkDialog extends Component {
  componentDidMount() {
    const { appendCampaignAction, character, perk } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_ADD_PERK].create({
      character: character.id,
      perk: perk.id,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  }

  render() {
    return <div>Add perk...</div>;
  }
}

CharacterAddPerkDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  perk: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CharacterAddPerkDialog.defaultProps = {};

export default CharacterAddPerkDialog;

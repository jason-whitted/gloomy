import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION, ACTION_CONFIG } from '../../../constants';

class CharacterRetireDialog extends Component {
  componentDidMount() {
    const { appendCampaignAction, character } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_RETIRE].create({
      character: character.id,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  }

  render() {
    return <div>Retiring...</div>;
  }
}

CharacterRetireDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CharacterRetireDialog.defaultProps = {};

export default CharacterRetireDialog;

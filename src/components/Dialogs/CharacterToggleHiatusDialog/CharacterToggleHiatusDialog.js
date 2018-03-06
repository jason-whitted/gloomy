import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION, ACTION_CONFIG } from '../../../constants';

class CharacterToggleHiatusDialog extends Component {
  componentDidMount() {
    const { appendCampaignAction, character } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_HIATUS].create({
      character: character.id,
      hiatus: !character.hiatus,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  }

  render() {
    const { character } = this.props;

    return <div>{character.hiatus ? 'Going on Hiautus...' : 'Returning from Hiatus...'}</div>;
  }
}

CharacterToggleHiatusDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CharacterToggleHiatusDialog.defaultProps = {};

export default CharacterToggleHiatusDialog;

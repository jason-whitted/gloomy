import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ACTION, ACTION_CONFIG } from '../../../constants';

class CharacterSellAllItemsDialog extends Component {
  componentDidMount() {
    const { appendCampaignAction, character } = this.props;
    const action = ACTION_CONFIG[ACTION.CHARACTER_SELL_ALL_ITEMS].create({
      character: character.id,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  }

  render() {
    return <div>Selling all items...</div>;
  }
}

CharacterSellAllItemsDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

CharacterSellAllItemsDialog.defaultProps = {};

export default CharacterSellAllItemsDialog;

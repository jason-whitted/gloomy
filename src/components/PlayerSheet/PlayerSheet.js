import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CampaignCreateCharacterDialog, PlayerRenameDialog } from '../Dialogs';
import * as Flyout from './Flyouts';
import { PlayerIcon } from '../Icons';
import { CharacterList } from '../CharacterList';
import './styles.css';

class PlayerSheet extends Component {
  state = { Dialog: null };

  show = Dialog => event => {
    document.body.click(); // close down any popovers
    this.setState({ Dialog });
  };

  hide = () => this.setState({ Dialog: null });

  render() {
    const { player } = this.props;
    const { Dialog } = this.state;

    return (
      <div className="PlayerSheet row">
        {Dialog && <Dialog {...this.props} onClose={this.hide} />}
        <div className="col-12">
          <table className="table table-sm table-bordered table-card">
            <thead>
              <tr>
                <th className="p-2">
                  <PlayerIcon />
                </th>
                <th className="bg-light p-2 w-100 w-50">
                  <Flyout.PlayerNameFlyout player={player} onClick={this.show(PlayerRenameDialog)} />
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="col-12 col-md-6">
          <table className="table table-sm table-card">
            <tbody>
              <tr>
                <td>
                  <Flyout.PlayerCharactersFlyout onClick={this.show(CampaignCreateCharacterDialog)} />:
                </td>
                <td className="w-100">
                  <CharacterList characters={player.characters} />
                </td>
              </tr>
              {!!player.retired.length && (
                <tr>
                  <td>Retired:</td>
                  <td>
                    <CharacterList characters={player.retired} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

PlayerSheet.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
};

PlayerSheet.defaultProps = {};

export default PlayerSheet;

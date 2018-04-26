import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PERMISSION_RULE } from '../../constants';
import * as Dialog from '../Dialogs';
import * as Flyout from './Flyouts';
import { PlayerIcon } from '../Icons';
import { CharacterList } from '../CharacterList';
import { Visibility } from '../Visibility';
import './styles.css';

class PlayerSheet extends Component {
  state = { dialog: null };

  show = dialog => event => {
    document.body.click(); // close down any popovers
    this.setState({ dialog });
  };

  hide = () => this.setState({ dialog: null });

  render() {
    const { campaign, player } = this.props;
    const { dialog: DialogComponent } = this.state;

    const perm = {
      notes: campaign.permissions[PERMISSION_RULE.NON_OWNER_PLAYER_NOTES],
    };

    return (
      <div className="PlayerSheet row">
        {DialogComponent && <DialogComponent {...this.props} onClose={this.hide} />}
        <div className="col-12">
          <table className="table table-sm table-bordered table-card">
            <thead>
              <tr>
                <th className="p-2">
                  <PlayerIcon />
                </th>
                <th className="bg-light p-2 w-100 w-50">
                  <Flyout.PlayerNameFlyout
                    campaign={campaign}
                    player={player}
                    onRenameClick={this.show(Dialog.PlayerRenameDialog)}
                    onOwnersClick={this.show(Dialog.PlayerOwnersDialog)}
                  />
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
                  <Flyout.PlayerCharactersFlyout onClick={this.show(Dialog.CampaignCreateCharacterDialog)} />:
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
        <div className="col-12 col-md-6">
          <table className="table table-sm table-card">
            <tbody>
              <tr>
                <td>
                  <Flyout.PlayerNotesFlyout
                    readonly={player.restricted}
                    player={player}
                    onClick={this.show(Dialog.PlayerNotesDialog)}
                  />:
                </td>
                <td className="w-100">
                  <Visibility restricted={player.restricted} visibility={perm.notes}>
                    <small>{player.notes}</small>
                  </Visibility>
                </td>
              </tr>
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

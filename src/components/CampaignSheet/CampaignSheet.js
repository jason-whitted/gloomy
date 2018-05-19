import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Convert } from '../../common';
import * as Dialog from '../Dialogs';
import { CampaignIcon } from '../Icons';
import * as Flyout from './Flyouts';
import { TabbedCharacterList } from '../TabbedCharacterList';
import { TabbedScenarioList } from '../TabbedScenarioList';
import { GlobalAchievementList } from '../GlobalAchievementList';
import { PartyList } from '../PartyList';
import { PlayerList } from '../PlayerList';
import { EnvelopeList } from '../EnvelopeList';
import './styles.css';

class CampaignSheet extends Component {
  state = { dialog: null };

  show = dialog => event => {
    document.body.click(); // close down any popovers
    this.setState({ dialog });
  };

  hide = () => this.setState({ dialog: null });

  render() {
    const { campaign } = this.props;
    const { dialog: DialogComponent } = this.state;

    const showCharacters = !!campaign.players.length && !!campaign.parties.length;
    const showParties = !!campaign.players.length;

    return (
      <div className="CampaignSheet row">
        {DialogComponent && <DialogComponent {...this.props} onClose={this.hide} />}
        <div className="col-12">
          <table className="table table-sm table-bordered table-card">
            <thead>
              <tr>
                <th className="p-2">
                  <CampaignIcon />
                </th>
                <th className="bg-light p-2 w-100 w-50">
                  <Flyout.CampaignNameFlyout
                    campaign={campaign}
                    onRenameClick={this.show(Dialog.CampaignRenameDialog)}
                    onContributorsClick={this.show(Dialog.CampaignContributorsDialog)}
                    onPermissionsClick={this.show(Dialog.CampaignPermissionsDialog)}
                  />
                  <div className="float-sm-right small">
                    <Flyout.CampaignIDFlyout campaign={campaign} />
                  </div>
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
                  <Flyout.CampaignProsperityFlyout
                    campaign={campaign}
                    onClick={this.show(Dialog.CampaignAddProsperityDialog)}
                  />:
                </td>
                <td className="w-100">
                  {campaign.prosperity} (Level {Convert.prosperityToProsperityLevel(campaign.prosperity)})
                </td>
              </tr>
              <tr>
                <td>Donations:</td>
                <td>{campaign.donations}</td>
              </tr>
              <tr>
                <td>
                  <Flyout.CampaignAchievementsFlyout
                    campaign={campaign}
                    onClick={this.show(Dialog.CampaignAddAchievementDialog)}
                  />:
                </td>
                <td>
                  <GlobalAchievementList achievements={campaign.achievements} onClick={this.show} />
                </td>
              </tr>
              <tr>
                <td>Envelopes:</td>
                <td>
                  <EnvelopeList envelopes={campaign.envelopes} />
                </td>
              </tr>
              <tr>
                <td>Scenarios:</td>
                <td>
                  <TabbedScenarioList scenarios={campaign.scenarios} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6">
          <table className="table table-sm table-card">
            <tbody>
              {showCharacters && (
                <tr>
                  <td>
                    <Flyout.CampaignCharactersFlyout
                      campaign={campaign}
                      onClick={this.show(Dialog.CampaignCreateCharacterDialog)}
                    />:
                  </td>
                  <td className="w-100">
                    <TabbedCharacterList characters={campaign.characters} />
                  </td>
                </tr>
              )}
              {showParties && (
                <tr>
                  <td>
                    <Flyout.CampaignPartiesFlyout
                      campaign={campaign}
                      onClick={this.show(Dialog.CampaignCreatePartyDialog)}
                    />:
                  </td>
                  <td className="w-100">
                    <PartyList parties={campaign.parties} />
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <Flyout.CampaignPlayersFlyout
                    campaign={campaign}
                    onClick={this.show(Dialog.CampaignCreatePlayerDialog)}
                  />:
                </td>
                <td className="w-100">
                  <PlayerList players={campaign.players} />
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.CampaignNotesFlyout onClick={this.show(Dialog.CampaignNotesDialog)} />:
                </td>
                <td>
                  <small>{campaign.notes}</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

CampaignSheet.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  renameCampaign: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
};

CampaignSheet.defaultProps = {};

export default CampaignSheet;

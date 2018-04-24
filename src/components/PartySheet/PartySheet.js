import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as Dialog from '../Dialogs';
import * as Flyout from './Flyouts';

import { Polarity } from '../Common';
import { PartyIcon } from '../Icons';
import { TabbedCharacterList } from '../TabbedCharacterList';
import { PartyAchievementList } from '../PartyAchievementList';
import './styles.css';

class PartySheet extends Component {
  state = { dialog: null };

  show = dialog => event => {
    document.body.click(); // close down any popovers
    this.setState({ dialog });
  };

  hide = () => this.setState({ dialog: null });

  render() {
    const { campaign, party } = this.props;
    const { dialog: DialogComponent } = this.state;
    const { location, reputation, shopPriceModifier } = party;
    const { casual, gloomhaven } = location;

    const shopPriceModiferClassName = classNames('pl-2', {
      'text-warning': shopPriceModifier > 0,
      'text-success': shopPriceModifier < 0,
    });

    return (
      <div className="PartySheet row">
        {DialogComponent && <DialogComponent {...this.props} onClose={this.hide} />}
        <div className="col-12">
          <table className="table table-sm table-bordered table-card">
            <thead>
              <tr>
                <th className="p-2">
                  <PartyIcon />
                </th>
                <th className="bg-light p-2 w-100 w-50">
                  <Flyout.PartyNameFlyout party={party} onClick={this.show(Dialog.PartyRenameDialog)} />
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
                  <Flyout.PartyLocationFlyout
                    campaign={campaign}
                    party={party}
                    onTravelToGloomhavenClick={this.show(Dialog.PartyTravelToGloomhavenDialog)}
                    onTravelToCampaignScenarioClick={this.show(Dialog.PartyTravelToCampaignScenarioDialog)}
                    onTravelToCasualScenarioClick={this.show(Dialog.PartyTravelToCasualScenarioDialog)}
                    onUnlockCityEventClick={this.show(Dialog.CampaignUnlockCityEventDialog)}
                    onUnlockRoadEventClick={this.show(Dialog.CampaignUnlockRoadEventDialog)}
                    onUnlockScenarioClick={this.show(Dialog.CampaignUnlockScenarioDialog)}
                  />:
                </td>
                <td>
                  <Flyout.PartyScenarioFlyout
                    campaign={campaign}
                    party={party}
                    onSuggestedLevelClick={this.show(Dialog.PartySuggestedLevelDialog)}
                    onFinishScenarioClick={this.show(Dialog.PartyFinishScenarioDialog)}
                  />
                  {!gloomhaven && casual && ' (casual)'}
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.PartyReputationFlyout party={party} onClick={this.show(Dialog.PartyAddReputationDialog)} />:
                </td>
                <td className="w-100">
                  {reputation}{' '}
                  <span className={shopPriceModiferClassName}>
                    (<Polarity number={shopPriceModifier} /> gold)
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.PartyAchievementsFlyout party={party} onClick={this.show(Dialog.PartyAddAchievementDialog)} />:
                </td>
                <td>
                  <PartyAchievementList achievements={party.achievements} onClick={this.show} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6">
          <table className="table table-sm table-card">
            <tbody>
              <tr>
                <td>
                  <Flyout.PartyCharactersFlyout
                    party={party}
                    onClick={this.show(Dialog.CampaignCreateCharacterDialog)}
                  />:
                </td>
                <td className="w-100">
                  <TabbedCharacterList characters={campaign.characters.filter(p => p.party.id === party.id)} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

PartySheet.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  party: PropTypes.object.isRequired,
};

PartySheet.defaultProps = {};

export default PartySheet;

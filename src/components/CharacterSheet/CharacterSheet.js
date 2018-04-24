import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Progress } from 'reactstrap';

import * as Dialog from '../Dialogs';
import * as Flyout from './Flyouts';
import * as PartyFlyout from '../PartySheet/Flyouts';

import { ClassIcon, StarIcon } from '../Icons';
import { CharacterList } from '../CharacterList';
import Checkmarks from './Checkmarks';
import ItemList from './ItemList';
import PerkList from './PerkList';
import './styles.css';

class CharacterSheet extends Component {
  state = { dialog: null };

  show = dialog => event => {
    document.body.click(); // close down any popovers
    this.setState({ dialog });
  };

  hide = () => this.setState({ dialog: null });

  redirect = url => event => this.props.history.push(url);

  render() {
    const { campaign, character } = this.props;
    const { dialog: CurrentDialog } = this.state;

    const canDonate = character.donate && character.gold >= 10 && character.party.location.gloomhaven;
    const { casual, gloomhaven } = character.party.location;

    const readonly = character.retired || character.hiatus;
    const canRetire = character.retirement.complete && !character.retired;

    const peers = character.party.characters.filter(c => c.id !== character.id && !c.hiatus);

    return (
      <div className="CharacterSheet row">
        {CurrentDialog && <CurrentDialog {...this.props} party={character.party} onClose={this.hide} />}
        <div className="col-12 col-md-6">
          <table className="table table-sm table-card">
            <thead className="border">
              <tr>
                <th className="border-left p-2 text-center" style={{ backgroundColor: character.class.color }}>
                  <ClassIcon class={character.class} />
                </th>
                <th className="bg-light border-right p-2 w-100">
                  {canRetire && <StarIcon title="Character can retire!" />}
                  <Flyout.CharacterNameFlyout
                    readonly={readonly}
                    character={character}
                    onRenameClick={this.show(Dialog.CharacterRenameDialog)}
                    onToggleHiatusClick={this.show(Dialog.CharacterToggleHiatusDialog)}
                    onRetireClick={this.show(Dialog.CharacterRetireDialog)}
                  />{' '}
                  <div className="d-inline-block">
                    - {character.race.name} {character.class.name}
                  </div>
                  <br />
                  <Flyout.CharacterPartyFlyout
                    readonly={readonly}
                    character={character}
                    onClick={this.redirect(character.party.url)}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {readonly && 'Location'}
                  {!readonly && (
                    <PartyFlyout.PartyLocationFlyout
                      readonly={readonly}
                      mode="character"
                      campaign={campaign}
                      party={character.party}
                      character={character}
                      onTravelToGloomhavenClick={this.show(Dialog.PartyTravelToGloomhavenDialog)}
                      onTravelToCampaignScenarioClick={this.show(Dialog.PartyTravelToCampaignScenarioDialog)}
                      onTravelToCasualScenarioClick={this.show(Dialog.PartyTravelToCasualScenarioDialog)}
                      onUnlockCityEventClick={this.show(Dialog.CampaignUnlockCityEventDialog)}
                      onUnlockRoadEventClick={this.show(Dialog.CampaignUnlockRoadEventDialog)}
                      onUnlockScenarioClick={this.show(Dialog.CampaignUnlockScenarioDialog)}
                      onFinishSoloScenarioClick={this.show(Dialog.PartyFinishSoloScenarioDialog)}
                    />
                  )}:
                </td>
                <td>
                  <PartyFlyout.PartyScenarioFlyout
                    readonly={readonly}
                    mode="character"
                    campaign={campaign}
                    party={character.party}
                    onSuggestedLevelClick={this.show(Dialog.PartySuggestedLevelDialog)}
                    onFinishScenarioClick={this.show(Dialog.PartyFinishScenarioDialog)}
                  />
                  {!gloomhaven && casual && ' (casual)'}
                </td>
              </tr>
              <tr>
                <td>Player:</td>
                <td>
                  <Flyout.CharacterPlayerFlyout character={character} onClick={this.redirect(character.player.url)} />
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.CharacterLevelFlyout
                    readonly={readonly}
                    character={character}
                    onClick={this.show(Dialog.CharacterLevelUpDialog)}
                  />:
                </td>
                <td>
                  {character.levelUp && !readonly && <StarIcon title="Level up available!" />}
                  {character.level}
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.CharacterXPFlyout
                    readonly={readonly}
                    character={character}
                    onClick={this.show(Dialog.CharacterAddXPDialog)}
                  />:
                </td>
                <td>{character.xp}</td>
              </tr>
              <tr>
                <td>
                  <Flyout.CharacterGoldFlyout
                    readonly={readonly}
                    character={character}
                    onAddClick={this.show(Dialog.CharacterAddGoldDialog)}
                    onDonateClick={this.show(Dialog.CharacterSanctuaryDonationDialog)}
                  />:
                </td>
                <td>
                  {canDonate && <StarIcon title="Sanctuary donation available" />}
                  {character.gold}
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.CharacterItemsFlyout
                    readonly={readonly}
                    character={character}
                    onBuyClick={this.show(Dialog.CharacterBuyItemDialog)}
                    onReceiveClick={this.show(Dialog.CharacterReceiveItemDialog)}
                    onUnlockClick={this.show(Dialog.CharacterUnlockItemDesignDialog)}
                    onSellAllClick={this.show(Dialog.CharacterSellAllItemsDialog)}
                  />:
                </td>
                <td>
                  <ItemList show={this.show} dialog={Dialog.CharacterSellItemDialog} {...this.props} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6">
          <table className="table table-sm">
            <tbody>
              <tr>
                <td>Perks: {character.perkUp && <StarIcon title="Perk available!" />}</td>
                <td className="w-100">
                  <PerkList {...this.props} onClick={this.show} />
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.CharacterChecksFlyout
                    readonly={readonly}
                    character={character}
                    onClick={this.show(Dialog.CharacterAddCheckmarkDialog)}
                  />:
                </td>
                <td>
                  <Checkmarks count={character.checks} />
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.CharacterNotesFlyout
                    readonly={readonly}
                    character={character}
                    onClick={this.show(Dialog.CharacterNotesDialog)}
                  />:
                </td>
                <td>
                  <small>{character.notes}</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6">
          <table className="table table-sm">
            <tbody>
              <tr>
                <td>Attack:</td>
                <td className="w-100">{character.attackDeck.length} cards</td>
              </tr>
              <tr>
                <td>
                  <Flyout.CharacterAbilitiesFlyout
                    readonly={readonly}
                    campaign={campaign}
                    character={character}
                    onAddAbilityClick={this.show(Dialog.CharacterAddAbilityDialog)}
                    onAddAugmentClick={this.show(Dialog.CharacterAddAugmentDialog)}
                  />:
                </td>
                <td>
                  <Flyout.CharacterAbilityDeckFlyout
                    readonly={readonly}
                    character={character}
                    onClick={this.show(Dialog.CharacterAbilityDeckDialog)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Flyout.CharacterQuestFlyout
                    readonly={readonly}
                    character={character}
                    onManualProgressClick={this.show(Dialog.CharacterManualQuestProgressDialog)}
                    onKillEnemyClick={this.show(Dialog.CharacterKillEnemyDialog)}
                    onExhaustionClick={this.show(Dialog.CharacterExhaustionDialog)}
                  />:
                </td>
                <td>
                  {character.quest.name} ({Math.round(character.retirement.progress * 100)}% complete)
                  <Progress className="bg-danger" color="success" value={character.retirement.progress} max={1} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-6">
          <table className="table table-sm">
            <tbody>
              {!!peers.length && (
                <tr>
                  <td>Peers:</td>
                  <td className="w-100">
                    <CharacterList characters={peers} />
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

CharacterSheet.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  // withRouter
  history: PropTypes.object.isRequired,
};

CharacterSheet.defaultProps = {};

export default withRouter(CharacterSheet);

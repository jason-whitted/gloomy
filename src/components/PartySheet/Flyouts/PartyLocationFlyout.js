import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { GloomhavenIcon, KeyIcon, MapIcon, ScenarioIcon } from '../../Icons';

class PartyLocationFlyout extends Component {
  gloomhavenAvailable() {
    const { campaign, party } = this.props;
    const cardsAvailable = campaign.cityEvents.top.length > 0;
    // TODO: No top cards + No bottom cards?  Just let them go
    // TODO: No top cards + bottom cards?  Move bottom cards to top
    if (!cardsAvailable) return false;
    if (!campaign.scenarios.length) return true;
    if (party.location.gloomhaven) return false;
    if (party.location.attempts) return true;
    return party.location.casual;
  }

  campaignAvailable() {
    const { campaign, party } = this.props;
    const availableScenarios = (campaign, party) =>
      campaign.scenarios.filter(s => s.available && s.id !== party.location.scenario.id);
    const scenarios = availableScenarios(campaign, party);
    if (!scenarios.length) return false;
    if (party.location.gloomhaven) return true;
    if (party.location.casual) return false;
    if (party.location.scenario.attempts) return true;
    if (party.location.scenario.available) return false;
    return true;
  }

  casualAvailable() {
    const { campaign, party } = this.props;
    if (!campaign.scenarios.length) return false;
    if (party.location.gloomhaven) return true;
    return party.location.casual;
  }

  getSoloScenario() {
    const { campaign, character } = this.props;
    if (character) {
      const search = s => s.solo && s.class === character.class;
      return campaign.scenarios.find(search);
    }
  }

  render() {
    const {
      campaign,
      party,
      character,
      mode,
      onTravelToGloomhavenClick,
      onTravelToCampaignScenarioClick,
      onTravelToCasualScenarioClick,
      onFinishSoloScenarioClick,
      onUnlockCityEventClick,
      onUnlockRoadEventClick,
      onUnlockScenarioClick,
    } = this.props;
    const gloomhavenAvailable = this.gloomhavenAvailable();
    const casualAvailable = this.casualAvailable();
    const campaignAvailable = this.campaignAvailable();

    const prefix = mode !== 'party' ? 'Party: ' : '';

    const retirees = party.characters.filter(c => c.retirement.complete);
    const mustRetire = party.location.gloomhaven && !!retirees.length;

    const soloScenario =
      party.location.gloomhaven &&
      character &&
      campaign.scenarios.find(s => s.solo && s.class === character.class.id && s.available);

    return (
      <Flyout text="Location">
        <Flyout.Head>Actions</Flyout.Head>
        <ListGroup>
          {mustRetire && (
            <div className="alert alert-warning mb-0 rounded-0">
              <div className="font-weight-bold">Unable to travel</div>
              <div>{retirees.map(c => c.name).join('/')} must be retired.</div>
            </div>
          )}
          {gloomhavenAvailable && (
            <ListGroupItem tag="button" action onClick={onTravelToGloomhavenClick}>
              <GloomhavenIcon /> {prefix}Travel to Gloomhaven&hellip;
            </ListGroupItem>
          )}
          {campaignAvailable &&
            !mustRetire && (
              <ListGroupItem tag="button" action onClick={onTravelToCampaignScenarioClick}>
                <MapIcon /> {prefix}Travel to Scenario&hellip;
              </ListGroupItem>
            )}
          {casualAvailable &&
            !mustRetire && (
              <ListGroupItem tag="button" action onClick={onTravelToCasualScenarioClick}>
                <MapIcon /> {prefix}Travel to Scenario (casual)&hellip;
              </ListGroupItem>
            )}
          {soloScenario &&
            !mustRetire && (
              <ListGroupItem tag="button" action onClick={onFinishSoloScenarioClick}>
                <ScenarioIcon /> Finish Solo Scenario&hellip;
              </ListGroupItem>
            )}
          <ListGroupItem tag="button" action onClick={onUnlockCityEventClick}>
            <KeyIcon /> Unlock City Event&hellip;
          </ListGroupItem>
          <ListGroupItem tag="button" action onClick={onUnlockRoadEventClick}>
            <KeyIcon /> Unlock Road Event&hellip;
          </ListGroupItem>
          <ListGroupItem tag="button" action onClick={onUnlockScenarioClick}>
            <KeyIcon /> Unlock Scenario&hellip;
          </ListGroupItem>
        </ListGroup>
      </Flyout>
    );
  }
}

PartyLocationFlyout.propTypes = {
  party: PropTypes.object.isRequired,
  onTravelToGloomhavenClick: PropTypes.func.isRequired,
  onTravelToCampaignScenarioClick: PropTypes.func.isRequired,
  onTravelToCasualScenarioClick: PropTypes.func.isRequired,
  onFinishSoloScenarioClick: PropTypes.func,
  onUnlockCityEventClick: PropTypes.func.isRequired,
  onUnlockRoadEventClick: PropTypes.func.isRequired,
  onUnlockScenarioClick: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['party', 'character']),
};

PartyLocationFlyout.defaultProps = {
  mode: 'party',
  onFinishSoloScenarioClick: () => {},
};

export default PartyLocationFlyout;

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { ScenarioIcon, StarIcon } from '../../Icons';

const PartyScenarioFlyout = ({ mode, campaign, party, onClick }) => {
  const { location } = party;
  const { gloomhaven, scenario, region } = location;

  if (!campaign.scenarios.length)
    return (
      <span>
        <StarIcon title="Travel to Gloomhaven" /> Unknown
      </span>
    );

  if (gloomhaven) return 'Gloomhaven';
  if (!scenario || !scenario.id) return 'Unknown';
  if (location.campaign && scenario.complete) return scenario.name;

  const name = region.unknown ? scenario.name : `${scenario.name}, ${region.name}`;
  const prefix = mode !== 'party' ? 'Party: ' : '';

  return (
    <Flyout text={name} className="scenario-name">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onClick}>
          <ScenarioIcon /> {prefix}Finish Scenario&hellip;
        </ListGroupItem>
      </ListGroup>
    </Flyout>
  );
};

PartyScenarioFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  party: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['party', 'character']),
};

PartyScenarioFlyout.defaultProps = {
  mode: 'party',
};

export default PartyScenarioFlyout;

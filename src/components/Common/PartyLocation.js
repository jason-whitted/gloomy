import React from 'react';
import PropTypes from 'prop-types';

// import PartyScenarioFlyout from '../PartySheet/Flyouts/PartyScenarioFlyout';
import { GloomhavenIcon, StarIcon } from '../Icons';

const PartyLocation = ({ campaign, party, onClick, plainText, noDonations, noCasual }) => {
  const { location } = party;
  const { casual, gloomhaven, region, scenario } = location;

  let name;
  if (gloomhaven) name = 'Gloomhaven';
  else if (!scenario.id) name = 'Unknown';
  else if (location.campaign && scenario.complete) name = scenario.name;

  if (scenario.id && !region.unknown) name = `${scenario.name}, ${region.name}`;
  if (plainText) return noCasual || !casual ? name : `${name} (casual)`;

  const donations = gloomhaven && party.characters.filter(c => c.dontate).map(c => c.name);

  // const link = !gloomhaven && !!onClick;

  return (
    <span className="location">
      {!noDonations &&
        donations &&
        !!donations.length && <StarIcon title={`Sanctuary Donations available for: ${donations.join(', ')}`} />}
      {gloomhaven && <GloomhavenIcon />}
      {name}
      {/* {!link && name}
      {link && <PartyScenarioFlyout campaign={campaign} party={party} onClick={onClick} />} */}
      {!noCasual && casual && ' (casual)'}
    </span>
  );
};

PartyLocation.propTypes = {
  campaign: PropTypes.object.isRequired,
  party: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  plainText: PropTypes.bool,
  noDonations: PropTypes.bool,
  noCasual: PropTypes.bool,
};

PartyLocation.defaultProps = {
  onClick: undefined,
  plainText: false,
  noDonations: false,
  noCasual: false,
};

export default PartyLocation;

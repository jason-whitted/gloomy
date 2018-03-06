import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CampaignNameFlyout = ({ campaign, onClick }) => {
  if (!campaign.owner) return campaign.name;

  return (
    <Flyout text={campaign.name} className="campaign-name">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onClick}>
          <i className="fa fa-fw fa-pencil" /> Rename&hellip;
        </ListGroupItem>
      </ListGroup>
    </Flyout>
  );
};

CampaignNameFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CampaignNameFlyout.defaultProps = {};

export default CampaignNameFlyout;

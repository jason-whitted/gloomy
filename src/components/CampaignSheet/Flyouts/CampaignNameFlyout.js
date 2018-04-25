import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CampaignNameFlyout = ({ campaign, onRenameClick, onContributorsClick, onPermissionsClick }) => {
  if (!campaign.isOwner) return campaign.name;

  return (
    <Flyout text={campaign.name} className="campaign-name">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onRenameClick}>
          <i className="fa fa-fw fa-pencil" /> Rename&hellip;
        </ListGroupItem>
        <ListGroupItem tag="button" action onClick={onContributorsClick}>
          Contributors&hellip;
        </ListGroupItem>
        <ListGroupItem tag="button" action onClick={onPermissionsClick}>
          Permissions&hellip;
        </ListGroupItem>
      </ListGroup>
    </Flyout>
  );
};

CampaignNameFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  onRenameClick: PropTypes.func.isRequired,
  onContributorsClick: PropTypes.func.isRequired,
  onPermissionsClick: PropTypes.func.isRequired,
};

CampaignNameFlyout.defaultProps = {};

export default CampaignNameFlyout;

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CampaignCharactersFlyout = ({ campaign, onClick }) => (
  <Flyout text="Characters">
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-user" /> Add Character&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

CampaignCharactersFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CampaignCharactersFlyout.defaultProps = {};

export default CampaignCharactersFlyout;

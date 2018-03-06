import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CampaignPlayersFlyout = ({ campaign, onClick }) => (
  <Flyout text="Players">
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-gamepad" /> Add Player&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

CampaignPlayersFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CampaignPlayersFlyout.defaultProps = {};

export default CampaignPlayersFlyout;

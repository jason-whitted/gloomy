import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CampaignPartiesFlyout = ({ campaign, onClick }) => (
  <Flyout text="Parties">
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-users" /> Add Party&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

CampaignPartiesFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CampaignPartiesFlyout.defaultProps = {};

export default CampaignPartiesFlyout;

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import ProsperityLevelTable from './ProsperityLevelTable';

const CampaignProsperityFlyout = ({ campaign, onClick }) => (
  <Flyout text="Prosperity">
    <ProsperityLevelTable campaign={campaign} />
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-adjust" /> Add / Remove Prosperity&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

CampaignProsperityFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CampaignProsperityFlyout.defaultProps = {};

export default CampaignProsperityFlyout;

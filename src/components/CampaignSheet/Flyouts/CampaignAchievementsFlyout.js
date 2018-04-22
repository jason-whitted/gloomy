import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { GlobalAchievementIcon } from '../../Icons';
import { Flyout } from '../../Flyout';

const CampaignAchievementsFlyout = ({ campaign, onClick }) => (
  <Flyout text="Achivements">
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <GlobalAchievementIcon /> Add Global Achievement&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

CampaignAchievementsFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CampaignAchievementsFlyout.defaultProps = {};

export default CampaignAchievementsFlyout;

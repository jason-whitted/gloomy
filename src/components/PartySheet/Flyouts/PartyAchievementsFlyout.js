import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { PartyAchievementIcon } from '../../Icons';
import { Flyout } from '../../Flyout';

const PartyAchievementsFlyout = ({ onClick }) => (
  <Flyout text="Achievements">
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <PartyAchievementIcon /> Add Party Achievement&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

PartyAchievementsFlyout.propTypes = {
  onClick: PropTypes.func.isRequired,
};

PartyAchievementsFlyout.defaultProps = {};

export default PartyAchievementsFlyout;

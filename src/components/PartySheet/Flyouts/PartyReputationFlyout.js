import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import ReputationDiscountTable from './ReputationDiscountTable';

const PartyReputationFlyout = ({ party, onClick }) => (
  <Flyout text="Reputation">
    <ReputationDiscountTable party={party} />
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-adjust" /> Add / Remove Reputation&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

PartyReputationFlyout.propTypes = {
  party: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

PartyReputationFlyout.defaultProps = {};

export default PartyReputationFlyout;

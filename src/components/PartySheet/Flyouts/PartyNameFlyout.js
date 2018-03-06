import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const PartyNameFlyout = ({ party, onClick }) => (
  <Flyout text={party.name} className="party-name">
    <Flyout.Head>Actions</Flyout.Head>
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-id-card-o" /> Rename&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

PartyNameFlyout.propTypes = {
  party: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

PartyNameFlyout.defaultProps = {};

export default PartyNameFlyout;

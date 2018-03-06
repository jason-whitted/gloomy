import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const PartyCharactersFlyout = ({ onClick }) => (
  <Flyout text="Characters">
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-user" /> Add Character&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

PartyCharactersFlyout.propTypes = {
  onClick: PropTypes.func.isRequired,
};

PartyCharactersFlyout.defaultProps = {};

export default PartyCharactersFlyout;

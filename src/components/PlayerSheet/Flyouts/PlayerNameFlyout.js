import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const PlayerNameFlyout = ({ player, onClick }) => (
  <Flyout text={player.name} className="player-name">
    <Flyout.Head>Actions</Flyout.Head>
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-id-card-o" /> Rename&hellip;
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

PlayerNameFlyout.propTypes = {
  player: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

PlayerNameFlyout.defaultProps = {};

export default PlayerNameFlyout;

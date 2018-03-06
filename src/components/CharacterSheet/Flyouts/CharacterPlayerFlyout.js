import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CharacterPlayerFlyout = ({ character, onClick }) => (
  <Flyout text={character.player.name} className="player-name">
    <Flyout.Head>Actions</Flyout.Head>
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onClick}>
        <i className="fa fa-fw fa-link" /> Open Player Page
      </ListGroupItem>
    </ListGroup>
  </Flyout>
);

CharacterPlayerFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CharacterPlayerFlyout.defaultProps = {};

export default CharacterPlayerFlyout;

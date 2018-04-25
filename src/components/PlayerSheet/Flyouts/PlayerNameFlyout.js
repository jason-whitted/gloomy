import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const PlayerNameFlyout = ({ campaign, player, onRenameClick, onOwnersClick }) => (
  <Flyout text={player.name} className="player-name">
    <Flyout.Head>Actions</Flyout.Head>
    <ListGroup>
      <ListGroupItem tag="button" action onClick={onRenameClick}>
        <i className="fa fa-fw fa-id-card-o" /> Rename&hellip;
      </ListGroupItem>
      {campaign.isOwner && (
        <ListGroupItem tag="button" action onClick={onOwnersClick}>
          Owners&hellip;
        </ListGroupItem>
      )}
    </ListGroup>
  </Flyout>
);

PlayerNameFlyout.propTypes = {
  player: PropTypes.object.isRequired,
  onRenameClick: PropTypes.func.isRequired,
  onOwnersClick: PropTypes.func.isRequired,
};

PlayerNameFlyout.defaultProps = {};

export default PlayerNameFlyout;

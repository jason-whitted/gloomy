import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { PlayerNameFlyout } from './Flyouts';
import { StarIcon } from '../Icons';

class PlayerList extends Component {
  state = { open: false };

  toggle = event => this.setState({ open: !this.state.open });

  render() {
    const { players } = this.props;

    if (!players.length)
      return (
        <div>
          <StarIcon />
          This campaign needs players!
        </div>
      );

    if (this.state.open || players.length < 3) {
      return (
        <ListGroup>
          {players.map(p => (
            <ListGroupItem key={p.id}>
              <PlayerNameFlyout player={p} />
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <ListGroupItem>
          <PlayerNameFlyout player={players[0]} />
        </ListGroupItem>
        <ListGroupItem tag="a" href="#expand" onClick={this.toggle}>
          &hellip;and {players.length - 1} other{players.length === 2 ? '' : 's'}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};

PlayerList.defaultProps = {};

export default PlayerList;

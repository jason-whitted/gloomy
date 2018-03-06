import React, { Component } from 'react';

import { PlayerIcon } from '../Icons';

class Player extends Component {
  click = event => {
    const { player, onClick } = this.props;
    onClick(player);
  };

  render() {
    const { player: { name } } = this.props;

    return (
      <li className="list-group-item list-group-item-action" onClick={this.click} role="button">
        <PlayerIcon /> {name}
      </li>
    );
  }
}

export default Player;

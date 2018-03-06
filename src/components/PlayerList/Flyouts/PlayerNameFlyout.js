import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { Player } from '../../Common';

class PlayerNameFlyout extends Component {
  click = event => {
    const { history, player } = this.props;
    history.push(player.url);
  };

  render() {
    const { player } = this.props;

    const text = <Player player={player} />;

    return (
      <Flyout text={text}>
        <ListGroup>
          <ListGroupItem action onClick={this.click}>
            <i className="fa fa-fw fa-link" /> Open Player Page
          </ListGroupItem>
        </ListGroup>
      </Flyout>
    );
  }
}

PlayerNameFlyout.propTypes = {
  player: PropTypes.object.isRequired,
  // withRouter
  history: PropTypes.object.isRequired,
};

PlayerNameFlyout.defaultProps = {};

export default withRouter(PlayerNameFlyout);

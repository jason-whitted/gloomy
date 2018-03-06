import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { GlobalAchievementIcon } from '../Icons';

class GlobalAchievementList extends Component {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { achievements } = this.props;

    if (!achievements.length) {
      return <i>No Global Achievements</i>;
    }

    if (this.state.open || achievements.length < 3) {
      return (
        <ListGroup>
          {achievements.map(a => (
            <ListGroupItem key={a.id}>
              <GlobalAchievementIcon /> {a.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <ListGroupItem>
          <GlobalAchievementIcon /> {achievements[0].name}
        </ListGroupItem>
        <ListGroupItem tag="a" href="#expand" onClick={this.toggle}>
          &hellip;and {achievements.length - 1} other{achievements.length === 2 ? '' : 's'}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

GlobalAchievementList.propTypes = {
  achievements: PropTypes.array.isRequired,
};

GlobalAchievementList.defaultProps = {};

export default GlobalAchievementList;

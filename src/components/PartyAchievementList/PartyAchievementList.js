import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { PartyAchievementIcon } from '../Icons';

class PartyAchievementList extends Component {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { achievements } = this.props;

    if (!achievements.length) {
      return <i>N/A</i>;
    }

    if (this.state.open || achievements.length < 3) {
      return (
        <ListGroup>
          {achievements.map(a => (
            <ListGroupItem key={a.id}>
              <PartyAchievementIcon /> {a.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <ListGroupItem>
          <PartyAchievementIcon /> {achievements[0].name}
        </ListGroupItem>
        <ListGroupItem tag="a" href="#expand" onClick={this.toggle}>
          &hellip;and {achievements.length - 1} other{achievements.length === 2 ? '' : 's'}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

PartyAchievementList.propTypes = {
  achievements: PropTypes.array.isRequired,
};

PartyAchievementList.defaultProps = {};

export default PartyAchievementList;

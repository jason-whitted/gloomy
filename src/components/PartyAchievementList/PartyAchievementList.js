import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import PartyAchievementItem from './PartyAchievementItem';
import removeDialog from './removeDialog';

class PartyAchievementList extends Component {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  removeAchievement = achievement => {
    this.props.onClick(removeDialog(achievement))();
  };

  render() {
    const { achievements } = this.props;

    if (!achievements.length) {
      return <i>N/A</i>;
    }

    if (this.state.open || achievements.length < 3) {
      return (
        <ListGroup>
          {achievements.map(a => <PartyAchievementItem key={a.id} achievement={a} onClick={this.removeAchievement} />)}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <PartyAchievementItem achievement={achievements[0]} onClick={this.removeAchievement} />
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import GlobalAchievementItem from './GlobalAchievementItem';
import removeDialog from './removeDialog';

class GlobalAchievementList extends Component {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  removeAchievement = achievement => {
    this.props.onClick(removeDialog(achievement))();
  };

  render() {
    const { achievements } = this.props;

    if (!achievements.length) {
      return <i>No Global Achievements</i>;
    }

    if (this.state.open || achievements.length < 3) {
      return (
        <ListGroup>
          {achievements.map(a => <GlobalAchievementItem key={a.id} achievement={a} onClick={this.removeAchievement} />)}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <GlobalAchievementItem achievement={achievements[0]} onClick={this.removeAchievement} />
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

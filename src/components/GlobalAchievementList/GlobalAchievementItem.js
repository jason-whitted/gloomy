import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { GlobalAchievement } from '../Common';
import { Flyout } from '../Flyout';

class GlobalAchievementItem extends Component {
  click = event => {
    const { achievement, onClick } = this.props;
    onClick(achievement);
  };
  render() {
    const { achievement } = this.props;

    return (
      <ListGroupItem>
        <Flyout text={<GlobalAchievement achievement={achievement} />}>
          <ListGroup>
            <ListGroupItem tag="button" action onClick={this.click}>
              Remove Achievement&hellip;
            </ListGroupItem>
          </ListGroup>
        </Flyout>
      </ListGroupItem>
    );
  }
}

export default GlobalAchievementItem;

import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { PartyAchievement } from '../Common';
import { Flyout } from '../Flyout';

class PartyAchievementItem extends Component {
  click = event => {
    const { achievement, onClick } = this.props;
    onClick(achievement);
  };
  render() {
    const { achievement } = this.props;

    return (
      <ListGroupItem>
        <Flyout text={<PartyAchievement achievement={achievement} />}>
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

export default PartyAchievementItem;

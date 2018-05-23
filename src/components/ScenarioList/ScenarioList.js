import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Scenario } from '../Common';

class ScenarioList extends Component {
  state = { open: false };

  toggle = event => this.setState({ open: !this.state.open });

  render() {
    const { scenarios } = this.props;

    if (!scenarios.length) return null;

    if (this.state.open || scenarios.length < 3) {
      return (
        <ListGroup>
          {scenarios.map(c => (
            <ListGroupItem key={c.id}>
              <Scenario scenario={c} showRegion />
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <ListGroupItem>
          <Scenario scenario={scenarios[0]} showRegion />
        </ListGroupItem>
        <ListGroupItem tag="a" href="#expand" onClick={this.toggle}>
          &hellip;and {scenarios.length - 1} other{scenarios.length === 2 ? '' : 's'}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

ScenarioList.propTypes = {
  scenarios: PropTypes.array.isRequired,
};

ScenarioList.defaultProps = {};

export default ScenarioList;

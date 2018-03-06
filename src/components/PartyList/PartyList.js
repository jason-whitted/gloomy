import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { PartyNameFlyout } from './Flyouts';
import { StarIcon } from '../Icons';

class PartyList extends Component {
  state = { open: false };

  toggle = event => this.setState({ open: !this.state.open });

  render() {
    const { parties } = this.props;

    if (!parties.length)
      return (
        <div>
          <StarIcon />
          This campaign needs parties!
        </div>
      );

    if (this.state.open || parties.length < 3) {
      return (
        <ListGroup>
          {parties.map(p => (
            <ListGroupItem key={p.id}>
              <PartyNameFlyout party={p} />
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <ListGroupItem>
          <PartyNameFlyout party={parties[0]} />
        </ListGroupItem>
        <ListGroupItem tag="a" href="#expand" onClick={this.toggle}>
          &hellip;and {parties.length - 1} other{parties.length === 2 ? '' : 's'}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

PartyList.propTypes = {
  parties: PropTypes.array.isRequired,
};

PartyList.defaultProps = {};

export default PartyList;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { EnvelopeIcon } from '../Icons';

class EnvelopeList extends Component {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { envelopes } = this.props;

    if (!envelopes.length) {
      return <i>No Envelopes</i>;
    }

    if (this.state.open || envelopes.length < 3) {
      return (
        <ListGroup>
          {envelopes.map(a => (
            <ListGroupItem key={a.id}>
              <EnvelopeIcon /> {a.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <ListGroupItem>
          <EnvelopeIcon /> {envelopes[0].name}
        </ListGroupItem>
        <ListGroupItem tag="a" href="#expand" onClick={this.toggle}>
          &hellip;and {envelopes.length - 1} other{envelopes.length === 2 ? '' : 's'}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

EnvelopeList.propTypes = {
  envelopes: PropTypes.array.isRequired,
};

EnvelopeList.defaultProps = {};

export default EnvelopeList;

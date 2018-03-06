import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { Party } from '../../Common';

class PartyNameFlyout extends Component {
  click = event => {
    const { history, party } = this.props;
    history.push(party.url);
  };

  render() {
    const { party } = this.props;

    const text = <Party party={party} />;

    return (
      <Flyout text={text}>
        <ListGroup>
          <ListGroupItem action onClick={this.click}>
            <i className="fa fa-fw fa-link" /> Open Party Page
          </ListGroupItem>
        </ListGroup>
      </Flyout>
    );
  }
}

PartyNameFlyout.propTypes = {
  party: PropTypes.object.isRequired,
  // withRouter
  history: PropTypes.object.isRequired,
};

PartyNameFlyout.defaultProps = {};

export default withRouter(PartyNameFlyout);

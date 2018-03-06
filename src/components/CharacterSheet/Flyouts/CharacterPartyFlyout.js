import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CharacterPartyFlyout = ({ character, onClick }) => {
  const flyout = (
    <Flyout text={character.party.name} className="party-name">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onClick}>
          <i className="fa fa-fw fa-link" /> Open Party Page
        </ListGroupItem>
      </ListGroup>
    </Flyout>
  );

  if (character.retired) {
    return (
      <Fragment>
        <i>Retired from</i> {flyout}
      </Fragment>
    );
  } else if (character.hiatus) {
    return (
      <Fragment>
        {flyout} <i>(on hiatus)</i>
      </Fragment>
    );
  }

  return flyout;
};

CharacterPartyFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CharacterPartyFlyout.defaultProps = {};

export default CharacterPartyFlyout;

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CharacterChecksFlyout = ({ readonly, character, onClick }) => {
  if (readonly) return 'Checks';

  return (
    <Flyout text="Checks">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onClick}>
          <i className="fa fa-fw fa-check-circle-o" /> Add / Remove Checkmarks&hellip;
        </ListGroupItem>
      </ListGroup>
    </Flyout>
  );
};

CharacterChecksFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterChecksFlyout.defaultProps = {
  readonly: false,
};

export default CharacterChecksFlyout;

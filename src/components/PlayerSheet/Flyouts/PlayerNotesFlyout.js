import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const PlayerNotesFlyout = ({ readonly, player, onClick }) => {
  if (readonly) return 'Notes';

  return (
    <Flyout text="Notes">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onClick}>
          <i className="fa fa-fw fa-sticky-note-o" /> Update Notes&hellip;
        </ListGroupItem>
      </ListGroup>
    </Flyout>
  );
};

PlayerNotesFlyout.propTypes = {
  player: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

PlayerNotesFlyout.defaultProps = {
  readonly: false,
};

export default PlayerNotesFlyout;

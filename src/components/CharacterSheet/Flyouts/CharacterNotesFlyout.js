import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';

const CharacterNotesFlyout = ({ readonly, character, onClick }) => {
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

CharacterNotesFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterNotesFlyout.defaultProps = {
  readyonly: false,
};

export default CharacterNotesFlyout;

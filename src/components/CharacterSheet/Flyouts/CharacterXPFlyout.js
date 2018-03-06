import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import LevelXPTable from './LevelXPTable';

const CharacterXPFlyout = ({ readonly, character, onClick }) => {
  if (readonly) return 'XP';

  return (
    <Flyout text="XP">
      <ListGroup>
        <ListGroupItem className="m-0 p-0">
          <LevelXPTable character={character} />
        </ListGroupItem>
        <ListGroupItem tag="button" action onClick={onClick}>
          <i className="fa fa-fw fa-certificate" /> Add XP&hellip;
        </ListGroupItem>
      </ListGroup>
    </Flyout>
  );
};

CharacterXPFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterXPFlyout.defaultProps = {
  readonly: false,
};

export default CharacterXPFlyout;

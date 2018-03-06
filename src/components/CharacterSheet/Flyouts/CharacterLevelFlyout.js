import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { StarIcon } from '../../Icons';
import LevelXPTable from './LevelXPTable';

const CharacterLevelFlyout = ({ readonly, character, onClick }) => {
  if (readonly) return 'Level';

  return (
    <Flyout text="Level">
      <ListGroup>
        <ListGroupItem className="m-0 p-0">
          <LevelXPTable character={character} />
        </ListGroupItem>
        {character.levelUp &&
          character.party.location.gloomhaven && (
            <ListGroupItem tag="button" action onClick={onClick}>
              <StarIcon /> Level Up!
            </ListGroupItem>
          )}
      </ListGroup>
    </Flyout>
  );
};

CharacterLevelFlyout.propTypes = {
  readonly: PropTypes.bool,
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

CharacterLevelFlyout.defaultProps = {
  readonly: false,
};

export default CharacterLevelFlyout;

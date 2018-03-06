import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { StarIcon } from '../../Icons';

const CharacterPerksFlyout = ({ readonly, character, onClick }) => {
  if (readonly) return 'Perks';

  return (
    <Flyout text="Perks">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        {character.perkUp && (
          <ListGroupItem tag="button" action onClick={onClick}>
            <StarIcon /> Add Perk&hellip;
          </ListGroupItem>
        )}
      </ListGroup>
    </Flyout>
  );
};

CharacterPerksFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterPerksFlyout.defaultProps = {
  readonly: false,
};

export default CharacterPerksFlyout;

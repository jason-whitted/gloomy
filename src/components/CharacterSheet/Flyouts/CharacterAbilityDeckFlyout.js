import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { ClassIcon, StarIcon } from '../../Icons';

const CharacterAbilityDeckFlyout = ({ readonly, character, onClick }) => {
  const text = `${character.abilityDeck.length} cards`;

  return (
    <Fragment>
      {character.abilityUp && <StarIcon title="Ability available!" />}
      <Flyout text={text}>
        <ListGroup>
          <ListGroupItem tag="button" action onClick={onClick}>
            <ClassIcon class={character.class} /> View Ability Deck&hellip;
          </ListGroupItem>
        </ListGroup>
      </Flyout>
    </Fragment>
  );
};

CharacterAbilityDeckFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterAbilityDeckFlyout.defaultProps = {
  readonly: false,
};

export default CharacterAbilityDeckFlyout;

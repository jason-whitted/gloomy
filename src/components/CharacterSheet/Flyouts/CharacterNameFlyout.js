import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { HiatusIcon, HundredIcon } from '../../Icons';

const CharacterNameFlyout = ({ character, onRenameClick, onToggleHiatusClick, onRetireClick }) => {
  if (character.retired) return <b>{character.name}</b>;

  const canRetire = character.party.location.gloomhaven && character.retirement.complete;

  return (
    <Flyout text={character.name} className="character-name">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onRenameClick}>
          <i className="fa fa-fw fa-id-card-o" /> Rename&hellip;
        </ListGroupItem>
        {canRetire && (
          <ListGroupItem tag="button" action onClick={onRetireClick}>
            <HundredIcon /> Retire!
          </ListGroupItem>
        )}
        {!canRetire && (
          <ListGroupItem tag="button" action onClick={onToggleHiatusClick}>
            <HiatusIcon /> {character.hiatus ? 'Return from Hiatus' : 'Go on Hiatus'}&hellip;
          </ListGroupItem>
        )}
      </ListGroup>
    </Flyout>
  );
};

CharacterNameFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onRenameClick: PropTypes.func.isRequired,
  onToggleHiatusClick: PropTypes.func.isRequired,
  onRetireClick: PropTypes.func.isRequired,
};

CharacterNameFlyout.defaultProps = {};

export default CharacterNameFlyout;

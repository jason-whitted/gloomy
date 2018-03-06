import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { SanctuaryIcon } from '../../Icons';

const CharacterGoldFlyout = ({ readonly, character, onAddClick, onDonateClick }) => {
  if (readonly) return 'Gold';

  const canDonate = character.donate && character.gold >= 10 && character.party.location.gloomhaven;

  return (
    <Flyout text="Gold">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onAddClick}>
          <i className="fa fa-fw fa-money" /> Add / Remove Gold&hellip;
        </ListGroupItem>
        {canDonate && (
          <ListGroupItem tag="button" action onClick={onDonateClick}>
            <SanctuaryIcon /> Sanctuary Donation&hellip;
          </ListGroupItem>
        )}
      </ListGroup>
    </Flyout>
  );
};

CharacterGoldFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onDonateClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterGoldFlyout.defaultProps = {
  readonly: false,
};

export default CharacterGoldFlyout;

import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { BuyIcon, DesignIcon, ReceiveIcon, SellIcon } from '../../Icons';

const CharacterItemsFlyout = ({ readonly, character, onBuyClick, onReceiveClick, onUnlockClick, onSellAllClick }) => {
  if (readonly) return 'Items';

  return (
    <Flyout text="Items">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onBuyClick}>
          <BuyIcon /> Buy Item&hellip;
        </ListGroupItem>
        <ListGroupItem tag="button" action onClick={onReceiveClick}>
          <ReceiveIcon /> Treasure: Receive Item&hellip;
        </ListGroupItem>
        <ListGroupItem tag="button" action onClick={onUnlockClick}>
          <DesignIcon /> Treasure: Unlock Item Design&hellip;
        </ListGroupItem>
        {character.items.length > 1 && (
          <ListGroupItem tag="button" action onClick={onSellAllClick}>
            <SellIcon /> Sell All Items&hellip;
          </ListGroupItem>
        )}
      </ListGroup>
    </Flyout>
  );
};

CharacterItemsFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  onBuyClick: PropTypes.func.isRequired,
  onReceiveClick: PropTypes.func.isRequired,
  onUnlockClick: PropTypes.func.isRequired,
  onSellAllClick: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

CharacterItemsFlyout.defaultProps = {
  readonly: false,
};

export default CharacterItemsFlyout;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../Flyout';
import { Item } from '../Item';
import { SellIcon, SlotIcon } from '../Icons';

class ItemList extends Component {
  render() {
    const { readonly, character, show, dialog: Dialog } = this.props;
    const { items } = character;

    const CharacterSellItemDialog = item => props => <Dialog item={item} {...props} />;

    return (
      <ListGroup>
        {items.map(item => (
          <ListGroupItem key={item.id}>
            <Flyout
              popover={{ className: 'item-popover' }}
              text={
                <span>
                  <SlotIcon slot={item.slot.id} /> {item.name}
                </span>
              }
            >
              <ListGroup>
                <ListGroupItem className="m-0 p-0 item-card">
                  <Item item={item} />
                </ListGroupItem>
                {!readonly && (
                  <ListGroupItem tag="button" action onClick={show(CharacterSellItemDialog(item))}>
                    <SellIcon /> Sell Item&hellip;
                  </ListGroupItem>
                )}
              </ListGroup>
            </Flyout>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

ItemList.propTypes = {
  character: PropTypes.object.isRequired,
  show: PropTypes.func.isRequired,
  dialog: PropTypes.func.isRequired,
};

ItemList.defaultProps = {};

export default ItemList;

import React from 'react';
import PropTypes from 'prop-types';

import { ITEM_CONFIG } from '../../constants';
import { Flyout } from '../Flyout';
import { SlotIcon } from '../Icons';
import { Item as ItemDetails } from '../Item';

const Item = ({ item, showID, noLink }) => {
  const itemConfig = item.id ? item : ITEM_CONFIG[item];
  const { id, name, slot } = itemConfig;

  const parts = [name];
  if (showID) parts.unshift(id);
  const itemName = parts.join(' ');

  return (
    <span className="item">
      <SlotIcon slot={slot} />
      {noLink && itemName}
      {!noLink && (
        <Flyout text={itemName}>
          <ItemDetails item={itemConfig} />
        </Flyout>
      )}
    </span>
  );
};

Item.propTypes = {
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  showID: PropTypes.bool,
  noLink: PropTypes.bool,
};

Item.defaultProps = {
  showID: false,
  noLink: false,
};

export default Item;

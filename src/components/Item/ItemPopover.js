import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import shortid from 'shortid';

import Item from './Item';

class ItemPopover extends Component {
  state = { open: false };

  componentWillMount() {
    this.id = `item-${shortid.generate()}`;
  }

  toggle = event => {
    if (event) event.preventDefault();
    const open = !this.state.open;
    this.setState({ open });
  };

  render() {
    const { item } = this.props;

    return (
      <Fragment>
        <a id={this.id} href={`#${item.name}`} onClick={this.toggle}>
          {item.name}
        </a>
        <Popover placement="bottom" isOpen={this.state.open} target={this.id} toggle={this.toggle}>
          <PopoverHeader>{item.name}</PopoverHeader>
          <PopoverBody>
            <Item item={item} />
          </PopoverBody>
        </Popover>
      </Fragment>
    );
  }
}

ItemPopover.propTypes = {
  item: PropTypes.object.isRequired,
};

ItemPopover.defaultProps = {};

export default ItemPopover;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactCardFlip from 'react-card-flip';

import { ITEM_TYPE } from '../../constants';
import { SlotIcon, SymbolIcon } from '../Icons';
import { RichText } from '../RichText';
import './styles.css';

class Item extends Component {
  state = { flipped: false };

  flip = () => this.setState({ flipped: !this.state.flipped });

  render() {
    const { item } = this.props;

    const random = item.type === ITEM_TYPE.RANDOM;

    return (
      <div className={classNames('item', { random })}>
        <ReactCardFlip isFlipped={this.state.flipped}>
          <div key="front" className="front" onClick={this.flip}>
            <div className="name">{item.name}</div>
            <div className="count">1 / {item.count}</div>
            <div className="gold">{item.gold}</div>
            <div className="slot">
              <SlotIcon slot={item.slot} flyout />
            </div>
            <div className="desc">
              <RichText text={item.desc} light />
            </div>
            <div className="after">
              {item.after && <SymbolIcon symbol={item.after} flyout noText className="light" />}
            </div>
          </div>
          <div key="back" className="back" onClick={this.flip}>
            <div className="id">{`${item.id}`.padStart(3, '0')}</div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

Item.defaultProps = {};

export default Item;

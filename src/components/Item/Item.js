import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactCardFlip from 'react-card-flip';

import { ITEM_TYPE } from '../../constants';
import { Polarity } from '../Common';
import { Flyout } from '../Flyout';
import { SlotIcon, SymbolIcon } from '../Icons';
import { RichText } from '../RichText';
import './styles.css';

class Item extends Component {
  state = { flipped: false };

  flip = () => this.setState({ flipped: !this.state.flipped });

  render() {
    const { discount, item } = this.props;

    const random = item.type === ITEM_TYPE.RANDOM;

    return (
      <div className={classNames('item', { random })}>
        <ReactCardFlip isFlipped={this.state.flipped}>
          <div key="front" className="front" onClick={this.flip}>
            <div className="name">{item.name}</div>
            <div className="count">1 / {item.count}</div>
            <div className="gold">
              {discount === undefined && item.gold}
              {discount !== undefined && (
                <Flyout text={item.gold + discount}>
                  <table className="table table-sm table-striped table-dark m-0 small text-center">
                    <tbody>
                      <tr>
                        <td className="text-right">Base Cost:</td>
                        <td>{item.gold}</td>
                      </tr>
                      <tr>
                        <td className="text-right">Shop Price Modifier:</td>
                        <td>
                          <Polarity number={discount} />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-right">Total:</td>
                        <td>{item.gold + discount}</td>
                      </tr>
                    </tbody>
                  </table>
                </Flyout>
              )}
            </div>
            <div className="slot">
              <SlotIcon slot={item.slot} flyout />
            </div>
            <div className="desc">
              <RichText text={item.desc} light />
            </div>
            <div className="after">
              {item.after && <SymbolIcon symbol={item.after} flyout noText className="light" />}
            </div>
            <div className="effects">{item.effects && <RichText text={item.effects} light />}</div>
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
  discount: PropTypes.number,
};

Item.defaultProps = {
  discount: undefined,
};

export default Item;

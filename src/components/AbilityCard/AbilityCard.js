import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';

import { CLASS_CONFIG } from '../../constants';
import { ClassIcon, SymbolIcon } from '../Icons';
import ActionList from './ActionList';
import './styles.css';

class AbilityCard extends Component {
  state = { flipped: false };

  flip = () => this.setState({ flipped: !this.state.flipped });

  render() {
    const { card, noFlip } = this.props;

    if (!card) return null;

    const $class = CLASS_CONFIG[card.class];

    return (
      <div className="AbilityCard">
        <ReactCardFlip isFlipped={this.state.flipped}>
          <div key="front" className="front" onClick={noFlip ? undefined : this.flip}>
            <div className="name">{card.name}</div>
            <div className="level">{card.level || 'X'}</div>
            <div className="initiative">{card.initiative.toString().padStart(2, '0')}</div>
            <div className="top">
              <div className="actions">
                <ActionList {...this.props} actions={card.top.actions} />
              </div>
              {card.top.consumed && (
                <div className="consumed">
                  <SymbolIcon symbol="Consumed" flyout noText className="light" />
                </div>
              )}
              {card.top.noRecover && (
                <div className="no-recover">
                  <SymbolIcon symbol="NoRecover" flyout noText className="light" />
                </div>
              )}
            </div>
            <div className="bottom">
              <div className="actions">
                <ActionList {...this.props} actions={card.bottom.actions} />
              </div>
              {card.bottom.consumed && (
                <div className="consumed">
                  <SymbolIcon symbol="Consumed" flyout noText className="light" />
                </div>
              )}
              {card.bottom.noRecover && (
                <div className="no-recover">
                  <SymbolIcon symbol="NoRecover" flyout noText className="light" />
                </div>
              )}
            </div>
            <div className="class-icon">
              <ClassIcon class={card.class} classColor />
            </div>
            <div className="card-number">{card.id.toString().padStart(3, '0')}</div>
          </div>
          <div key="back" className="back" onClick={this.flip}>
            <div className="class">{$class.name}</div>
            <div className="class-icon">
              <ClassIcon class={card.class} classColor />
            </div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

AbilityCard.propTypes = {
  card: PropTypes.object.isRequired,
  noFlip: PropTypes.bool,
};

AbilityCard.defaultProps = {
  noFlip: false,
};

export default AbilityCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ClassAbility, Summon } from '../Common';
import { ClassIcon, EffectIcon, ElementIcon, HexIcon, SlotIcon, SymbolIcon } from '../Icons';

class RichText extends Component {
  render() {
    const { text, light } = this.props;
    const arr = text.replace(/\n/g, '(LineBreak)').split(/[()]/);

    return (
      <span className="RichText">
        {arr.map((t, n) => {
          const parts = t.split(':');
          switch (parts[0]) {
            case 'LineBreak':
              return <br key={n} />;
            case 'Effect':
              return <EffectIcon key={n} effect={parts[1]} />;
            case 'Symbol':
              if (parts[1] === 'XP')
                return <SymbolIcon key={n} symbol="XP" xp={parts[2]} noText className={light ? 'light' : ''} />;
              return <SymbolIcon key={n} symbol={parts[1]} noText className={light ? 'light' : ''} />;
            case 'Element':
              const consume = parts[2] === 'Consume';
              return <ElementIcon key={n} element={parts[1]} consume={consume} />;
            case 'Hex':
              return <HexIcon key={n} type={parts[1]} pattern={parts[2]} />;
            case 'summon':
              return <Summon key={n} summon={parts[1]} />;
            case 'Slot':
              return <SlotIcon key={n} slot={parts[1]} className={light ? 'light' : ''} />;
            case 'XP':
              return <SymbolIcon key={n} symbol="XP" xp={parts[1]} noText className={light ? 'light' : ''} />;
            case 'Class':
              return <ClassIcon key={n} class={parts[1]} circle classColor invert />;
            case 'ClassAbility':
              return <ClassAbility key={n} class={parts[1]} text={parts[2]} />;
            case 'lparen':
              return '(';
            case 'rparen':
              return ')';
            default:
              return t;
          }
        })}
      </span>
    );
  }
}

RichText.propTypes = {
  text: PropTypes.string.isRequired,
};

RichText.defaultProps = {};

export default RichText;

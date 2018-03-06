import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { Convert } from '../../../common';
import { RichText } from '../../RichText';

class AugmentButton extends Component {
  componentWillMount() {
    const { augment, card, slot } = this.props;

    const cost = Convert.abilityAugmentCost({
      ability: card,
      slotID: slot.id,
      augmentID: augment.id,
    });
    this.setState(cost);
  }

  click = () => {
    this.props.onSelectAugment(this.props);
  };

  render() {
    const { augment, maxCost } = this.props;
    const { base, double, level, summon, previous, hex, cost } = this.state;

    const title = [augment.name];
    if (base && !double) title.push(`Base:     ${base}`);
    if (base && double) title.push(`Base:     ${base + base} (doubled)`);
    if (summon) title.push(`Summon:   ${base}`);
    if (level) title.push(`Level:    ${level}`);
    if (previous) title.push(`Previous: ${previous}`);
    if (hex) title.push(`Hex:      ${hex}`);
    title.push('—————');
    title.push(`Total:    ${cost}`);

    return (
      <Button
        type="button"
        color="primary"
        className="px-2"
        onClick={this.click}
        title={title.join('\n')}
        disabled={cost > maxCost}
      >
        <RichText text={augment.text} light />
        <div className="float-right ml-2 small mt-1">{cost}g</div>
      </Button>
    );
  }
}

export default AugmentButton;

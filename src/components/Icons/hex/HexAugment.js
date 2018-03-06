import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { Popover } from 'reactstrap';

import { AUGMENT_CONFIG } from '../../../constants';
import AugmentButton from '../../AbilityCard/Augments/AugmentButton';

class HexAugment extends Component {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { card, action, className, onSelectAugment, noFlip, maxCost, noFlyout, augmentIndex, ...other } = this.props;

    const svg = (
      <g className={classNames('svg svg-hex', className)} {...other}>
        <circle className="hl" cx="200" cy="200" r="45" fill="#fff" opacity="0.4" />
      </g>
    );

    if (!onSelectAugment) return svg;

    const slot = card.augmentSlots[action.augments[augmentIndex]];
    const id = `hex-augment-${card.id}-${slot.top ? 'top' : 'bottom'}-${slot.id}`;

    return (
      <Fragment>
        <g id={id} className={classNames('svg svg-hex', className)} {...other} onClick={this.toggle}>
          <circle className="hl" cx="200" cy="200" r="45" fill="#fff" opacity="0.4" />
          <rect
            x="100"
            y="100"
            width="200"
            height="200"
            fill="#ffffff00"
            stroke="white"
            strokeDasharray="10,15"
            strokeWidth="10"
          />
        </g>
        <Popover
          placement="bottom"
          isOpen={this.state.open}
          target={id}
          toggle={this.toggle}
          className="augments-flyout"
        >
          {Object.values(AUGMENT_CONFIG)
            .filter(a => a.enabled(slot))
            .map(a => <AugmentButton key={a.id} {...this.props} slot={slot} augment={a} />)}
        </Popover>
      </Fragment>
    );
  }
}

export default HexAugment;

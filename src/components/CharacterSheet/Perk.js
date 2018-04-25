import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import classNames from 'classnames';

import { Flyout } from '../Flyout';
import { RichText } from '../RichText';

const checkmark = checked =>
  classNames('fa fa-fw', {
    'fa-check-square-o': checked,
    'fa-square-o': !checked,
  });

class Perk extends Component {
  click = event => {
    const { perk, onClick } = this.props;

    onClick(perk);
  };

  render() {
    const { readonly, perkUp, perk: { name, count, checks } } = this.props;

    const bools = Array(count)
      .fill(0)
      .map((_, i) => checks > i);

    return (
      <div className="perk small">
        {bools.map((b, i) => {
          const text = <i key={i} className={checkmark(b)} />;
          if (b || readonly || !perkUp) return text;

          return (
            <Flyout key={i} text={text}>
              <ListGroup>
                <ListGroupItem tag="button" action onClick={this.click}>
                  Select Perk&hellip;
                </ListGroupItem>
              </ListGroup>
            </Flyout>
          );
        })}
        <RichText text={name} />
      </div>
    );
  }
}

export default Perk;

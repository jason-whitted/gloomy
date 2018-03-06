import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { RichText } from '../RichText';

const checkmark = checked =>
  classNames('fa fa-fw', {
    'fa-check-square-o': checked,
    'fa-square-o': !checked,
  });

class Perk extends Component {
  render() {
    const { name, count, checks } = this.props;

    const bools = Array(count)
      .fill(0)
      .map((_, i) => checks > i);

    return (
      <div className="perk small">
        {bools.map((b, i) => <i key={i} className={checkmark(b)} />)}
        <RichText text={name} />
      </div>
    );
  }
}

Perk.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  checks: PropTypes.number.isRequired,
};

Perk.defaultProps = {};

export default Perk;

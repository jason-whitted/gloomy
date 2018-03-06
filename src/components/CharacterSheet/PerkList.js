import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Perk from './Perk';

class PerkList extends Component {
  render() {
    const { character } = this.props;

    const perks = character.class.perks.reduce((dict, perk) => {
      if (!dict[perk.id]) {
        dict[perk.id] = {
          ...perk,
          count: 0,
          checks: character.perks.filter(p => p.id === perk.id).length,
        };
      }
      dict[perk.id].count++;
      return dict;
    }, {});

    const perkIndex = ({ id }) => character.class.perks.findIndex(p => p.id === id);
    const sortPerks = (a, b) => perkIndex(a) - perkIndex(b);

    return (
      <div>
        {Object.values(perks)
          .sort(sortPerks)
          .map(p => <Perk key={p.id} {...p} />)}
      </div>
    );
  }
}

PerkList.propTypes = {
  character: PropTypes.object.isRequired,
};

PerkList.defaultProps = {};

export default PerkList;

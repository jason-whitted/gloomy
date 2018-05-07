import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MONSTER, MONSTER_CONFIG } from '../../constants';
import transform from './transform';

class Monster extends Component {
  click = event => {
    const { tile, monster, onMonsterClick } = this.props;
    onMonsterClick && onMonsterClick(tile, monster);
    event.stopPropagation();
  };

  doubleClick = () => {
    const { tile, monster, onMonsterDoubleClick } = this.props;
    onMonsterDoubleClick && onMonsterDoubleClick(tile, monster);
  };

  render() {
    const { monster: config, activeToken, activeMonster } = this.props;
    const monster = MONSTER_CONFIG[config.monster];
    const className = classNames('monster', {
      active: (activeToken || activeMonster) && config === activeMonster,
      inactive: (activeToken || activeMonster) && config !== activeMonster,
    });
    const scale = config.scale || monster.scale || 0.8;

    return (
      <g className={className} transform={transform({ ...config, scale })}>
        <image xlinkHref={monster.image} width={monster.w} onClick={this.click} onDoubleClick={this.doubleClick} />
      </g>
    );
  }
}

Monster.propTypes = {
  scene: PropTypes.object.isRequired,
  tile: PropTypes.object.isRequired,
  monster: PropTypes.shape({
    monster: PropTypes.oneOf(Object.values(MONSTER)).isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  activeTile: PropTypes.object,
  activeMonster: PropTypes.object,
  onMonsterClick: PropTypes.func,
  onMonsterDoubleClick: PropTypes.func,
};

Monster.defaultProps = {
  activeTile: undefined,
  activeMonster: undefined,
  onMonsterClick: undefined,
  onMonsterDoubleClick: undefined,
};

export default Monster;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TILE, TILE_CONFIG } from '../../constants';
import Token from './Token';
import Monster from './Monster';
import transform from './transform';

class Tile extends Component {
  click = event => {
    const { tile, onTileClick } = this.props;
    onTileClick && onTileClick(tile);
    event.stopPropagation();
  };

  doubleClick = () => {
    const { tile, onTileDoubleClick } = this.props;
    onTileDoubleClick && onTileDoubleClick(tile);
  };

  render() {
    const { tile: config, activeTile } = this.props;
    const tile = TILE_CONFIG[config.tile];
    const className = classNames('tile', {
      active: activeTile && config === activeTile,
      inactive: activeTile && config !== activeTile,
    });
    const scale = config.scale || tile.scale || 1;

    return (
      <g className={className}>
        <image
          xlinkHref={tile.image}
          width={tile.w}
          onClick={this.click}
          onDoubleClick={this.doubleClick}
          transform={transform({ ...config, scale })}
        />
        {config.tokens && config.tokens.map((token, i) => <Token key={i} {...this.props} token={token} />)}
        {config.monsters && config.monsters.map((monster, i) => <Monster key={i} {...this.props} monster={monster} />)}
      </g>
    );
  }
}

Tile.propTypes = {
  scene: PropTypes.object.isRequired,
  tile: PropTypes.shape({
    tile: PropTypes.oneOf(Object.values(TILE)).isRequired,
    rotate: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  activeTile: PropTypes.object,
  onTileClick: PropTypes.func,
  onTileDoubleClick: PropTypes.func,
};

Tile.defaultProps = {
  activeTile: undefined,
  onTileClick: undefined,
  onTileDoubleClick: undefined,
};

export default Tile;

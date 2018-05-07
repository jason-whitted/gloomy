import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tile from './Tile';
import './styles.css';

class Scene extends Component {
  click = event => {
    const { scene, onSceneClick } = this.props;
    onSceneClick && onSceneClick(scene);
    event.stopPropagation();
  };

  render() {
    const { scene } = this.props;

    return (
      <svg className="Scene" xmlns="http://www.w3.org/2000/svg" viewBox={scene.viewBox} onClick={this.click}>
        {scene.tiles.map((tile, i) => <Tile key={i} {...this.props} tile={tile} />)}
      </svg>
    );
  }
}

Scene.propTypes = {
  scene: PropTypes.shape({
    tiles: PropTypes.array.isRequired,
  }).isRequired,
  onSceneClick: PropTypes.func,
  onTileClick: PropTypes.func,
  onTileDoubleClick: PropTypes.func,
  activeTile: PropTypes.object,
};

Scene.defaultProps = {
  activeTile: undefined,
  onSceneClick: undefined,
  onTileClick: undefined,
  onTileDoubleClick: undefined,
};

export default Scene;

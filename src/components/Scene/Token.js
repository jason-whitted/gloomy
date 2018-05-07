import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TOKEN, TOKEN_CONFIG } from '../../constants';
import transform from './transform';

class Token extends Component {
  click = event => {
    const { tile, token, onTokenClick } = this.props;
    onTokenClick && onTokenClick(tile, token);
    event.stopPropagation();
  };

  doubleClick = () => {
    const { tile, token, onTokenDoubleClick } = this.props;
    onTokenDoubleClick && onTokenDoubleClick(tile, token);
  };

  render() {
    const { token: config, activeToken, activeMonster } = this.props;
    const token = TOKEN_CONFIG[config.token];
    const className = classNames('token', {
      active: (activeToken || activeMonster) && config === activeToken,
      inactive: (activeToken || activeMonster) && config !== activeToken,
    });
    const scale = config.scale || token.scale || 0.8;

    return (
      <g className={className} transform={transform({ ...config, scale })}>
        <image xlinkHref={token.image} width={token.w} onClick={this.click} onDoubleClick={this.doubleClick} />
      </g>
    );
  }
}

Token.propTypes = {
  scene: PropTypes.object.isRequired,
  tile: PropTypes.object.isRequired,
  token: PropTypes.shape({
    token: PropTypes.oneOf(Object.values(TOKEN)).isRequired,
    rotate: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  activeTile: PropTypes.object,
  activeToken: PropTypes.object,
  onTokenClick: PropTypes.func,
  onTokenDoubleClick: PropTypes.func,
};

Token.defaultProps = {
  activeTile: undefined,
  activeToken: undefined,
  onTokenClick: undefined,
  onTokenDoubleClick: undefined,
};

export default Token;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ModuleHead extends Component {
  click = event => {
    const { onClick } = this.props;
    onClick && onClick();
  };

  render() {
    const { className, children, onClick, ...other } = this.props;
    return (
      <div className={classNames('card-header', className)} onClick={this.click} {...other}>
        {this.props.children}
      </div>
    );
  }
}

ModuleHead.propTypes = {
  onClick: PropTypes.func,
};

ModuleHead.defaultProps = {};

export default ModuleHead;

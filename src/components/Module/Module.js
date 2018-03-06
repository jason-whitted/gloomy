import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ModuleHead from './ModuleHead';
import ModuleBody from './ModuleBody';

class Module extends Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.open };
  }

  toggle = () => {
    const show = !this.state.show;
    this.setState({ show });
  };

  render() {
    const { className, children, open, ...other } = this.props;
    return (
      <div className={classNames('card my-3', className)} {...other}>
        {React.cloneElement(children[0], { onClick: this.toggle })}
        {this.state.show && children.slice(1)}
      </div>
    );
  }
}

Module.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
};

Module.defaultProps = {
  className: '',
  open: false,
};

Module.Head = ModuleHead;
Module.Body = ModuleBody;

export default Module;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class Flyout extends Component {
  state = { open: false };

  componentWillMount() {
    this.id = shortid.generate();
  }

  toggle = event => {
    event && event.preventDefault();
    event && event.stopPropagation();
    this.setState({ open: !this.state.open });
  };

  render() {
    const { text, children, popover, ...other } = this.props;

    return (
      <Fragment>
        <a id={this.id} href="#flyout" onClick={this.toggle} {...other}>
          {text}
        </a>
        <Popover placement="bottom" isOpen={this.state.open} target={this.id} toggle={this.toggle} {...popover}>
          {children}
        </Popover>
      </Fragment>
    );
  }
}

Flyout.propTypes = {
  text: PropTypes.node,
};

Flyout.defaultProps = {};

Flyout.Head = PopoverHeader;
Flyout.Body = PopoverBody;

export default Flyout;

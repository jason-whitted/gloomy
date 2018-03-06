import React, { Component } from 'react';
import { DropdownItem } from 'reactstrap';

class RichSelectOption extends Component {
  click = event => {
    this.props.onClick(this.props.option);
  };

  render() {
    return <DropdownItem onClick={this.click}>{this.props.children}</DropdownItem>;
  }
}

export default RichSelectOption;

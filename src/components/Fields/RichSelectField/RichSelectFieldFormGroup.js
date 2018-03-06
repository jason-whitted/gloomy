import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import RichSelectOption from './RichSelectOption';

class RichSelectFieldFormGroup extends Component {
  state = { open: false };

  toggle = () => this.setState({ open: !this.state.open });

  focus = event => {
    this.props.input.onFocus(event);
  };

  blur = event => {
    this.props.input.onBlur(event);
  };

  click = option => {
    this.props.input.onChange(this.props.selectKey(option));
  };

  render() {
    const { input, label, meta: { touched, error }, selectKey, options, render: Render } = this.props;
    const hasError = touched && !!error;

    const isInvalid = { 'is-invalid': hasError };

    const selected = options.find(o => selectKey(o) == input.value); // eslint-disable-line eqeqeq

    return (
      <div className={classNames('RichSelectField form-group', isInvalid)}>
        <label htmlFor={input.name}>{label}</label>
        {hasError && (
          <div className="float-right invalid-feedback">
            <i className="fa fa-fw fa-exclamation-circle" />
            {error}
          </div>
        )}
        <Dropdown id={input.name} isOpen={this.state.open} toggle={this.toggle}>
          <DropdownToggle
            tabIndex="0"
            tag="div"
            role="button"
            className={classNames('form-control text-left', isInvalid)}
            onFocus={this.focus}
            onBlur={this.blur}
          >
            <i className="fa fa-fw fa-caret-down float-right" />
            {selected && <Render option={selected} />}
          </DropdownToggle>
          <DropdownMenu className="w-100">
            {options.map(o => (
              <RichSelectOption key={selectKey(o)} option={o} onClick={this.click}>
                <Render option={o} />
              </RichSelectOption>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

RichSelectFieldFormGroup.propTypes = {
  label: PropTypes.node.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  selectKey: PropTypes.func,
};

RichSelectFieldFormGroup.defaultProps = {
  selectKey: o => o.id,
};

export default RichSelectFieldFormGroup;

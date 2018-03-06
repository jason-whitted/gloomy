import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SelectFieldFormGroup = props => {
  const { input, label, meta: { touched, error }, children, ...other } = props;
  const hasError = touched && !!error;

  const isInvalid = { 'is-invalid': hasError };

  return (
    <div className={classNames('form-group', isInvalid)}>
      <label htmlFor={input.name}>{label}</label>
      {hasError && (
        <div className="float-right invalid-feedback">
          <i className="fa fa-fw fa-exclamation-circle" />
          {error}
        </div>
      )}
      <select id={input.name} className={classNames('form-control', isInvalid)} {...input} {...other}>
        {children}
      </select>
    </div>
  );
};

SelectFieldFormGroup.propTypes = {
  label: PropTypes.node.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

SelectFieldFormGroup.defaultProps = {};

export default SelectFieldFormGroup;

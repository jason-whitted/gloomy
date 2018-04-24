import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CheckboxFieldFormGroup = props => {
  const { input, label, meta: { touched, error }, ...other } = props;
  const hasError = touched && !!error;

  const isInvalid = { 'is-invalid': hasError };

  return (
    <div className={classNames('form-check', isInvalid)}>
      <input
        type="checkbox"
        id={input.name}
        className={classNames('form-check-input', isInvalid)}
        {...input}
        checked={input.value}
        {...other}
      />
      <label htmlFor={input.name} className="form-check-label">
        {label}
      </label>
      {hasError && (
        <div className="float-right invalid-feedback">
          <i className="fa fa-fw fa-exclamation-circle" />
          {error}
        </div>
      )}
    </div>
  );
};

CheckboxFieldFormGroup.propTypes = {
  label: PropTypes.node.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

CheckboxFieldFormGroup.defaultProps = {};

export default CheckboxFieldFormGroup;

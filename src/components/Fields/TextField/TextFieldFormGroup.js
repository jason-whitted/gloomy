import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'reactstrap';

const TextFieldFormGroup = props => {
  const { input, label, meta: { touched, error }, onRandom, ...other } = props;
  const hasError = touched && !!error;

  const isInvalid = { 'is-invalid': hasError };

  return (
    <div className={classNames('form-group', isInvalid)}>
      <label htmlFor={input.name}>{label}</label>
      {onRandom && (
        <Button color="primary" type="button" title="Random" size="sm" className="p-1 ml-2" onClick={onRandom}>
          <i className="fa fa-fw fa-random" />
        </Button>
      )}
      {hasError && (
        <div className="float-right invalid-feedback">
          <i className="fa fa-fw fa-exclamation-circle" />
          {error}
        </div>
      )}
      <input
        type="text"
        id={input.name}
        className={classNames('form-control', isInvalid)}
        autoComplete="off"
        {...input}
        {...other}
      />
    </div>
  );
};

TextFieldFormGroup.propTypes = {
  label: PropTypes.node.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  onRandom: PropTypes.func,
};

TextFieldFormGroup.defaultProps = {
  onRandom: undefined,
};

export default TextFieldFormGroup;

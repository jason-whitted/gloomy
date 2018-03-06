import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import formConfig from './form';
import { TextField } from '../../Fields';

class Existing extends Component {
  submit = values => {
    const { addConfig, changeTab } = this.props;
    addConfig(values).then(() => changeTab('current'));
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <h5>Link to Existing Campaign</h5>
        <TextField name="id" label="Campaign ID:" autoFocus />
        <button type="submit" className="btn btn-success" disabled={submitting}>
          Submit
        </button>
      </form>
    );
  }
}

Existing.propTypes = {
  addConfig: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

Existing.defaultProps = {};

export default reduxForm(formConfig)(Existing);

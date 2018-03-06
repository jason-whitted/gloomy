import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import formConfig from './form';
import { TextField } from '../../Fields';

class Create extends Component {
  submit = values => {
    const { changeTab, createCampaign } = this.props;
    createCampaign(values).then(() => changeTab('current'));
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <h5>Create New Campaign</h5>
        <TextField name="name" label="Name:" autoFocus />
        <button type="submit" className="btn btn-success" disabled={submitting}>
          Submit
        </button>
      </form>
    );
  }
}

Create.propTypes = {
  changeTab: PropTypes.func.isRequired,
  createCampaign: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

Create.defaultProps = {};

export default reduxForm(formConfig)(Create);

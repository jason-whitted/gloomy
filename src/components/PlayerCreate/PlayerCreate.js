import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

import { ACTION, ACTION_CONFIG } from '../../constants';
import { TextField } from '../Fields';

import formConfig from './form';

class PlayerCreate extends Component {
  submit = values => {
    const { appendCampaignAction, history, match } = this.props;
    const { name } = values;
    const action = ACTION_CONFIG[ACTION.PLAYER_CREATE].create({ name });
    return appendCampaignAction({ action }).then(() => history.push(`/campaign/${match.params.campaignID}`));
  };

  cancel = event => {
    const { campaignID } = this.props.match.params;
    this.props.history.push(`/campaign/${campaignID}`);
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="card my-3">
        <div className="card-header">Create Player</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(this.submit)}>
            <TextField name="name" label="Name:" autoFocus />
            <div>
              <button className="btn btn-success" disabled={submitting}>
                Submit
              </button>
              <button className="btn btn-outline-secondary m-2" onClick={this.cancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PlayerCreate.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  // withRouter
  history: PropTypes.object.isRequired,
};

export default compose(reduxForm(formConfig), withRouter)(PlayerCreate);

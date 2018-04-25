import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { TextField } from '../../Fields';
import connectConfig from './connect';
import formConfig from './form';

class CampaignContributorsDialog extends Component {
  state = { suggestions: [] };

  componentWillMount() {
    const { campaign } = this.props;
    const suggestions = Object.keys(
      campaign.history.reduce(
        (obj, hist) => ({
          ...obj,
          [hist.by]: true,
        }),
        {},
      ),
    ).sort();
    this.setState({ suggestions });

    const { contributors } = campaign;
    this.props.initialize({
      contributorCount: contributors.length,
      contributors,
    });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    const { appendCampaignAction } = this.props;
    const { contributors } = values;
    const action = ACTION_CONFIG[ACTION.CAMPAIGN_CONTRIBUTORS].create({
      contributors,
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  render() {
    const { formValues, handleSubmit } = this.props;
    const { suggestions } = this.state;
    const contributorCount = parseInt(formValues.contributorCount, 10) || 0;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Campaign Contributors</ModalHeader>
          <ModalBody>
            <Alert color="info">
              <p>You own the campaign and will always be able to contribute - even if not explicitly listed.</p>
              Specify the Github usernames that can contribute to this campaign.<br />
              <hr className="m-0" />
              <div className="small">Suggestions: {suggestions.join(', ')}</div>
            </Alert>
            {!contributorCount && (
              <Alert color="warning">No contributors are specified. Everyone can contribute.</Alert>
            )}
            <TextField name="contributorCount" label="# of Contributors:" type="number" min="0" autoFocus />
            {Array(contributorCount)
              .fill(0)
              .map((_, i) => <TextField key={i} name={`contributors[${i}]`} label="Contributor:" required />)}
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

CampaignContributorsDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  formValues: PropTypes.object.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default compose(connect(...connectConfig), reduxForm(formConfig))(CampaignContributorsDialog);

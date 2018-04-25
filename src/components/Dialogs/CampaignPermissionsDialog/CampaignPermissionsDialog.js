import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import * as CONST from '../../../constants';
import { SelectField } from '../../Fields';
import formConfig from './form';

class CampaignPermissionsDialog extends Component {
  componentWillMount() {
    const { campaign, initialize } = this.props;
    initialize({
      permissions: campaign.permissions.split(''),
    });
  }

  submit = values => {
    const { appendCampaignAction } = this.props;
    const action = CONST.ACTION_CONFIG[CONST.ACTION.CAMPAIGN_PERMISSIONS].create({
      permissions: values.permissions.join(''),
    });
    appendCampaignAction({ action });
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <Modal className="CampaignPermissionsDialog" isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Campaign Permissions</ModalHeader>
          <ModalBody>
            {Object.values(CONST.PERMISSION_GROUP_CONFIG).map(group => (
              <Fragment key={group.id}>
                <Alert color="info">
                  <h5 className="mb-0">{group.name}</h5>
                  <hr className="m-0" />
                  <div className="small">{group.description}</div>
                </Alert>
                {Object.values(CONST.PERMISSION_RULE_CONFIG)
                  .filter(r => r.group === group.id)
                  .map(r => (
                    <SelectField key={r.id} name={`permissions[${r.id}]`} label={`${r.name}:`}>
                      {Object.values(CONST.PERMISSION_TYPE_CONFIG[r.type].values).map(t => (
                        <option key={t.value} value={t.value}>
                          {t.name}
                        </option>
                      ))}
                    </SelectField>
                  ))}
              </Fragment>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color="success" disabled={submitting}>
              Submit
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

CampaignPermissionsDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CampaignPermissionsDialog.defaultProps = {};

export default reduxForm(formConfig)(CampaignPermissionsDialog);

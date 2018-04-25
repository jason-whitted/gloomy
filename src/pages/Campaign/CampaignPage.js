import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Breadcrumb } from '../../components/Breadcrumb';
import { CampaignSheet } from '../../components/CampaignSheet';
import { HistoryList } from '../../components/HistoryList';
import connectConfig from './connect';

class Campaign extends Component {
  componentWillMount() {
    const { getCampaign, match } = this.props;
    const { campaignID } = match.params;
    getCampaign({ id: campaignID });
  }

  refresh = () => {
    const { campaignID: id, getCampaign } = this.props;
    getCampaign({ id, force: true });
  };

  render() {
    const { loading } = this.props;

    if (loading) return 'Loading...';

    return (
      <div className="col-12">
        <Breadcrumb />
        <h4>
          Campaign{' '}
          <button className="btn btn-sm btn-outline-success" onClick={this.refresh}>
            <i className="fa fa-fw fa-refresh" />
          </button>
        </h4>
        <CampaignSheet {...this.props} />
        <div className="row">
          <div className="col-12 col-md-6">
            <HistoryList {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

Campaign.propTypes = {
  // connect
  campaign: PropTypes.object.isRequired,
  getCampaign: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // withRouter
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

Campaign.defaultProps = {};

export default compose(connect(...connectConfig), withRouter)(Campaign);

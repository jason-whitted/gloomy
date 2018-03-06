import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Breadcrumb } from '../../components/Breadcrumb';
import { PartySheet } from '../../components/PartySheet';

import connectConfig from './connect';

class PartyPage extends Component {
  componentWillMount() {
    const { campaignID } = this.props.match.params;
    this.props.getCampaign({ id: campaignID });
  }

  refresh = () => {
    const { campaignID } = this.props.match.params;
    this.props.getCampaign({ id: campaignID, force: true });
  };

  render() {
    const { loading, campaign, match } = this.props;
    const { partyID } = match.params;

    if (loading) {
      return 'Loading...';
    }

    const party = campaign.parties.find(p => p.id == partyID); // eslint-disable-line eqeqeq

    return (
      <div className="col-12">
        <Breadcrumb />
        <h4>
          Party{' '}
          <button className="btn btn-sm btn-outline-success" onClick={this.refresh}>
            <i className="fa fa-fw fa-refresh" />
          </button>
        </h4>
        <PartySheet {...this.props} party={party} />
      </div>
    );
  }
}

PartyPage.propTypes = {
  // connect
  campaign: PropTypes.object.isRequired,
  getCampaign: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // withRouter
  match: PropTypes.object.isRequired,
};

PartyPage.defaultProps = {};

export default compose(connect(...connectConfig), withRouter)(PartyPage);

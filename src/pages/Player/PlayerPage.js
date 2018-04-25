import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Breadcrumb } from '../../components/Breadcrumb';
import { PlayerSheet } from '../../components/PlayerSheet';
import connectConfig from './connect';

class PlayerPage extends Component {
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
    const { playerID } = match.params;

    if (loading) {
      return 'Loading...';
    }

    // eslint-disable-next-line eqeqeq
    const player = campaign.players.find(p => p.id == playerID);

    return (
      <div className="col-12">
        <Breadcrumb />
        <h4>
          Player{' '}
          <button className="btn btn-sm btn-outline-success" onClick={this.refresh}>
            <i className="fa fa-fw fa-refresh" />
          </button>
        </h4>
        <PlayerSheet {...this.props} player={player} />
      </div>
    );
  }
}

PlayerPage.propTypes = {
  // connect
  campaign: PropTypes.object.isRequired,
  getCampaign: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // withRouter
  match: PropTypes.object.isRequired,
};

PlayerPage.defaultProps = {};

export default compose(connect(...connectConfig), withRouter)(PlayerPage);

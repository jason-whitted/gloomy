import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { ACTION, ACTION_CONFIG } from '../../constants';
import { Module } from '../Module';
import History from './History';
import './styles.css';

class HistoryList extends Component {
  onDelete = ({ id }) => {
    const action = ACTION_CONFIG[ACTION.DELETE_ACTION].create({ id });
    this.props.appendCampaignAction({ action });
  };

  render() {
    const { campaign } = this.props;

    return (
      <Module className="HistoryList">
        <Module.Head>History ({campaign.history.length})</Module.Head>
        <ul className="list-group">
          {campaign.history
            .slice()
            .reverse()
            .map(h => <History key={h.id} {...this.props} history={h} onDelete={this.onDelete} />)}
        </ul>
      </Module>
    );
  }
}

HistoryList.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  // withRouter
  history: PropTypes.object.isRequired,
};

export default withRouter(HistoryList);

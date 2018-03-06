import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Campaign from './Campaign';

class Current extends Component {
  onDelete = id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to permanently delete this campaign?')) {
      this.props.deleteCampaign({ id });
    }
  };

  onRemove = id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to unlink this campaign?')) {
      this.props.removeConfig({ id });
    }
  };

  onSelect = id => {
    const { getCampaign, history } = this.props;
    getCampaign({ id }).then(() => {
      history.push(`/campaign/${id}`);
    });
  };

  refresh = () => {
    this.props.getConfig({ force: true });
  };

  render() {
    const { config } = this.props;

    return !config.campaigns.length ? (
      <div>
        <h5>Yikes, you have no campaigns!</h5>
        <p>Create a new one or link to an existing one to get started.</p>
      </div>
    ) : (
      <div>
        <h5>
          Current Campaigns{' '}
          <button className="btn btn-sm btn-outline-success" onClick={this.refresh}>
            <i className="fa fa-fw fa-refresh" />
          </button>
        </h5>
        <ul className="list-group">
          {config.campaigns.map(c => (
            <Campaign key={c.id} {...c} onDelete={this.onDelete} onRemove={this.onRemove} onSelect={this.onSelect} />
          ))}
        </ul>
      </div>
    );
  }
}

Current.propTypes = {
  config: PropTypes.object.isRequired,
  deleteCampaign: PropTypes.func.isRequired,
  getCampaign: PropTypes.func.isRequired,
  getConfig: PropTypes.func.isRequired,
  removeConfig: PropTypes.func.isRequired,
  // withRouter
  history: PropTypes.object.isRequired,
};

export default withRouter(Current);

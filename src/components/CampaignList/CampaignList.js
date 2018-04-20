import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import connectConfig from './connect';
import { Create } from './Create';
import { Current } from './Current';
import { Existing } from './Existing';
import Tab from './Tab';

const TABS = [
  { name: 'current', icon: 'fa-list-ul', title: 'Campaigns', shortTitle: 'Campaigns', Content: Current },
  { name: 'create', icon: 'fa-plus-square', title: 'Create New', shortTitle: 'New', Content: Create },
  { name: 'existing', icon: 'fa-external-link', title: 'Link to Existing', shortTitle: 'Existing', Content: Existing },
];

class CampaignList extends Component {
  state = { tab: 'current' };

  componentWillMount() {
    const { getConfig, getUser } = this.props;
    getUser().then(getConfig);
  }

  changeTab = tab => {
    this.setState({ tab });
  };

  render() {
    const { appendCampaignAction, config } = this.props;
    const active = t => t.name === this.state.tab;
    const { Content } = TABS.find(active);
    const loading = (this.props.loading && Content !== Create) || !config;

    return (
      <div className="card my-3">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            {TABS.map(tab => (
              <Tab
                key={tab.name}
                {...tab}
                active={active(tab)}
                onClick={this.changeTab}
                appendCampaignAction={appendCampaignAction}
              />
            ))}
          </ul>
        </div>
        <div className="card-body">
          {loading && 'Loading...'}
          {!loading && <Content {...this.props} changeTab={this.changeTab} />}
        </div>
      </div>
    );
  }
}

CampaignList.propTypes = {
  config: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  addConfig: PropTypes.func.isRequired,
  appendCampaignAction: PropTypes.func.isRequired,
  createCampaign: PropTypes.func.isRequired,
  createConfig: PropTypes.func.isRequired,
  deleteCampaign: PropTypes.func.isRequired,
  getCampaign: PropTypes.func.isRequired,
  getConfig: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  removeConfig: PropTypes.func.isRequired,
};

CampaignList.defaultProps = {
  config: undefined,
  user: undefined,
};

export default connect(...connectConfig)(CampaignList);

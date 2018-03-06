import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CampaignIcon } from '../../Icons';

class Campaign extends Component {
  select = event => {
    event.preventDefault();
    this.props.onSelect(this.props.id);
  };

  remove = event => {
    event.preventDefault();
    this.props.onRemove(this.props.id);
  };

  delete = event => {
    event.preventDefault();
    this.props.onDelete(this.props.id);
  };

  render() {
    const { name, owner } = this.props;

    return (
      <li className="list-group-item list-group-item-action">
        <button className="btn btn-link" onClick={this.select}>
          <CampaignIcon /> {name}
        </button>
        {owner && (
          <button className="btn btn-sm btn-outline-danger float-right" title="Delete" onClick={this.delete}>
            <i className="fa fa-fw fa-trash-o" />
          </button>
        )}
        {!owner && (
          <button className="btn btn-sm btn-outline-warning float-right" title="Remove" onClick={this.remove}>
            <i className="fa fa-fw fa-chain-broken" />
          </button>
        )}
      </li>
    );
  }
}

Campaign.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  owner: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

Campaign.defaultProps = {};

export default Campaign;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import { ABILITY_CARD_CONFIG, AUGMENT_CONFIG, PERK_CONFIG, SCENARIO_CONFIG } from '../../constants';
import * as ACTION from './Action';

class History extends Component {
  delete = event => {
    this.props.onDelete(this.props.history);
  };

  stringify(json) {
    const { characters, parties, players } = this.props.campaign;

    const getById = (array, id) => array.find(o => o.id === id) || {};

    return Object.entries(json)
      .reduce((s, [k, v]) => {
        let value = v;
        if (k === 'id') return s;
        if (k === 'ability') value = (ABILITY_CARD_CONFIG[v] || {}).name || v;
        if (k === 'augment') value = (AUGMENT_CONFIG[v] || {}).name || v;
        if (k === 'character') value = getById(characters, v).name || v;
        if (k === 'party') value = getById(parties, v).name || v;
        if (k === 'player') value = getById(players, v).name || v;
        if (k === 'perk') value = (PERK_CONFIG[v] || {}).name || v;
        if (k === 'scenario') value = (SCENARIO_CONFIG[v] || {}).name || v;
        if (typeof value === 'object') value = JSON.stringify(value, null, 2);
        return `${s}\n${k}: ${value}`;
      }, '')
      .trim();
  }

  render() {
    const { id, action, payload, dt, by, deleted } = this.props.history;
    const Action = ACTION[action] || ACTION.Bug;

    return (
      <li className={classNames('list-group-item list-group-item-action', { 'text-muted': deleted, deleted })}>
        <div title={this.stringify(payload)}>
          <Action campaign={this.props.campaign} action={this.props.history} />
          <div className="small float-right ml-2">
            {id}
            <button
              type="button"
              className={`btn btn-outline-${deleted ? 'secondary' : 'danger'} btn-sm p-0 m-0 ml-1`}
              title="Delete"
              onClick={this.delete}
              disabled={deleted}
            >
              <i className="fa fa-fw fa-times" />
            </button>
          </div>
        </div>
        <div className="small">
          {by}
          <div className="float-right" title={moment(dt).format('L LT')}>
            {moment(dt).fromNow()}
          </div>
        </div>
      </li>
    );
  }
}

History.propTypes = {
  history: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

History.defaultProps = {};

export default History;

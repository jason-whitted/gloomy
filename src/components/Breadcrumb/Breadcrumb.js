import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import BreadcrumbLink from './BreadcrumbLink';

class Breadcrumb extends Component {
  render() {
    const { campaignID, characterID, partyID, playerID } = this.props.match.params;

    const pages = [
      { name: 'Home', condition: true, url: '/' },
      { name: 'Campaign', condition: campaignID, url: `/campaign/${campaignID}` },
      { name: 'Create Character', condition: false, url: `/campaign/${campaignID}/character/create` },
      { name: 'Character', condition: characterID, url: `/campaign/${campaignID}/character/${characterID}` },
      { name: 'Create Party', condition: false, url: `/campaign/${campaignID}/party/create` },
      { name: 'Party', condition: partyID, url: `/campaign/${campaignID}/party/${partyID}` },
      { name: 'Create Player', condition: false, url: `/campaign/${campaignID}/player/create` },
      { name: 'Player', condition: playerID, url: `/campaign/${campaignID}/player/${playerID}` },
    ];

    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb small">{pages.map(BreadcrumbLink)}</ol>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  // withRouter
  match: PropTypes.object.isRequired,
};

Breadcrumb.defaultProps = {};

export default withRouter(Breadcrumb);

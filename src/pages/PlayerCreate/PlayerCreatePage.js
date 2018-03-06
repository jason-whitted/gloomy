import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Breadcrumb } from '../../components/Breadcrumb';
import { PlayerCreate } from '../../components/PlayerCreate';

import connectConfig from './connect';

class PlayerCreatePage extends Component {
  render() {
    return (
      <div className="col-12">
        <Breadcrumb />
        <PlayerCreate {...this.props} />
      </div>
    );
  }
}

PlayerCreatePage.propTypes = {
  // react-redux
  appendCampaignAction: PropTypes.func.isRequired,
};

PlayerCreatePage.defaultProps = {};

export default connect(...connectConfig)(PlayerCreatePage);

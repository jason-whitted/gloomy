import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Breadcrumb } from '../../components/Breadcrumb';
import { PartyCreate } from '../../components/PartyCreate';

import connectConfig from './connect';

class PartyCreatePage extends Component {
  render() {
    return (
      <div className="col-12">
        <Breadcrumb />
        <PartyCreate {...this.props} />
      </div>
    );
  }
}

PartyCreatePage.propTypes = {
  // react-redux
  appendCampaignAction: PropTypes.func.isRequired,
};

PartyCreatePage.defaultProps = {};

export default connect(...connectConfig)(PartyCreatePage);

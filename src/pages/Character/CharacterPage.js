import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Breadcrumb } from '../../components/Breadcrumb';
import { CharacterSheet } from '../../components/CharacterSheet';

import connectConfig from './connect';

class CharacterPage extends Component {
  componentWillMount() {
    const { campaignID } = this.props.match.params;
    this.props.getCampaign({ id: campaignID });
  }

  refresh = () => {
    const { campaignID } = this.props.match.params;
    this.props.getCampaign({ id: campaignID, force: true });
  };

  render() {
    const { campaign, loading, match } = this.props;
    const { characterID } = match.params;

    if (loading) {
      return 'Loading...';
    }

    // eslint-disable-next-line eqeqeq
    const character = campaign.characters.find(c => c.id == characterID);

    return (
      <div className="col-12">
        <Breadcrumb />
        <h4>
          Character{' '}
          <button className="btn btn-sm btn-outline-success" onClick={this.refresh}>
            <i className="fa fa-fw fa-refresh" />
          </button>
        </h4>
        <CharacterSheet {...this.props} character={character} />
      </div>
    );
  }
}

CharacterPage.propTypes = {
  // connect
  campaign: PropTypes.object.isRequired,
  getCampaign: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // withRouter
  match: PropTypes.object.isRequired,
};

CharacterPage.defaultProps = {};

export default compose(connect(...connectConfig), withRouter)(CharacterPage);

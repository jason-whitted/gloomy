import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { SCENARIO_CONFIG } from '../../constants';

class ScenarioMapPage extends Component {
  render() {
    const scenario = SCENARIO_CONFIG[this.props.match.params.scenario];

    return <div className="col-12">Coming soon...</div>;
  }
}

ScenarioMapPage.propTypes = {
  // withRouter
  match: PropTypes.object.isRequired,
};

ScenarioMapPage.defaultProps = {};

export default withRouter(ScenarioMapPage);

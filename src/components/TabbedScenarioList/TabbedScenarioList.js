import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import { ScenarioList } from '../ScenarioList';

class TabbedScenarioList extends Component {
  state = { tab: 'available' };

  showTab = tab => event => this.setState({ tab });

  render() {
    const { scenarios } = this.props;
    const { tab } = this.state;

    const tabs = {
      available: { id: 'available', name: 'Available', scenarios: scenarios.filter(s => s.available) },
      completed: { id: 'completed', name: 'Completed', scenarios: scenarios.filter(s => s.complete) },
    };

    return (
      <div>
        <Nav tabs>
          {Object.values(tabs)
            .filter(t => t.scenarios.length > 0)
            .map(t => (
              <NavItem key={t.id}>
                <NavLink className={classNames({ active: tab === t.id })} onClick={this.showTab(t.id)}>
                  {t.name}
                </NavLink>
              </NavItem>
            ))}
        </Nav>
        <TabContent activeTab={tab}>
          {Object.values(tabs).map(t => (
            <TabPane key={t.id} tabId={t.id}>
              <ScenarioList scenarios={t.scenarios} />
            </TabPane>
          ))}
        </TabContent>
      </div>
    );
  }
}

TabbedScenarioList.propTypes = {
  scenarios: PropTypes.array.isRequired,
};

TabbedScenarioList.defaultProps = {};

export default TabbedScenarioList;

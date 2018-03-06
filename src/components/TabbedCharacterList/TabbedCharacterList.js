import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import { CharacterList } from '../CharacterList';

class TabbedCharacterList extends Component {
  state = { tab: 'active' };

  showTab = tab => event => this.setState({ tab });

  render() {
    const { characters } = this.props;
    const { tab } = this.state;

    const tabs = {
      active: { id: 'active', name: 'Active', characters: characters.filter(s => !s.hiatus && !s.retired) },
      hiatus: { id: 'hiatus', name: 'Hiatus', characters: characters.filter(s => s.hiatus) },
      retired: { id: 'retires', name: 'Retired', characters: characters.filter(s => s.retired) },
    };

    return (
      <div>
        <Nav tabs>
          {Object.values(tabs)
            .filter(t => t.characters.length > 0)
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
              <CharacterList characters={t.characters} />
            </TabPane>
          ))}
        </TabContent>
      </div>
    );
  }
}

TabbedCharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

TabbedCharacterList.defaultProps = {};

export default TabbedCharacterList;

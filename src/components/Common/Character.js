import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../Flyout';
import { ClassIcon, LinkIcon, StarIcon } from '../Icons';

import './styles.css';

class Character extends Component {
  click = event => {
    const { character, history } = this.props;
    history.push(character.url);
  };

  render() {
    const { character, noLevelUp, noIcon, noLink, level, class: $class } = this.props;
    return (
      <span className="character">
        {!noLevelUp && character.levelUp && <StarIcon title="Level up available!" />}
        {!noLevelUp && !character.levelUp && character.perkUp && <StarIcon title="Perk avaialble!" />}
        {!noIcon && <ClassIcon class={character.class} />}
        {!noLink && (
          <Flyout text={character.name}>
            <ListGroup>
              <ListGroupItem action onClick={this.click}>
                <LinkIcon /> Open Character Page&hellip;
              </ListGroupItem>
            </ListGroup>
          </Flyout>
        )}
        {noLink && character.name}
        {(level || $class) && ' - '}
        {level && `Level ${character.level} `}
        {$class && `${character.race.name} ${character.class.name}`}
      </span>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
  noLevelUp: PropTypes.bool,
  noIcon: PropTypes.bool,
  noLink: PropTypes.bool,
  level: PropTypes.bool,
  class: PropTypes.bool,
};

Character.defaultProps = {
  noLevelUp: false,
  noIcon: false,
  noLink: false,
  level: false,
  class: false,
};

export default withRouter(Character);

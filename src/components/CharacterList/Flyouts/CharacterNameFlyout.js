import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { Character } from '../../Common';
import { StarIcon } from '../../Icons';

class CharacterNameFlyout extends Component {
  click = event => {
    const { history, character } = this.props;
    history.push(character.url);
  };

  render() {
    const { character } = this.props;

    const text = <Character character={character} noLevelUp />;

    return (
      <Fragment>
        {character.levelUp && <StarIcon title="Level up available!" />}
        <Flyout text={text}>
          <ListGroup>
            <ListGroupItem action onClick={this.click}>
              <i className="fa fa-fw fa-link" /> Open Character Page
            </ListGroupItem>
          </ListGroup>
        </Flyout>
      </Fragment>
    );
  }
}

CharacterNameFlyout.propTypes = {
  character: PropTypes.object.isRequired,
  // withRouter
  history: PropTypes.object.isRequired,
};

CharacterNameFlyout.defaultProps = {};

export default withRouter(CharacterNameFlyout);

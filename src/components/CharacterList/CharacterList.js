import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Character } from '../Common';
import { StarIcon } from '../Icons';

class CharacterList extends Component {
  state = { open: false };

  toggle = event => this.setState({ open: !this.state.open });

  render() {
    const { characters } = this.props;

    if (!characters.length)
      return (
        <div>
          <StarIcon />
          This campaign needs characters!
        </div>
      );

    if (this.state.open || characters.length < 3) {
      return (
        <ListGroup>
          {characters.map(p => (
            <ListGroupItem key={p.id}>
              <Character character={p} />
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }

    return (
      <ListGroup>
        <ListGroupItem>
          <Character character={characters[0]} />
        </ListGroupItem>
        <ListGroupItem tag="a" href="#expand" onClick={this.toggle}>
          &hellip;and {characters.length - 1} other{characters.length === 2 ? '' : 's'}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

CharacterList.defaultProps = {};

export default CharacterList;

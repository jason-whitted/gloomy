import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

import { CLASS_CONFIG, RACE_CONFIG } from '../../../../constants';
import { ClassIcon } from '../../../../components/Icons';

class CharacterRow extends Component {
  click = () => this.props.onEdit(this.props.character);

  render() {
    const { character } = this.props;
    const $class = CLASS_CONFIG[character.class];
    const race = RACE_CONFIG[$class.race];

    return (
      <ListGroupItem tag="button" type="button" action onClick={this.click}>
        <ClassIcon class={$class} /> {character.name} - Level {character.level} {race.name} {$class.name}
      </ListGroupItem>
    );
  }
}
export default CharacterRow;

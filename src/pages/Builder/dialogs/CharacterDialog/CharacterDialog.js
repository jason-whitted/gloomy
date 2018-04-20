import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import clone from 'clone';

import { CLASS_CONFIG, PERSONAL_QUEST_CONFIG, RACE_CONFIG } from '../../../../constants';
import { RichSelectField, TextField, SelectField } from '../../../../components/Fields';
import { ClassIcon } from '../../../../components/Icons';
import connectConfig from './connect';
import formConfig from './form';

class CharacterDialog extends Component {
  componentWillMount() {
    const { character, initialize } = this.props;

    initialize({
      player: character.player,
      party: character.party,
      class: character.class,
      name: character.name,
      level: character.level || 1,
      quest: character.quest,
      retired: character.retired ? 'retired' : 'active',
      bonusPerks: character.bonusPerks || 0,
    });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    this.props.onSubmit(orig => {
      const character = {
        player: parseInt(values.player, 10),
        party: parseInt(values.party, 10),
        class: values.class,
        name: values.name,
        level: parseInt(values.level, 10),
        quest: parseInt(values.quest, 10),
        retired: values.retired === 'retired',
        bonusPerks: parseInt(values.bonusPerks, 10),
      };

      const index = this.props.build.characters.indexOf(this.props.character);
      const build = clone(orig);

      if (index < 0) build.characters.push(character);
      else build.characters[index] = character;

      return build;
    });
  };

  deleteCharacter = () => {
    this.props.onSubmit(orig => {
      const build = clone(orig);
      const index = this.props.build.characters.indexOf(this.props.character);
      if (index >= 0) build.characters.splice(index, 1);
      return build;
    });
  };

  render() {
    const { build, character, formValues, handleSubmit } = this.props;
    const retired = formValues.retired === 'retired';
    const classes = Object.entries(build.classes).reduce((arr, [k, v]) => (v ? [...arr, CLASS_CONFIG[k]] : arr), []);

    const Class = ({ option: $class }) => (
      <div>
        <ClassIcon class={$class.id} /> {RACE_CONFIG[$class.race].name} {$class.name}
      </div>
    );

    const existing = build.characters.includes(character);

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Character</ModalHeader>
          <ModalBody>
            <SelectField name="player" label="Player:">
              <option />
              {Object.values(build.players).map((p, i) => (
                <option key={i} value={i}>
                  {p}
                </option>
              ))}
            </SelectField>
            <SelectField name="party" label="Party:">
              <option />
              {Object.values(build.parties).map((p, i) => (
                <option key={i} value={i}>
                  {p}
                </option>
              ))}
            </SelectField>
            <RichSelectField name="class" label="Class:" options={classes} selectValue={c => c.id} render={Class} />
            <TextField name="name" label="Name:" />
            <TextField name="level" label="Level:" type="number" min="1" max="9" />
            <SelectField name="quest" label="Personal Quest:">
              <option />
              {Object.values(PERSONAL_QUEST_CONFIG).map(q => (
                <option key={q.id} value={q.id}>
                  {q.name}
                </option>
              ))}
            </SelectField>
            <SelectField name="retired" label="Retired?">
              <option value="active">No</option>
              <option value="retired">Yes</option>
            </SelectField>
            {!retired && <TextField name="bonusPerks" label="Bonus Perks (from retiring):" type="number" min="0" />}
          </ModalBody>
          <ModalFooter className="justify-content-between">
            <Button color="success" className="order-2">
              Submit
            </Button>
            {existing && (
              <Button color="danger" type="button" onClick={this.deleteCharacter} className="order-1">
                Delete
              </Button>
            )}
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default compose(connect(...connectConfig), reduxForm(formConfig))(CharacterDialog);

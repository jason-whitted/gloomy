import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { ListGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { CharacterDialog } from '../CharacterDialog';
import CharacterRow from './CharacterRow';
import formConfig from './form';

class CharactersDialog extends Component {
  state = { dialog: null, build: undefined };

  componentWillMount() {
    const { build } = this.props;
    this.setState({ build });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    this.props.onSubmit(build => this.state.build);
  };

  editCharacter = character => {
    const close = () => this.setState({ dialog: null });
    const submit = reduce => {
      this.setState({ build: reduce(this.state.build) });
      close();
    };
    this.setState({
      dialog: <CharacterDialog build={this.state.build} character={character} onClose={close} onSubmit={submit} />,
    });
  };

  addCharacter = () => this.editCharacter({});

  render() {
    const { handleSubmit } = this.props;
    const { build, dialog } = this.state;

    return (
      <Modal isOpen toggle={this.cancel}>
        {dialog}
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Characters</ModalHeader>
          <ModalBody>
            <Button type="button" color="info" onClick={this.addCharacter}>
              Add Character
            </Button>
            <ListGroup className="mt-3">
              {Object.values(build.characters).map((c, i) => (
                <CharacterRow key={i} character={c} onEdit={this.editCharacter} />
              ))}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default reduxForm(formConfig)(CharactersDialog);

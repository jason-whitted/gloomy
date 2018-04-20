import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Alert, Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { GLOBAL_ACHIEVEMENT_CONFIG } from '../../../../constants';
import { TextField } from '../../../../components/Fields';
import connectConfig from './connect';
import formConfig from './form';

class GlobalAchievementsDialog extends Component {
  state = { achievements: [] };

  componentWillMount() {
    const { build } = this.props;
    const achievements = Object.entries(build.globalAchievements).reduce(
      (arr, [key, val]) => [...arr, ...Array(parseInt(val, 10) || 0).fill(key)],
      [],
    );
    this.setState({ achievements });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    const { achievements } = this.state;

    this.props.onSubmit(build => ({
      ...build,
      globalAchievements: achievements.reduce(
        (obj, k) => ({
          ...obj,
          [k]: (obj[k] || 0) + 1,
        }),
        {},
      ),
    }));
  };

  add = achiev => event => {
    const achievements = [...this.state.achievements, achiev.id];
    this.props.change('search', '');
    this.setState({ achievements });
  };

  delete = index => event => {
    // eslint-disable-next-line
    if (confirm('Delete this achievement?')) {
      const achievements = this.state.achievements.filter((_, i) => i !== index);
      this.setState({ achievements });
    }
  };

  render() {
    const { formValues, handleSubmit } = this.props;
    const { achievements } = this.state;

    const results = !formValues.search
      ? []
      : Object.values(GLOBAL_ACHIEVEMENT_CONFIG).filter(a =>
          a.name.toLowerCase().includes(formValues.search.toLowerCase()),
        );
    const result = results.length === 1 && results[0];

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Global Achievements</ModalHeader>
          <ModalBody>
            <Alert color="info">
              <ul className="mb-0 small">
                <li>Search for each achievement by name and add it.</li>
                <li>If you have more than one of the same achievement, you will need to add it multiple times.</li>
                <li>You can remove an existing achievement by clicking it.</li>
              </ul>
            </Alert>
            <TextField name="search" label="Achievement Name:" autoFocus />
            {result && (
              <Button type="button" color="info" className="mb-3" onClick={this.add(result)}>
                {result.name}
              </Button>
            )}
            <div>Achievements:</div>
            <ListGroup>
              {achievements.map((achiev, i) => {
                return (
                  <ListGroupItem key={i} action tag="button" type="button" onClick={this.delete(i)}>
                    {GLOBAL_ACHIEVEMENT_CONFIG[achiev].name}
                  </ListGroupItem>
                );
              })}
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

export default compose(connect(...connectConfig), reduxForm(formConfig))(GlobalAchievementsDialog);

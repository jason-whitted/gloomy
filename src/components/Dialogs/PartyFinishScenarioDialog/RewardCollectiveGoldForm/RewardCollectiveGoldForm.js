import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Character } from '../../../Common';
import { TextField } from '../../../Fields';
import formConfig from './form';

class RewardCollectiveGoldForm extends Component {
  componentWillMount() {
    const { change, count } = this.props;
    change('goal', count);
  }

  render() {
    const { count, attendees, isOpen, onBack, onNext, onCancel, handleSubmit, invalid } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={onCancel}>
        <form onSubmit={handleSubmit(onNext)}>
          <ModalHeader toggle={onCancel}>Finish Scenario</ModalHeader>
          <ModalBody>
            <div className="alert alert-info">
              <h5 className="alert-heading">Scenario Reward:</h5>
              Distribute {count} collective gold.
            </div>
            <Field name="goal" component="input" type="hidden" />
            {attendees.map((c, i) => {
              const character = (
                <span>
                  <Character character={c} noLevelUp noLink />:
                </span>
              );
              return (
                <TextField
                  key={c.id}
                  name={`characters.c${c.id}`}
                  label={character}
                  type="number"
                  min="0"
                  max={count}
                  autoFocus={i === 0}
                />
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="button" onClick={onBack}>
              <i className="fa fa-fw fa-caret-left" /> Back
            </Button>
            <Button color="success" disabled={invalid}>
              Next <i className="fa fa-fw fa-caret-right" />
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default reduxForm(formConfig)(RewardCollectiveGoldForm);

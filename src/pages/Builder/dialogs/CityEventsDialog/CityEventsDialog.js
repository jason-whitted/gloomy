import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Alert, Badge, ButtonGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classNames from 'classnames';

import formConfig from './form';

class PlayersDialog extends Component {
  componentWillMount() {
    const { build } = this.props;
    const events = Array(81)
      .fill(0)
      .map((_, i) => (build.cityEvents.includes(i + 1) ? i + 1 : ''));
    this.props.initialize({ events });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    this.props.onSubmit(build => ({
      ...build,
      cityEvents: values.events.filter(v => v).map(Number),
    }));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>City Events</ModalHeader>
          <ModalBody>
            <Alert color="info">
              Mark the city events that are in your current event deck.
              <ul className="mb-0">
                <li>
                  <Badge color="info">Available</Badge>
                </li>
                <li>
                  <Badge color="danger">Unavailable/Removed</Badge>
                </li>
              </ul>
            </Alert>
            <ButtonGroup className="flex-wrap">
              {Array(81)
                .fill(0)
                .map((_, i) => {
                  const id = `events[${i}]`;
                  return (
                    <Field
                      key={id}
                      name={id}
                      component={({ input }) => {
                        const className = classNames('rounded-0 ml-0 btn btn-sm', {
                          'btn-info': input.value,
                          'btn-danger': !input.value,
                        });
                        const title = `City Event ${i + 1}: ${input.value ? 'Available' : 'Unavailable/Removed'}`;
                        return (
                          <Button
                            type="button"
                            className={className}
                            style={{ flex: '0 0 10%' }}
                            onClick={input.onChange}
                            value={!input.value ? i + 1 : ''}
                            title={title}
                          >
                            {i + 1}
                          </Button>
                        );
                      }}
                    />
                  );
                })}
            </ButtonGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default reduxForm(formConfig)(PlayersDialog);

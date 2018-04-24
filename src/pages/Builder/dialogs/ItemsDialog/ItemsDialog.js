import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Alert, Badge, ButtonGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classNames from 'classnames';

import formConfig from './form';

class ItemsDialog extends Component {
  componentWillMount() {
    const { build } = this.props;
    const items = Array(63)
      .fill(0)
      .map((_, i) => (build.items.includes(i + 71) ? i + 71 : ''));
    this.props.initialize({ items });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    this.props.onSubmit(build => ({
      ...build,
      items: values.items.filter(v => v).map(Number),
    }));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Items</ModalHeader>
          <ModalBody>
            <Alert color="info">
              Mark the status of items.
              <ul className="mb-0">
                <li>
                  <Badge color="info">Available</Badge>
                </li>
                <li>
                  <Badge color="danger">Unavailable</Badge>
                </li>
              </ul>
            </Alert>
            <ButtonGroup className="flex-wrap">
              {Array(63)
                .fill(0)
                .map((_, i) => {
                  const id = `items[${i}]`;
                  return (
                    <Field
                      key={id}
                      name={id}
                      component={({ input }) => {
                        const className = classNames('rounded-0 ml-0 btn btn-sm', {
                          'btn-info': input.value,
                          'btn-danger': !input.value,
                        });
                        const title = `Item ${i + 71}: ${input.value ? 'Available' : 'Unavailable'}`;
                        return (
                          <Button
                            type="button"
                            className={className}
                            style={{ flex: '0 0 10%' }}
                            onClick={input.onChange}
                            value={!input.value ? i + 71 : ''}
                            title={title}
                          >
                            {i + 71}
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

export default reduxForm(formConfig)(ItemsDialog);

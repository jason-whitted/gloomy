import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Alert, Badge, ButtonGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classNames from 'classnames';

import { SCENARIO_STATUS } from '../../../../constants';
import formConfig from './form';

class ScenariosDialog extends Component {
  componentWillMount() {
    const { build } = this.props;
    const scenarios = Array(95)
      .fill(0)
      .map((_, i) => build.scenarios[i + 1] || '');
    this.props.initialize({ scenarios });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    this.props.onSubmit(build => ({
      ...build,
      scenarios: values.scenarios.reduce(
        (obj, val, i) => ({
          ...obj,
          [i + 1]: values.scenarios[i] || undefined,
        }),
        build.scenarios,
      ),
    }));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Scenarios</ModalHeader>
          <ModalBody>
            <Alert color="info">
              Mark the current scenarios status for your build.
              <ul className="mb-0">
                <li>
                  <Badge color="success">Complete</Badge>
                </li>
                <li>
                  <Badge color="info">Available</Badge>
                </li>
                <li>
                  <Badge color="danger">Unavailable</Badge>
                </li>
              </ul>
            </Alert>
            <ButtonGroup className="flex-wrap">
              {Array(95)
                .fill(0)
                .map((_, i) => {
                  const id = `scenarios[${i}]`;
                  return (
                    <Field
                      key={id}
                      name={id}
                      component={({ input }) => {
                        // prettier-ignore
                        const nextValue =
                          !input.value ? SCENARIO_STATUS.AVAILABLE
                            : input.value === SCENARIO_STATUS.AVAILABLE ? SCENARIO_STATUS.COMPLETE
                            : '';
                        const title = `Scenario ${i + 1}: ${input.value || 'Unavailable'}`;
                        const className = classNames('rounded-0 ml-0 btn btn-sm', {
                          'btn-danger': !input.value,
                          'btn-info': input.value === SCENARIO_STATUS.AVAILABLE,
                          'btn-success': input.value === SCENARIO_STATUS.COMPLETE,
                        });
                        return (
                          <Button
                            type="button"
                            className={className}
                            style={{ flex: '0 0 10%' }}
                            onClick={input.onChange}
                            value={nextValue}
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

export default reduxForm(formConfig)(ScenariosDialog);

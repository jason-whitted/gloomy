import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { CLASS, CLASS_CONFIG, SCENARIO_STATUS } from '../../../../constants';
import connectConfig from './connect';
import formConfig from './form';
import ClassRow from './ClassRow';

class ClassesDialog extends Component {
  componentWillMount() {
    const { build } = this.props;
    const classes = Object.values(CLASS).reduce(
      (obj, id) => ({
        ...obj,
        [id]: {
          unlocked: !!build.classes[id],
          soloComplete: build.scenarios[id] === SCENARIO_STATUS.COMPLETE,
        },
      }),
      {},
    );
    this.props.initialize({ classes });
  }

  cancel = () => this.props.onClose();

  submit = values => {
    this.props.onSubmit(build => ({
      ...build,
      classes: Object.values(CLASS).reduce(
        (obj, id) => ({
          ...obj,
          [id]: values.classes[id].unlocked || undefined,
        }),
        {},
      ),
      scenarios: Object.values(CLASS).reduce(
        (obj, id) => ({
          ...obj,
          [id]: values.classes[id].soloComplete ? SCENARIO_STATUS.COMPLETE : undefined,
        }),
        build.scenarios,
      ),
    }));
  };

  render() {
    const { formValues, validate, handleSubmit } = this.props;
    const { showText } = formValues;
    const errors = validate(formValues);

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Classes</ModalHeader>
          <ModalBody>
            <label className="pull-right">
              <Field name="showText" component="input" type="checkbox" /> Show class names
            </label>
            <table className="table table-sm table-striped mb-0">
              <thead>
                <tr>
                  <th>Class</th>
                  <th className="text-center">Unlocked</th>
                  <th className="text-center">Solo Complete</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(CLASS_CONFIG).map(c => (
                  <ClassRow key={c.id} error={errors.classes && !!errors.classes[c.id]} showText={showText} {...c} />
                ))}
              </tbody>
            </table>
          </ModalBody>
          <ModalFooter>
            <Button color="success">Submit</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default compose(connect(...connectConfig), reduxForm(formConfig))(ClassesDialog);

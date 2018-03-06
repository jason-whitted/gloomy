import { errors } from '../../../../common';

const form = 'reward-choose1scenario';

const initialValues = {
  scenario: '',
};

const validate = ({ scenario }) =>
  errors({
    scenario: !scenario ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

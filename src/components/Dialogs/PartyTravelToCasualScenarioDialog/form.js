import { errors } from '../../../common';

const form = 'party-travel-to-casual-scenario';

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

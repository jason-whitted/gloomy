import { errors } from '../../../common';

const form = 'campaign-unlock-scenario';

const initialValues = {
  search: '',
  scenario: 0,
};

const validate = ({ scenario, search }) =>
  errors({
    search: !search ? 'Required' : !scenario ? 'Invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

import { errors } from '../../../common';

const form = 'character-add-checkmark';

const initialValues = {
  checks: '',
};

const validate = ({ checks }) =>
  errors({
    checks: !checks ? 'Required' : isNaN(checks) ? 'invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

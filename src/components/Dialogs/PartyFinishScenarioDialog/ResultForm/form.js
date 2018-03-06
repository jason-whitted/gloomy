import { errors } from '../../../../common';

const form = 'result';

const initialValues = {
  level: '',
  result: '',
};

const validate = ({ level, result }) =>
  errors({
    level: !level ? 'Required' : '',
    result: !result ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

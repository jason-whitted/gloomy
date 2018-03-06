import { errors } from '../../../../common';

const form = 'level';
const initialValues = {
  level: '',
};

const validate = ({ level }) =>
  errors({
    level: !level ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

import { errors } from '../../../common';

const form = 'create-campaign';

const initialValues = {
  name: '',
};

const validate = ({ name }) =>
  errors({
    name: !name ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

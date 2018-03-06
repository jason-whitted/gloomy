import { errors } from '../../../common';

const form = 'existing-campaign';

const initialValues = {
  id: '',
};

const validate = ({ id }) =>
  errors({
    id: !id ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

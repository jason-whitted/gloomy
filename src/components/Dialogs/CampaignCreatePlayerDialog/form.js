import { errors } from '../../../common';

const form = 'campaign-create-player';

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

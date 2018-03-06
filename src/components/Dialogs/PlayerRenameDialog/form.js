import { errors } from '../../../common';

const form = 'player-rename';

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

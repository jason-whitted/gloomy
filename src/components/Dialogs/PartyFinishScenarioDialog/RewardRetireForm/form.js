import { errors } from '../../../../common';

const form = 'reward-retire';

const initialValues = {
  character: '',
};

const validate = ({ character }) =>
  errors({
    character: !character ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

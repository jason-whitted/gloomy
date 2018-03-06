import { errors } from '../../../../common';

const form = 'reward-either';

const initialValues = {
  option: '',
};

const validate = ({ option }) =>
  errors({
    option: !option ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

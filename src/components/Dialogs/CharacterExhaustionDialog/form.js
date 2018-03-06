import { errors } from '../../../common';

const form = 'character-exhaustion';

const initialValues = {
  count: '1',
  target: '',
};

const validate = ({ count, target }) =>
  errors({
    count: !count ? 'Required' : isNaN(count) ? 'invalid' : '',
    target: !target ? 'Required' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

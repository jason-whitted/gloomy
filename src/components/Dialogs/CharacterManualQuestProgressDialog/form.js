import { errors } from '../../../common';

const form = 'character-manual-quest-progress';

const initialValues = {
  value: '',
  max: '',
};

const validate = ({ value, max }) =>
  errors({
    value: !value ? 'Required' : isNaN(value) ? 'Invalid' : '',
    max: !max ? 'Required' : isNaN(max) ? 'Invalid' : +max < +value ? 'Too low' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

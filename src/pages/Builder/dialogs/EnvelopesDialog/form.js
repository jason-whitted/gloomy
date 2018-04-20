import { errors } from '../../../../common';

const form = 'campaign-builder-envelopes';

const initialValues = {
  A: '',
  B: '',
  X: '',
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};

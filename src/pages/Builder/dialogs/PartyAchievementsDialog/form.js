import { errors } from '../../../../common';

const form = 'campaign-builder-donations';

const initialValues = {
  achievements: [],
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};

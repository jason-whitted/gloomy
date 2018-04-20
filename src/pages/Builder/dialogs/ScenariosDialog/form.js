import { errors } from '../../../../common';

const form = 'campaign-builder-scenarios';

const initialValues = {
  scenarios: [],
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};

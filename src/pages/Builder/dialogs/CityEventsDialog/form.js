import { errors } from '../../../../common';

const form = 'campaign-builder-city-events';

const initialValues = {
  events: [],
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};

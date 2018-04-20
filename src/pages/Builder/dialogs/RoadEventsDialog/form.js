import { errors } from '../../../../common';

const form = 'campaign-builder-road-events';

const initialValues = {
  events: [],
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};

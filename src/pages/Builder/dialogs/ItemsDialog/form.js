import { errors } from '../../../../common';

const form = 'campaign-builder-items';

const initialValues = {
  items: [],
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};

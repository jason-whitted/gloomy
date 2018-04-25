import { errors } from '../../../common';

const form = 'campaign-permissions';

const initialValues = {
  permissions: {},
};

const validate = () => errors({});

export default {
  form,
  initialValues,
  validate,
};

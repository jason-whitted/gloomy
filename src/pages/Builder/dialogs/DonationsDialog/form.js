import { errors } from '../../../../common';

const form = 'campaign-builder-donations';

const initialValues = {
  donations: '',
};

const validate = ({ donations }) =>
  errors({
    donations: !donations ? 'Required' : isNaN(donations) ? 'Invalid' : '',
  });

export default {
  form,
  initialValues,
  validate,
};

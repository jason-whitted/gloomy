import { errors } from '../../../common';

const form = 'campaign-notes';

const initialValues = {
  notes: '',
};

const validate = ({ notes }) =>
  errors({
    notes: '',
  });

export default {
  form,
  initialValues,
  validate,
};

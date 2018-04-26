import { errors } from '../../../common';

const form = 'party-notes';

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

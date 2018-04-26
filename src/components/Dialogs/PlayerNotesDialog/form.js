import { errors } from '../../../common';

const form = 'player-notes';

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
